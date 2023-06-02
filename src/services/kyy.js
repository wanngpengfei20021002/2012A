import request from '@/utils/request'
import api from './api'

// 获取专题活动信息
export const getFestivals = payload => request.get(api.getFestivals, payload)

// Select 列表
export const getFestivalConfig = payload => request.get(api.getFestivalConfig, payload)

// 修改专题活动状态
export const editFestivalStatus = payload => request.get(api.editFestivalStatus, payload)

// 上传
export const uploadFestivalImg = payload => request.uploadPost(api.uploadFestivalImg, payload)

// 提交
export const editFestival = payload => request.post(api.editFestival, payload)

// 详情
export const getFestivalInfo = payload => request.get(api.getFestivalInfo, payload)
