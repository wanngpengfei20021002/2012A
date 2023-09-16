// 模板消息
import request from '@/utils/request';
import api from './api';

// 获取模板消息列表数据
export const getTemplateList = (payload) => request.get(api.get_template_list, payload);

// 删除模板消息
export const getDelTemplateMsg = (payload) => request.post(api.post_del_template_msg, payload);

// 取消发送模板消息
export const getCancelTemplateMsg = (payload) => request.get(api.get_cancel_template_msg, payload);

// 获取模板信息
export const getTemplateInfo = (payload) => request.get(api.get_template_info, payload);

// 获取推广链接
export const getPromoteLink = (payload) => request.get(api.get_promote_links, payload);

// 添加、测试模板消息
export const getSendTemplateMsg = (payload) => request.post(api.post_send_template_msg, payload);

// 获取模板消息回填信息
export const getLastTemplate = (payload) => request.post(api.post_get_last_template, payload);

// 添加延迟模板消息
export const setAddDelayTemplate = (payload) => request.post(api.post_add_delay_template, payload);

// 编辑延迟模板消息
export const setEditDelayTemplate = (payload) => request.post(api.post_edit_delay_template, payload);

// 延迟模板消息列表
export const getDelayTemplateList = (payload) => request.get(api.get_delay_template_list, payload);

// 删除模板消息
export const getDeleteDelayTemplate = (payload) => request.get(api.get_delete_delay_template, payload);

// 修改延迟模板消息状态
export const getChangeDelayTemplateStatus = (payload) => request.get(api.get_change_delay_status, payload);