import request from '@/utils/request';
import api from './api';

/* 财务管理 */

// 我的结算单
export const getManger = (payload) => request.get(api.manger, payload)

// 提现记录/可提现关联订单
export const withdrawRecord = (payload) => request.get(api.withdrawRecord, payload)

// 提现记录详情-关联订单列表
export const settlementOrders = (payload) => request.get(api.settlementOrders, payload)

// 提现记录详情-结算单详情
export const settlementDetail = (payload) => request.get(api.settlementDetail, payload)

// 申请提现/批量提现
export const financeWithdrawal = (payload) => request.get(api.financeWithdrawal, payload)

// 广告收益
export const getMoneyList = (payload) => request.get(api.getMoneyList, payload)

// 可提现关联订单
export const mysettlementlist = (payload) => request.get(api.mysettlementlist, payload)

// 提现记录导出
export const putVipWithdrawExcel = (payload) => request.get(api.putVipWithdrawExcel, payload, { responseType: 'blob' })
