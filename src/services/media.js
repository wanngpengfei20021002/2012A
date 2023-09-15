import request from '@/utils/request';
import api from './api';

/**
 * 媒体授权
 */

// 获取媒体授权列表数据
export const getMediaList = (payload) =>
  request.get(api.getMediaList_put, payload);

// 账户禁用恢复
export const editMediaStatus = (payload) =>
  request.get(api.editMediaStatus_put, payload);

// 获取授权链接
export const getAuthLink = (payload) =>
  request.get(api.getAuthLink_put, payload);

// 分配用户列表
export const getAllocateUserList = () =>
  request.get(api.getAllocateUserList_put);

// 分配账户
export const distributeAccount = (payload) =>
  request.get(api.distributeAccount_put, payload);

// 获取vivo数据源列表
export const getVivoDataSource = (payload) =>
  request.get(api.getVivoDataSource_put, payload);

// 关联vivo数据源
export const addVivoSrcid = (payload) =>
  request.post(api.addVivoSrcid_put, payload);

// 删除vivo数据源
export const deleteVivoSource = (payload) =>
  request.get(api.deleteVivoSource_put, payload);

// 关联Oppo广告账户
export const addOppoAdAccount = (payload) =>
  request.post(api.addOppoAdAccount_put, payload);

// 拉取巨量广告账户同步
export const getEngineUserAccount = (payload) =>
  request.get(api.getEngineUserAccount_put, payload);

// 巨量广告账户提交
export const updateEngineUserAccount = (payload) =>
  request.post(api.updateEngineUserAccount_put, payload);
