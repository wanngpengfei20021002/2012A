import request from '@/utils/request';
import api from './api';

// 获取被关注回复消息欢迎语等信息
export const getFocusedWelcome = (payload) =>
  request.get(api.get_focused_welcome, payload);
// 被关注回复设置
export const setSubscribeReply = (payload) =>
  request.post(api.setSubscribeReply, payload);
// 提交 编辑
export const setSubscribeReplyNew = (payload) =>
  request.post(api.setSubscribeReplyNew, payload);
// 详情
export const subscribeReplyIndexNew = (payload) =>
  request.get(api.subscribeReplyIndexNew, payload);

// vip 被关注回复同步
export const syncFocusedGzh = (payload) =>
  request.post(api.sync_focused_gzh, payload);
