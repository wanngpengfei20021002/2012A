import { validateLink } from '@/utils/dataMapping' // 消息标题 url 互动

// 选择渠道 参数
export const getUserArr = ({ isVip, customerMsgId, editOpt, paramsChild, iscopy }) => {
  const { getState } = window.g_app
  const { tabForm, checkChannel } = getState()
  const { myForm } = tabForm
  const { test_open_id } = myForm.myGetFieldsValue()
  const { channelList } = checkChannel

  if (isVip) {
    // customerMsgId: 编辑
    // iscopy 复制
    if (customerMsgId || iscopy) {
      return [editOpt.uid]

    } else {
      // 粉丝有值 认为是点击了测试发送
      if (test_open_id) return paramsChild.user_arr.slice(0, 1)
      return paramsChild.user_arr
    }

  } else {
    // 粉丝有值 认为是点击 测试发送 
    // if (test_open_id) {
    //   const { value, appid } = channelList.find(dt => paramsChild.json[dt.value])
    //   return { [value]: appid }
    // }
    // 正常提交
    return paramsChild.json
  }
}

// 消息组件参数
export const messageFn = {
  // 图文提交参数
  imageText: opt => {
    const { titleMessage, messageTitle, description = '', ...item } = opt
    
    // 验证 链接地址 是否 是消息标题模板 如果验证通过 获取标题
    const title = validateLink()

    if (messageTitle == 1 && !title) return false
  
    return {
      content: {
        description: description.substr(0, 300) || '→戳我立即阅读',
        ...item,
        title: messageTitle == 1 ? title : titleMessage, // 标题映射成 后台 title
        type: 1,
      }
    }
  }
}

// 消息组件 图文列表
export const imageTextList = ({ maxImageData = {}, imageData = [] }) => {
  // 首条数据
  const processingMaxData = () => {
    const { titleMessage, messageTitle, description, ...item } = maxImageData.xxx
    return { 
      ...item, 
      title: titleMessage, 
      type: 1, 
      description: description || '→戳我立即阅读',
    }
  }

  // 次条数据
  const processingImageData = () => {
    return imageData.reduce((arr, dt) => {
      if (Object.values(dt.xxx).length) {
        const { titleMessage, id, messageTitle, description, ...item } = dt.xxx
        arr.push({ 
          ...item, 
          title: titleMessage, 
          type: 1, 
          description: description || '→戳我立即阅读',
        })
      
      // 默认次条消息
      } else {
        const { title, image, url } = dt
        arr.push({
          pic_url: image,
          title,
          url,
          type: 1,
        })
      }
      return arr
    }, [])
  }

  // 首条没值
  if (!maxImageData.title) return false

  return [processingMaxData(), ...processingImageData()]
}
