import request from '@/utils/request'
import api from './api'

export const getNovelInfoList = payload => request.get(api.getNovelInfoList, payload) // 获取小说列表
export const getParagraphInfoList = payload => request.get(api.getParagraphInfoList, payload) // 获取章节列表
export const getMaterialTag = payload => request.get(api.getMaterialTag, payload) // 获取章节列表
export const wechatUploadMediaImage = payload => request.uploadPost(api.wechatUploadMediaImage, payload) // 图片上传


export const getMediaTyleList = () => request.get(api.getMediaTypeList_put)