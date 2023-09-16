import request from '@/utils/request';
import api from './api';

// 获取小程序配置信息
export const getTagList = (payload) => request.get(api.get_tag_list, payload);

// 获取公众号列表
export const getTencentList = (payload) => request.get(api.get_group_member, payload);

// 同步至其他公众号
export const getSyncUsers = (payload) => request.post(api.get_sync_users, payload);

// 预估人数
export const getEstimateNum = (payload) => request.get(api.get_estimate_num, payload);

// 查看规则
export const getTagInfo = (payload) => request.get(api.get_tag_info, payload);

// 删除规则
export const getDelTag = (payload) => request.post(api.del_tag, payload);

// 标签属性展示列表
export const getTagAttr = (payload) => request.get(api.get_tag_attr, payload);

// 获取书籍下拉菜单数据
export const getSearchForm = (payload) => request.get(api.get_search_form, payload);

// 创建标签
export const getCreateTag = (payload) => request.post(api.get_create_tag, payload);

// 推广链接 下拉菜单
export const getPromoteList = (payload) => request.get(api.getPromoteList, payload);
