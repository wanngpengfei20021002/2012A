// 判断字符串长度 区分中文和英文
export const getStrLength = ({ str, max = 10}) => {
  // 中英文名称不超过一定长度 中文5 英文10
  let len = 0;
  for (let i = 0; i < str.length; i++) {
    let c = str.charCodeAt(i)
    //单字节加1
    if ((c >= 0x0001 && c <= 0x007e) || (0xff60 <= c && c <= 0xff9f)) {
      len++
 
    } else {
      len += 2
    }
    if (len > 4000) {
      return {
        len,
        str: str.slice(0, i)
      }
    }
  }
  return {
    len,
    str,
  }
}

export const getLeng = (str) => {
  // 中英文名称不超过一定长度 中文5 英文10
  let len = 0;
  for (let i = 0; i < str.length; i++) {
    let c = str.charCodeAt(i)
    //单字节加1
    if ((c >= 0x0001 && c <= 0x007e) || (0xff60 <= c && c <= 0xff9f)) {
      len++
 
    } else {
      len += 2
    }
  }
  return len
}


//中英文混合计算字符长度
export const getStrLen = (str) => {
  if (str) {
    return str.replace(/[^\x00-\xff]/g, '01').length;
  } else return 0;
};