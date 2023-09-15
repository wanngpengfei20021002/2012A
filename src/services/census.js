import request from '@/utils/request';
import api from './api';

// ------------------- 数据统计 --------------------------

//订单
export const getCensusOrderAndCharge = (payload) =>
  request.get(api.get_census_order_and_charge, payload);
export const getCensusRecover = (payload) =>
  request.get(api.get_census_recover, payload);
export const getCensusRecoverDetail = (payload) =>
  request.get(api.get_census_recover_detail, payload);
export const getCensusNovel = (payload) =>
  request.get(api.get_census_novel, payload);
export const getCensusUser = (payload) =>
  request.get(api.get_census_user, payload);
export const getCensusBasicApk = (payload) =>
  request.get(api.get_census_basic_apk, payload);
export const getCensusWithdrawHistory = (payload) =>
  request.get(api.get_census_withdraw_history, payload);
export const applyFor = (payload) => request.get(api.withdrawal, payload);
export const getChannelOpts = (payload) =>
  request.get(api.get_channel_opts, { ...payload, is_auth: 1 });
export const recoverExportV2 = (payload) =>
  request.get(api.recoverExportV2, payload); // 导出
export const setRecoverCost = (payload) =>
  request.get(api.setRecoverCost, payload); // 统计

// 小说数据统计导出
export const exportNovel = (payload) => {
  return request.get(api.get_novel_export, payload, {
    responseType: 'blob',
  });
};
// 用户数据统计导出
export const get_user_export = (payload) => {
  return request.get(api.get_user_export, payload, {
    responseType: 'blob',
  });
};

/************************************回收报表********************************************** */
export const getRecycleList = (payload) =>
  request.get(api.getRecycleList_put, payload);
