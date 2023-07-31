import axios from 'axios'
import _ from 'lodash'
// import { QMessage } from 'wd-component'
import config from '@/cfgs/common'

const isdev = environment.includes('start')
// const baseURL = isdev ? '/dev' : `/${environment}`
const baseURL = ''
const timeout = 3000

// dev / mirror / pre 环境切换域名
const getUrl = url => isdev ? url: `${config.requestUrl[environment]}${url}`

const codeMessage = {
  200: '服务器成功返回请求的数据。',
  201: '新建或修改数据成功。',
  202: '一个请求已经进入后台排队（异步任务）。',
  204: '删除数据成功。',
  400: '发出的请求有错误，服务器没有进行新建或修改数据的操作。',
  401: '用户没有权限（令牌、用户名、密码错误）。',
  403: '用户得到授权，但是访问是被禁止的。',
  404: '发出的请求针对的是不存在的记录，服务器没有进行操作。',
  406: '请求的格式不可得。',
  410: '请求的资源被永久删除，且不会再得到的。',
  422: '当创建一个对象时，发生一个验证错误。',
  500: '服务器发生错误，请检查服务器。',
  502: '网关错误。',
  503: '服务不可用，服务器暂时过载或维护。',
  504: '网关超时。',
}

const errorHandler = error => {
  const { response } = error

  if (response && response.status) {
    
    // console.log(codeMessage[response.status] || response.statusText)
    // QMessage.error(codeMessage[response.status] || response.statusText)
  } else if (!response) {
    // QMessage.error('网络异常无法连接到服务器')
    // console.log('网络异常无法连接到服务器')
  }

  return response
}

let cancelToken = axios.CancelToken

const cancel = []

const removePending = config => {
  for(let p in cancel){
    if (cancel[p].u === config.url) {
      cancel[p].f()
    }
  }
}

// 请求拦截器 发送一个请求之前
axios.interceptors.request.use(config => {
  //在一个ajax发送前执行一下取消操作
  removePending(config)
  config.cancelToken = new cancelToken(c => {
    cancel.push({
      f: c,
      u: config.url,
    })
  })

  return config

}, error => {
  return Promise.reject(error)
})

// 响应拦截器
axios.interceptors.response.use(response => {
  console.log(response, 'response');
  return response

}, error => {
  console.log(error, 'token失效了');
  errorHandler(error)
})

function processingData (response) {
  const data = _.get(response, 'data', null)

  if (!_.get(data, 'errno', '')) {
    return data

  } else {
    QMessage.error(data.msg)
    return {}
  }
}

// 上传
async function uploadPost (url, payload = {}, other = {}) {
  const response = await axios({
    method: 'post',
    url,
    data: payload,
    baseURL: '/dev', // 公共路径
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    },
    ...other,
  })
    .catch(err => console.log(err))

  return processingData(response)
}

// url 是请求的服务器地址
// payload 参数
// other 其他参数 headers 等
async function post (url, payload = {}, other = {}) {
  const token = localStorage.getItem('token')
  const response = await axios({
    method: 'post',
    url,
    baseURL: '/dev', // 公共路径
    data: token ? { ...payload, token } : { ...payload },
  })
    .catch(err => console.log(err))

  return processingData(response)
}

async function get (url, payload = {}, other = {}) {
  const token = localStorage.getItem('token')
  const response = await axios({
    method: 'get',
    baseURL: '/dev', // 公共路径
    url,
    params: token ? { ...payload, token } : { ...payload },
    ...other,
  })
    .catch(err => console.log(err))
  
  return processingData(response)
}

async function put (url, payload = {}, other = {}) {
  const token = localStorage.getItem('token')
  const response = await axios({
    method: 'put',
    url,
    baseURL: '/dev', // 公共路径
    data: token ? { ...payload, token } : { ...payload },
    ...other,
  })
    .catch(err => console.log(err))
  
  return processingData(response)
}

async function del (url, payload = {}, other = {}) {
  const response = await axios({
    method: 'delete',
    baseURL: '/dev', // 公共路径
    url,
    params: { ...payload },
    ...other,
  })
    .catch(err => console.log(err))
  
  return processingData(response)
}

export default {
  post,
  get,
  put,
  del,
  uploadPost,
}
