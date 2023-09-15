import request from '@/utils/request';
import api from './api';

// 推广管理-关键词回复模块

// 获取关键词列表状态
export const getKeywordsList = payload => request.get(api.get_keywords_list, payload);

// 修改官方默认关键词状态
export const getSwitchKeyword = payload => request.get(api.get_switch_keyword, payload);

// vip同步官方默认关键词状态
export const getSyncOfficialKeyword = payload => request.post(api.get_sync_keyword_official, payload);

// 获取官方默认关键词状态
export const getSwitchKeywordInfo = payload => request.get(api.get_switch_keyword_info, payload);

// 删除关键字
export const getDelKeyword = payload => request.post(api.get_del_keyword, payload);

// vip批量同步关键字至其他公众号
export const getSyncKeyword = payload => request.post(api.get_sync_keyword, payload);

// 添加关键字 创建时使用
export const editKeywordInfo = payload => request.post(api.editKeywordInfo, payload);

// vip创建关键字 创建时使用
export const vipAddKeyword = payload => request.post(api.vipAddKeyword, payload);

// 关键字提交 编辑时使用
export const updateKeywordInfo = payload => request.post(api.updateKeywordInfo, payload);

// 编辑关键字
export const keywordDetail = payload => request.post(api.keywordDetail, payload);
