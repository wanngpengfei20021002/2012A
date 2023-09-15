import request from '@/utils/request';
import api from './api';

export const richList = (payload) => request.get(api.richList, payload); // 客服消息信息
export const sendCustomerMsg = (payload) =>
  request.post(api.sendCustomerMsg, payload); // 创建客服消息
export const wxRichList = (payload) => request.get(api.wxRichList, payload); // 客服消息编辑信息
export const cancelCustomerMsg = (payload) =>
  request.get(api.cancelCustomerMsg, payload); // 客服消息取消发送
export const delCustomerMsg = (payload) =>
  request.get(api.delCustomerMsg, payload); // 客服消息删除
export const uploadMediaImage = (payload) =>
  request.uploadPost(api.uploadMediaImage, payload); // 上传图片

export const syncGzh = (payload) => request.post(api.syncGzh, payload); // 同步公众号

export const delayList = (payload) => request.get(api.delayList, payload); // 延迟一分钟客服消息列表
export const delDelayMsg = (payload) => request.post(api.delDelayMsg, payload); // 延迟一分钟客服消息删除
export const setDelayMsg = (payload) => request.post(api.setDelayMsg, payload); // 延迟客服消息添加编辑
export const setDelayStatus = (payload) =>
  request.get(api.setDelayStatus, payload); // 延迟一分钟状态设置
export const saveMinuteDelay = (payload) =>
  request.post(api.saveMinuteDelay, payload); // 一分钟客服消息添加编辑
export const sendTestCustomerMsg = (payload) =>
  request.post(api.sendTestCustomerMsg, payload); // 延迟 一分钟测试发送
export const syncDelayGzh = (payload) =>
  request.post(api.syncDelayGzh, payload); // 延迟 一分钟 公众号消息同步
