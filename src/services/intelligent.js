import request from '@/utils/request';
import api from './api';

// 推广管理-智能推送模块

// 获取智能推送列表状态
export const getIntelligent = payload => request.post(api.post_intelligent_list, payload);

// 开启或关闭智能推送状态
export const getIntelligentUpdate = payload => request.get(api.get_intelligent_update_status, payload);

// 推送时间点设置
export const getIntelligentSetTime = payload => request.post(api.post_set_time, payload);

// 自定义图文消息
export const getSetCustomMsg = payload => request.post(api.post_set_custom_message, payload);

// 获取自定义图文消息
export const getEditCustomMsg = payload => request.get(api.get_edit_custom_message, payload);

// 订阅通知信息获取/提交verifycode
export const setVerifyCode = payload => request.get(api.get_intelligent_verify_code, payload);