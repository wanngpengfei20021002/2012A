import is from 'is_js';
import isArray from 'lodash.isarray';
import moment from 'moment';
import numeral from 'numeral';
import { pathToRegexp } from 'path-to-regexp';
import qs from 'qs';
import cfgs from '@/cfgs/common';

const isEqual = require('react-fast-compare');

// 深度比较
const equal = (pProps, nProps) => isEqual(pProps, nProps);

// 获取 2个元素 最近的父元素
const commonParentNode = (oNode1, oNode2) => {
  if (oNode1.contains(oNode2)) {
    return oNode1;
  } else {
    return commonParentNode(oNode1.parentNode, oNode2);
  }
};

// 读取上传文件信息
function fileReaders() {
  const readyFile = (fr, resolve) => {
    fr.onload = (evt) => resolve(evt.target.result);
    fr = null;
  };

  // 文件读取成 URL
  function fileUrl(file) {
    return new Promise((resolve) => {
      const fr = new FileReader();
      fr.readAsDataURL(file);
      readyFile(fr, resolve);
    });
  }

  // 文件读取成 二进制
  function fileBinary(file) {
    return new Promise((resolve) => {
      const fr = new FileReader();
      fr.readAsBinaryString(file);
      readyFile(fr, resolve);
    });
  }

  return {
    fileUrl,
    fileBinary,
  };
}

const fileReader = fileReaders();

// 字节 转 kb
function byteToKb(num = 0) {
  return (num * 100) / 1024 / 100;
}

// base64 转 Blob URL
function base64ToBlobUrl(dataURI) {
  let byteString = window.atob(dataURI.split(',')[1]);
  let mimeString = dataURI.split(',')[0].split(':')[1].split('')[0];
  let ab = new ArrayBuffer(byteString.length);
  let ia = new Uint8Array(ab);
  for (let i = 0; i < byteString.length; i++) {
    ia[i] = byteString.charCodeAt(i);
  }
  return window.URL.createObjectURL(new Blob([ab], { type: mimeString }));
}

// 查找 pathname 1 是否是当前路由
function findPath(data, pathname) {
  if (is.string(data)) {
    return pathToRegexp(data).exec(pathname);
  }

  if (is.array(data)) {
    return data.find((dt) => pathname.includes(dt));
  }
}

// 深层路径取数据
function deepAt(object, path) {
  let result = _.at(object, path);
  return result && result[0];
}

// 映射函数
const doMapping = (primary, tube) => {
  return _.reduce(
    tube,
    (pre, item, key) => {
      if (_.isString(item)) {
        return {
          ...pre,
          [key]: deepAt(primary, item),
        };
      } else if (_.isArray(item)) {
        return {
          ...pre,
          [key]: item.map((d) => deepAt(primary, d)),
        };
      } else {
        return {
          ...pre,
          [key]: doMapping(primary, item),
        };
      }
    },
    {},
  );
};

// 给 style 添加属性
const joinStyle = (obj, oCss) => {
  // 特殊的 css 映射表
  const map = {
    radius: 'borderRadius',
  };

  for (let [key, value] of Object.entries(oCss)) {
    value && (obj[map[key] || key] = value);
  }

  return obj;
};

/**
 * @function 格式化日期
 *
 * @param {type} { String } 日期类型
 * @param {value} { String } 日期值
 * @param {showTime} { String } showTime 同 antd showTime
 * @param {picker} { String } 设置选择器类型
 *
 * @return '{ from: '时间戳', to: '时间戳' } || String'
 */
function formatDate(opt) {
  const { type, value, showTime, picker } = opt;
  if (value) {
    const getDate = (value, key) => ({
      from: moment(value[0]).startOf(key).unix(),
      to: moment(value[1]).endOf(key).unix(),
    });

    return {
      RangePicker() {
        // 选择月返回 当月第一天 00:00:00 - 当月最后一天 23:59:59
        if (picker === 'month') {
          return getDate(value, 'month');
        }

        // 未设置选择 时分秒 返回 00:00:00 - 23:59:59
        if (!showTime) {
          return getDate(value, 'day');
        }

        // 设置了
        return {
          from: moment(value[0]).unix(),
          to: moment(value[1]).unix(),
        };
      },

      TimePicker() {
        return moment(value).unix();
      },

      DatePicker() {
        // 选择月返回 当月第一天 00:00:00 - 当月最后一天 23:59:59
        if (picker === 'month') {
          return moment(value).endOf('month').unix();
        }

        // 未设置选择 时分秒 返回 00:00:00 - 23:59:59
        if (!showTime) {
          return moment(value).endOf('day').unix();
        }

        return moment(value).unix();
      },
    }[type]();
  } else {
    return false;
  }
}

// 涉及到 时间范围参数的(字段名需要为timeRange或者其他任何)，而后端需求参数为form，to, start_time, end_time 均可使用本方法
// params：
//  rawData 原始数据，
// fieldName 需要处理的时间范围字段名，不传默认为是timeRange
// rangeFieldName  处理后的时间范围字段名，不传默认是 ['from', 'to']
// 作用：将rawData 中的 时间范围键值对 替换（注意是替换）为 from，to 2个键值对，并返回处理后的数据。

const formatTimeRange = (rawData, fieldName, rangeFieldName) => {
  if (rangeFieldName === undefined) {
    rangeFieldName = ['from', 'to'];
  }
  const rangeObj = {};
  if (!isArray(rawData[fieldName])) {
    if (rawData[fieldName] === undefined || rawData[fieldName] === null) {
      rawData[fieldName] = ['', ''];
    } else {
      return rawData;
    }
  }
  if (Array.isArray(rangeFieldName)) {
    rangeObj[rangeFieldName[0]] =
      rawData[fieldName][0] === ''
        ? ''
        : moment(rawData[fieldName][0]).format('YYYY-MM-DD');
    rangeObj[rangeFieldName[1]] =
      rawData[fieldName][1] === ''
        ? ''
        : moment(rawData[fieldName][1]).format('YYYY-MM-DD');
  }
  delete rawData.timeRange; //search 或者 export 时参数 timeRange要转化为from to
  return { ...rawData, ...rangeObj };
};

// 过滤掉value值为 null, undefined, ''的键值对
const compactObject = (data) => {
  return Object.keys(data)
    .filter(
      (key) =>
        data[key] !== null && data[key] !== undefined && data[key] !== '',
    )
    .reduce((acc, key) => ({ ...acc, [key]: data[key] }), {});
};

// 导出
const exportFile = (obj) => {
  location.href = `${cfgs.export[environment || 'dev']}?${qs.stringify(obj)}`;
};

// 时间戳格式化 兼容 10 13位
const timestampFormat = (seconds) => {
  let date =
    (seconds + '').length == 13 ? new Date(seconds) : new Date(seconds * 1000);
  let year = date.getFullYear(); //年
  let month = date.getMonth() + 1; //月
  let day = date.getDate(); //日
  let hour = date.getHours().toString().padStart(2, '0'); //时
  let minute = date.getMinutes().toString().padStart(2, '0'); //分
  let second = date.getSeconds().toString().padStart(2, '0'); //秒
  return (
    year + '-' + month + '-' + day + ' ' + hour + ':' + minute + ':' + second
  );
};

// 是否是 vip
const isVipRole = (roleId) => [14, 16].includes(Number(roleId));

// 流文件下载处理  excel
const blobFileDown = (blob, name) => {
  const url = window.URL.createObjectURL(
    new Blob([blob], {
      // 设置该文件的类型，这里对应的类型对应为.xlsx格式
      type:
        'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=utf-8',
    }),
  );
  const link = document.createElement('a');
  link.href = url;
  const fileName = decodeURI(name);
  link.setAttribute('download', `${fileName}.xls`);
  document.body.appendChild(link);
  link.click();
};

// 流文件下载处理  压缩包
const blobZipDown = (blob, name) => {
  const url = window.URL.createObjectURL(
    new Blob([blob], {
      // 设置该文件的类型，这里对应的类型对应为.zip格式
      type: 'application/zip',
    }),
  );
  const link = document.createElement('a');
  link.href = url;
  const fileName = decodeURI(name);
  link.setAttribute('download', `${fileName}.zip`);
  document.body.appendChild(link);
  link.click();
};

// table 数据 没有值 展示 --
const tableDefault = (text) => {
  // 数字正常返回
  if (is.number(text)) {
    return text;
  }

  return text || '--';
};

// RMB 格式化
const formatRmb = (text) =>
  text ? numeral(text).format('0,0.00') : tableDefault(text);

// 过滤空字段
const filterUndefinde = (opt = {}) => JSON.parse(JSON.stringify(opt));

// array-move 引入报错 抽离使用
const arrayMoveImmutable = (array, fromIndex, toIndex) => {
  function arrayMoveMutable(array, fromIndex, toIndex) {
    const startIndex = fromIndex < 0 ? array.length + fromIndex : fromIndex;

    if (startIndex >= 0 && startIndex < array.length) {
      const endIndex = toIndex < 0 ? array.length + toIndex : toIndex;

      const [item] = array.splice(fromIndex, 1);
      array.splice(endIndex, 0, item);
    }
  }
  array = [...array];
  arrayMoveMutable(array, fromIndex, toIndex);
  return array;
};

// 获取特定的cookie值
const getCookie = (cookieName) => {
  let strCookie = document.cookie;
  let arrCookie = strCookie.split('; ');
  for (let i = 0; i < arrCookie.length; i++) {
    let arr = arrCookie[i].split('=');
    if (cookieName == arr[0]) {
      return arr[1];
    }
  }
  return '';
};

// 获取表单值
const getFormValues = () => {
  const { getState, dispatch } = window.g_app;
  // 表单参数 和 redux 属性
  return {
    formValues: getState().tabForm.myForm.myGetFieldsValue(),
    ...window.g_app,
  };
};

// 保留2位展示成百分比
const percentage = (opt) =>
  opt == '0.00' ? `${opt}%` : `${(opt * 100).toFixed(2)}%`;

// 解析url 参数对象
const geturl = (url) => {
  let arr = url.split('?');
  if (arr.length <= 1) {
    return {};
  }
  let items = {};
  let res = arr[1].split('&');
  for (let i = 0; i < res.length; i++) {
    let a = res[i].split('=');
    items[a[0]] = a[1];
  }
  return items;
};



export {
  equal, // 深度比较
  commonParentNode, // 获取 2个元素 最近的父元素
  fileReader, // 读取上传文件信息
  byteToKb, // 字节 转 kb
  base64ToBlobUrl, // base64 转 Blob URL
  findPath, // 查找 pathname 是否是当前路由
  formatTimeRange, // 处理时间范围数据
  doMapping, // 映射函数
  joinStyle, // 给 style 添加属性
  compactObject, // 过滤掉value值为 null, undefined, ''的键值对
  exportFile, //
  formatDate, // 格式化日期 时间
  timestampFormat, // 时间戳转换
  isVipRole,
  blobFileDown, // 文件流下载
  blobZipDown, // 压缩包下载
  tableDefault,
  filterUndefinde, // 过滤空字段
  arrayMoveImmutable, // array-move 插件方法
  formatRmb, // 金钱格式化
  getCookie, // 获取cookie
  getFormValues, // 获取表单值
  percentage, // 百分比展示
  geturl,
};
