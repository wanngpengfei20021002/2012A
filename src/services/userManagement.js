import request from '@/utils/request';
import api from './api';

// 用户管理列表
export const userManagementList = params => request.post(api.userManagementList, params)
// 查看详情
export const infoDetail = params => request.post(api.infoDetail, params)
// 订单详情
export const payLogList = params => request.post(api.payLogList, params)
// 消费汇总
export const consumptionLogList = params => request.post(api.consumptionLogList, params)
// 小说阅读记录
export const readLogList = params => request.post(api.readLogList, params)
// 充值记录
export const chargeLogList = params => request.post(api.chargeLogList, params)
