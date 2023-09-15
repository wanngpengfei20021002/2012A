import request from '@/utils/request'
import api from './api'

export const fetchSampleList = payload => request.get(api.sampleList, payload)
export const userLevel = payload => request.get(api.userLevel, payload)
