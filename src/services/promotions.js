import request from '@/utils/request';
import api from './api';

// 获取平台活动列表数据
export const getPromotionsList = (payload) => request.get(api.get_promotions_list, payload);

// 获取平台活动每日统计列表数据
export const getPromotionsDailyList = (payload) => request.get(api.get_promotions_daily_list, payload);

// 获取自定义活动列表数据
export const getPromotionsCustomList = (payload) => request.post(api.get_promotions_custom_list, payload);

// 获取自定义活动每日统计列表数据
export const getPromotionsCustomDailyList = (payload) => request.get(api.get_promotions_custom_daily_list, payload);

// 获取赠币活动列表数据
export const getPromotionsPresentedList = (payload) => request.post(api.get_promotions_presented_list, payload);

// 获取赠币活动每日统计列表数据
export const getPromotionsPresentedDailyList = (payload) => request.get(api.get_promotions_presented_daily_list, payload);

// 删除自定义活动
export const getDeleteCustom = (payload) => request.post(api.post_delete_custom, payload);

// 删除赠币活动
export const getDeleteCoupon = (payload) => request.post(api.post_delete_coupon, payload);

// 修改自定义活动弹窗状态
export const getUpdateCustomPopupStatus = (payload) => request.post(api.post_update_custom_popup_status, payload);

// 修改赠币活动弹窗状态
export const getUpdatePresentedPopupStatus = (payload) => request.post(api.post_update_presented_popup_status, payload);

// 获取自定义活动信息
export const getUserActInfo = (payload) => request.get(api.get_user_define_act_info, payload);

// 获取赠币活动信息
export const getCouponActInfo = (payload) => request.get(api.get_coupon_activity_info, payload);

// 添加自定义活动
export const getAddCustomActivity = (payload) => request.post(api.get_add_custom_activity, payload);

// 添加赠币活动
export const getAddCouponActivity = (payload) => request.post(api.get_add_coupon_activity, payload);

// 查看预估人数
export const getEstimatedNum = (payload) => request.post(api.get_estimated_num, payload);

// 导出自定义活动每日统计
export const getCustomDailyExport = (payload) => request.get(api.get_custom_daily_export, payload, { responseType: 'blob' });

// 导出赠币活动每日统计
export const getCouponDailyExport = (payload) => request.get(api.get_coupon_daily_export, payload, { responseType: 'blob' });

// 编辑自定义活动
export const getEditCustomActivity = (payload) => request.post(api.post_edit_custom, payload);

// 编辑赠币活动
export const getEditCouponActivity = (payload) => request.post(api.post_edit_coupon, payload);

// vip批量同步至其他公众号-自定义活动
export const getSyncChannelCustom = (payload) => request.post(api.post_sync_channel_custom, payload);

// vip批量同步至其他公众号-赠币活动
export const getSyncChannelCoupon = (payload) => request.post(api.post_sync_channel_coupon, payload);

// vip获取接受粉丝标签用户数据
export const getUserTagList = (payload) => request.post(api.get_smart_template_user_list, payload);

// vip批量删除自定义活动
export const getDeleteCustomBatch = (payload) => request.post(api.post_delete_custom_batch, payload);

// vip批量删除赠币活动
export const getDeleteCouponBatch = (payload) => request.post(api.post_delete_coupon_batch, payload);

// vip赠币活动导出
export const getExportActivityExcel = (payload) => request.get(api.export_activity_excel, payload, { responseType: 'blob' });

// vip自定义活动导出
export const getExportSaleExcel = (payload) => request.get(api.export_sale_excel, payload, { responseType: 'blob' });