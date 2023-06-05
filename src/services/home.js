import request from '@/utils/request'
import api from './api'

export const fetchSampleList = payload => request.get(api.sampleList, payload)
export const userLevel = payload => request.get(api.userLevel, payload)
// 提交
export const samplePut1 = payload => request.post(api.samplePut, payload)
