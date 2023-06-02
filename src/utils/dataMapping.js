import shortid from 'shortid'
import { message } from 'antd'

// 图文上传图片 Menu 数据
// 自定义标题 Menu 数据
// 转成 一维 数组
export const getMenuData = res => {
  return _.get(res, 'data', []).reduce((ar, dt) => {
    ar.push({
      tag_name: dt.tag_name,
      num: dt.num,
      req_info: dt.req_info,
    })
    ar.push(..._.get(dt, 'child_data', []))
    return ar
  }, [])
    .map(dt => {
      return {
        tag_name: `${dt.tag_name}(${dt.num})`,
        num: dt.num,
        type: _.get(dt, 'req_info.type'),
        sex: _.get(dt, 'req_info.sex'),
      }
    })
}

// 自动生成标题
// 链接地址切换后 自动填充 自动生成标题选中的模板
function autoTitle ({ link, titleMessage, dispatch, messageNum }) {
  if (!link) return true
  // let text
  
  const { novel_id, novel_name, paragraph_title, protagonist } = link

  // 模板生成方案
  const ienum = {
    0: () => `继续阅读《${novel_name}》- ${protagonist}`,
    1: () => `《${novel_name}》${paragraph_title}`,
    2: () => `继续阅读 - ${protagonist}`,
    3: () => `继续阅读 - ${paragraph_title}`
  }

  // novel_id <= 0 不往下继续执行
  if (Number(novel_id) <= 0) {
    message.warning('输入的链接地址不是小说阅读页!')
    return false
  }
  
  // 获取自动生成 select 选中文本模板
  if (messageNum === 1) {
    // text = autoSelect.find(dt => dt.value == titleMessage).label
  }
  if (![0, 1, 2, 3].includes(titleMessage)) return titleMessage

  dispatch({
    type: 'fourMessages/setParams',
    payload: { 
      titleMessage: ienum[titleMessage](), 
      messageTitle: 2,
      titleMessage2: ienum[titleMessage](), 
      messageTitle2: 2,
    }
  })

  dispatch({ type: 'fourMessages/setMessageNum2', payload: 2 })
  dispatch({ type: 'fourMessages/setMessageNum', payload: 2 })

  return ienum[titleMessage]()
}

// 活动标题 展示活动标题的 lable
function activityTitle ({ linkActivityData, value, dispatch }) {
  const { label } = linkActivityData.find(dt => dt.url == value.url)

  dispatch({
    type: 'fourMessages/setParams',
    payload: { 
      titleMessage: label,
      titleMessage2: label,
      messageTitle: 2,
      messageTitle2: 2,
    }
  })

  return label
}

// 消息标题验证
export const validateLink = (form = {}) => {
  const { dispatch, getState } = window.g_app
  const { fourMessages, tabForm, common, imageText, addTitle } = getState()
  const { messageNum, messageNum2 } = fourMessages // 消息标题 选择的 自动生成 还是 自定义
  const { myForm } = tabForm
  const { promotionActivities: promotionActivities2 } = addTitle
  const { promotionLink, linkActivityData } = common // 图文 活动链接 推广链接数据
  const { promotionActivities } = imageText
  const { titleMessage, titleMessage2, childValues, messageTitle, messageTitle2 } = 
    form.myGetFieldsValue ? form.myGetFieldsValue() : myForm.myGetFieldsValue()
  const [, value] = childValues
  const link = promotionLink.find(dt => {
    return dt.short_url === value.url
  }) // 选中的当前图文链接数据

  // messageTitle 自定义标题 不需要匹配以下逻辑
  if (messageTitle) {
    if ( 
      (promotionActivities == 1 && messageTitle == 2) || 
      (promotionActivities2 == 1 && messageTitle == 2) || 
      messageNum == 2
    ) {
      return false
    }
  }

  if (messageTitle2) {
    if ( 
      (promotionActivities == 1 && messageTitle2 == 2) || 
      (promotionActivities2 == 1 && messageTitle2 == 2) || 
      messageNum2 == 2
    ) {
      return false
    }
  }

  // 链接地址选择的活动链接
  if (promotionActivities == 2 || promotionActivities2 == 2) {
    return activityTitle({ linkActivityData, value, dispatch })
  }
  
  // 链接地址选择的活动链接
  if (promotionActivities == 1 || promotionActivities2 == 1) {
    const title = titleMessage !== undefined ? titleMessage : titleMessage2
    return autoTitle({ link, titleMessage: title, dispatch, messageNum })
  }
}

// 消息 编辑 回填
function onEdits () {
  // 消息组件选中 tab
  // itype == 3 表示 6个 tab 组件
  // type 当前选中的 tab
  const setTab = ({ type, dispatch }) => {
    dispatch({ type: 'fourMessages/setTabType', payload: type })
  }
  
  // 图文列表模式数据
  const imageList = res => {
    return res.map(dt => {
      const { title, pic_url, url } = dt

      return {
        title: dt.title,
        image: pic_url,
        url,
        xxx: {
          ...dt,
          titleMessage: title,
          messageTitle: 2,
        }
      }
    })
  }
  
  // 后台数据 转 添加纯文本消息 列表
  const newInfo = info => info.map(value => {
    const { dispatch } = window.g_app
    // msg_child_type // 文本 3个 按钮的类型
    // title 必须要单独过滤出来
    const { msg_child_type, title, ...item } = value

    // 保存 文本表单值 到 dva
    dispatch({ type: 'fourMessages/setTextParmas', payload: value })
    
    // 文本 -> 添加标题链接消息
    if (msg_child_type === 'title_url_msg') {
      if (title) {
        // 消息标题 定位到 自定义 radio 选中 并 展开下方 表单
        dispatch({ type: 'fourMessages/setMessageNum', payload: 2 })
      }

      return {
        type: msg_child_type,
        id: shortid.generate(),
        title: title, // 文本列表
        url: item.url,
        xxx: { 
          ...item,
          messageTitle2: 2, // 消息标题 自定义 选中 (编辑默认都选中 自定义)
          titleMessage2: title, // 后台返回 title 映射成 titleMessage 回填
        },
      }
    }
  
    // 文本 -> 添加纯文本消息
    if (msg_child_type === 'pure_text_msg') {
      return {
        type: msg_child_type,
        id: shortid.generate(),
        title: item.send_content, // 文本列表
        xxx: item, // 带入真正的数据
      }
    }
  
    // 插入自动签到
    if (msg_child_type === 'sign_msg') {
      return {
        type: msg_child_type,
        id: shortid.generate(),
        title: item.send_content, // 文本列表
        xxx: item, // 带入真正的数据
      }
    }
  })

  // 图文混排 文本
  const textAreaFn = ({ type, dispatch, content }) => {
    const { send_content } = content
    // 消息组件选中 tab
    setTab({ type: '2', dispatch })

    // 保存文本值
    dispatch({ type: 'textarea/setTextAreaData', payload: send_content })

    // 保存提交给后台的文本 空格 回车进行了转换
    dispatch({
      type: 'textarea/setSubmitText',
      payload: send_content.replace(/\n/g, '\r\n'),
    })
    // 表单回填
    dispatch({
      type: 'fourMessages/setParams',
      payload: { textarea: send_content },
    })
  }
  
  // 图文 编辑
  const imageTextFn = ({ type, opt, content, dispatch, itype }) => {
    const { url } = content
    const { getState } = window.g_app
    const { promotionLinkData } = getState().common // 推广链接
    const [{ novel_id } = {}] = promotionLinkData.filter(dt => dt.url == url)

    // novel_id 有值 简述展示 4个按钮 否则展示 2按钮
    dispatch({ type: 'imageText/setSketchButton', payload: novel_id })

    // 消息组件选中 tab
    setTab({ type: itype == 3 ? '5' : '1', dispatch })

    setTimeout(() => {
      // 初始化 图文列表
      dispatch({
        type: 'fourMessages/setParams',
        payload: { 
          ...content,
          ...opt,
          messageTitle: 2, // 消息标题 默认选中自定义标题
          titleMessage: content.title, // 标题格式化成 自定义格式
        },
      })
    
      // 消息标题 raido 选中
      dispatch({ type: 'fourMessages/setMessageNum', payload: 2 })
    
      // 图文 图片回填
      dispatch({ type: 'imageText/setUploadImage', payload: content.pic_url })
    })
  }
  
  // 文本 编辑
  const textFn = ({ opt, info, type, dispatch, itype }) => {
    // 格式化后台数据 初始化展示文本列表
    dispatch({ type: 'text/initTextData', payload: newInfo(info) })

    // 消息组件选中 tab
    setTab({ 
      type: itype == 3 ? '4' : '2',
      dispatch,
    })

    /*
      * 格式化 文本列表格式
      xxx: 后台回填的真正数据
      [{ id, title, url, xxx }]
    */
    dispatch({
      type: 'fourMessages/setParams',
      payload: {
        data: info,
        ...opt,
      },
    })
  }

  // 图片
  const imageFn = ({ opt, content, dispatch, itype }) => {
    const isbool = Array.isArray(content.url)
    
    // 多图上传
    if (isbool) {
      dispatch({ type: 'uploadImage2/setUrl', payload: content.url }) // 初始化 图片
    
    // 单张图 上传
    } else {
      dispatch({  type: 'uploadImage/setUrl', payload: content }) // 初始化 图片
    }
    // 消息组件选中 tab
    // itype === 3 表示 6个 tab
    setTab({ type: itype == 3 ? '6' : '3', dispatch })
    dispatch({ type: 'fourMessages/setParams', payload: { ...content, ...opt } })
  }

  // 语音
  const audioFn = ({ type, opt, content, dispatch, itype }) => {
    dispatch({  type: 'uploadAudio/setUrl', payload: content }) // 初始化 语音
    // 消息组件选中 tab
    // itype === 3 表示 6个 tab
    setTab({ type: itype == 3 ? '7' : '4', dispatch })
    dispatch({ type: 'fourMessages/setParams', payload: { ...content, ...opt } })
  }

  // 小说章节
  const novelChapters = async ({ content, opt, dispatch, itype }) => {
    const { novel_id, first } = content
    setTab({ type: '1', dispatch }) // 消息组件选中 tab
    await dispatch({ type: 'novelChapters/fetch', payload: { search_word: first } })
    await dispatch({ type: 'novelChapters/fetchChapter',  payload: { novel_id } })
    await dispatch({ 
      type: 'fourMessages/setParams', 
      payload: { ...opt, ...content, first: novel_id }
    })
  }

  // 活动链接
  const activeLinks = ({ content, opt, dispatch }) => {
    setTab({ type: '2', dispatch }) // 消息组件选中 tab
    dispatch({ type: 'fourMessages/setParams', payload: { ...opt, ...content } })
  }

  // 小程序卡片
  const wxFn = ({ content, opt, dispatch }) => {
    setTab({ type: '7', dispatch })

    // 初始化 图片
    dispatch({ 
      type: 'uploadImage2/setOneUpload',
      payload: { url: content.pic_url }
    })

    // 表单回填
    dispatch({
      type: 'fourMessages/setParams',
      payload: { ...opt, ...content },
    })
  }

  const textareaFn2 = ({ opt, info, type, dispatch, itype }) => {
    const { content } = opt
    // 消息组件选中 tab
    setTab({ type: 8, dispatch })

    dispatch({
      type: 'fourMessages/setParams',
      payload: {
        ...opt,
        ...((content.info && content.info.length) ? content.info : content),
        ...content.info,
      },
    })
  }

  return (opt, itype) => {
    const { dispatch } = window.g_app
    const { content = {} } = opt // content 四类消息 回填值
    const { info = [], type = 1 } = content

    // 图文模式
    if (type == 1) {
      // 图文列表模式
      if (itype == '1-1') {
        const newImageList = imageList(content)
        
        if (type && type == 1) {
          dispatch({
            type: 'maxImageList/setMaxImageData', 
            payload: newImageList[0],
          })
          dispatch({
            type: 'maxImageList/initImageData', 
            payload: newImageList.slice(1),
          })
        }
      
      // 图文编辑
      } else {
        imageTextFn({ content, opt, dispatch, type, itype })
      }
    }

    // 文本消息
    if (type == 2) {
      // 图文混排 文本
      if (itype == 8) {
        textAreaFn({ type, dispatch, content })

      } else {
        // itype 消息组件类型
        textFn({ type, info, dispatch, opt, itype })
      }
    }

    // 图片
    if (type == 3) {
      imageFn({ content, opt, dispatch, itype })
    }

    // 语音
    if (type == 4) {
      audioFn({ content, opt, dispatch, type, itype })
    }

    // 文章
    if (type == 5) {
      novelChapters({ content, opt, dispatch, type, itype })
    }

    // 活动链接
    if (type == 6) {
      activeLinks({ content, opt, dispatch, type, itype })
    }

    // 小程序卡片
    if (type == 7) {
      wxFn({ content, opt, dispatch, type, itype })
    }

    if (type == 8) {
      console.log({ type, info, dispatch, opt, itype });
      textareaFn2({ type, info, dispatch, opt, itype })
    }
  }
}

export const onEdit = onEdits()
