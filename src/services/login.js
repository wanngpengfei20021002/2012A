import request from '@/utils/request'
import api from './api'

// 登录
export const login2 = payload => request.post(api.sampleLogin, payload)

// 上传
export const upload3 = payload => request.uploadPost(api.upload, payload)

