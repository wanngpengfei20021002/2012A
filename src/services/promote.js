// 推广模块
import request from '@/utils/request';
import api from './api';

// 企业微信sdk配置接口
export const getQyewxConfig = () => request.get('');

/**
 * 智能模板消息
 */
export const getSmartTepTableList = (payload) =>
  request.get(api.get_smart_template_list, payload);

export const getSmartTepUserList = (payload) =>
  request.get(api.get_smart_template_user_list, payload);

export const getSmartTepDrawList = (payload) =>
  request.get(api.get_smart_template_draw_data, payload);

export const getSmartTepActiveList = (payload) =>
  request.get(api.get_smart_template_active_list, payload);

export const PostSmartTepSaveTemplate = (payload) =>
  request.post(api.post_smart_template_save_template, payload, {
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
      requestType: 'form',
    },
    transformRequest: [
      (payload) => {
        let formData = new FormData();
        for (let key in payload) {
          formData.append(key, payload[key]);
        }
        return formData;
      },
    ],
  });

export const getSmartTepRefresh = (payload) =>
  request.get(api.get_smart_template_refresh_template, payload);

export const setSmartTepTask = (payload) =>
  request.get(api.get_smart_template_switch_task, payload);

/**
 * 推广链接
 */

// 获取推广链接表格数据
export const getPromoteLinkTableList = (payload) =>
  request.get(api.get_promote_link_table_list, payload);

// 获取快应用 ltv统计数据
export const getPromoteLinkLtvList = (payload) => {
  return request.get(api.get_promote_link_ltv_list, payload, {
    responseType: payload.export ? 'blob' : 'json',
  });
};

// 获取二维码数据
export const getPromoteLinkQrCode = (payload) =>
  request.get(api.get_promote_link_qrcode, payload);

// 快应用加桌信息获取
export const getPromoteLinkKyyDesktop = (payload) =>
  request.get(api.get_promote_link_kyyDesktop, payload);

// 快应用加桌设置
export const setPromoteLinkKyyDesktop = (payload) =>
  request.post(api.set_promote_link_kyyDesktop, payload);

// 获取渠道信息列表
export const getPromoteLinkChannel = (payload) =>
  request.get(api.get_promote_link_Channel, payload);

// 引导关注下拉列表数据获取
export const getPromoteLinkFocusSelect = (payload) =>
  request.get(api.get_promote_link_focusSelect, payload);

// 引导关注设置
export const setPromoteLinkFocus = (payload) =>
  request.post(api.set_promote_link_focus, payload);

// 推广链接删除/恢复
export const setPromoteLinkDelete = (payload) =>
  request.post(api.set_promote_link_delete, payload);

// 到处推广链接 excel表格
export const getPromoteLinkExport = (payload) => {
  return request.get(api.get_promote_link_export, payload, {
    responseType: 'blob',
  });
};

// 订单明细
export const getPromoteLinkOrder = (payload) =>
  request.get(api.get_promote_link_order, payload);

// 订单明细导出
export const getPromoteLinkOrderExport = (payload) => {
  return request.get(api.get_promote_link_order_export, payload, {
    responseType: 'blob',
  });
};

// 推广链接 入口页面数据获取
export const getPromoteLinkType = (payload) =>
  request.get(api.get_promote_link_type, payload);

// 推广链接 小说和章节搜索
export const getPromoteLinkNovelSearch = (payload) =>
  request.get(api.get_promote_link_novel_search, payload);

// 创建推广链接
export const setPromoteLinkCreate = (payload) =>
  request.post(api.set_promote_link_create, payload);

// 获取推广链接信息
export const getPromoteLinkInfo = (payload) =>
  request.get(api.get_promote_link_info, payload);

// 修改推广链接信息
export const updatePromoteLinkInfo = (payload) =>
  request.post(api.set_promote_link_update, payload);

// 快应用推广链接导出
export const kyyLinkExport = (payload) =>
  request.get(api.set_promote_kyy_export, payload, {
    responseType: 'blob',
  });

// 修改推广链接审核状态
export const setPromoteCheckStatus = (payload) =>
  request.post(api.set_promote_check_status, payload);

// 推广链接批量删除
export const setPromoteLinkBatchDelete = (payload) =>
  request.post(api.set_promote_delete_link, payload);

// 推广链接同步公众号
export const setPromoteLinkSync = (payload) =>
  request.post(api.set_promote_sync_gzh, payload);

/**
 *  广告数据上报
 */

// 获取广告tab数据列表
export const getAdReportList = () => request.get(api.get_ad_report_list);

// 获取广告方数据上报配置信息
export const getAdReportConfig = (payload) =>
  request.get(api.get_ad_report_config, payload);

// 设置广告数据上报配置
export const setAdReportConfig = (payload) =>
  request.post(api.set_ad_report_config, payload);

// vivo 推广链接联调
export const getAdReportVivoLink = (payload) =>
  request.get(api.get_ad_report_vivo_link, payload);

// 查看互斥广告平台
export const getAdReportReject = (payload) =>
  request.get(api.get_ad_report_reject, payload);

// 手动上报
export const setManualReport = (payload) =>
  request.post(api.set_ad_report_manual, payload);
/**
 * 自定义菜单栏
 */

// 默认菜单栏信息
export const getCustomMenu = (payload) =>
  request.get(api.get_custom_menu, payload);

// 自定义菜单栏信息
export const getCustomDiyMenu = (payload) =>
  request.get(api.get_custom_menu_type, payload);

// 菜单栏配置获取
export const getCustomMenuInfo = (payload) =>
  request.get(api.get_custom_menu_info, payload);

// 设置菜单栏编辑配置
export const setCustomMenuInfo = (payload) =>
  request.post(api.set_custom_menu_info, payload);

// 获取同步时间
export const getCustomTime = (payload) =>
  request.get(api.get_custom_update_time, payload);

// 菜单栏恢复默认
export const getCustomDefault = (payload) =>
  request.get(api.get_custom_default, payload);

// 菜单栏保存提交
export const setCustomSave = (payload) =>
  request.post(api.set_custom_menu_save, payload);

// 同步菜单栏到公众号
export const setCustomSync = (payload) =>
  request.post(api.set_custom_sync_gzh, payload);

// 删除菜单栏配置
export const deleteCustomMenu = (payload) =>
  request.get(api.delete_custom_menu, payload);

/***********************投放平台********************************* */
// 推广链接快应用列表
export const getKyyList_put = () => request.get(api.getKyyList_put);

// 获取部门下的用户列表
export const getMemberList_put = (payload) =>
  request.get(api.getMemberList_put, payload);

// 查询小说
export const searchNovelById = (payload) =>
  request.get(api.getNovelById, payload);

// 查询章节 根据小说id
export const searchChapterByBookId = (payload) =>
  request.get(api.getChapterByBookId_put, payload);

// 获取千字价格
export const getWordsPrice = () => request.get(api.getWordsPrice_put);

// 获取历史新增回填
export const getHistoryPromote = ()=>request.get(api.getHistoryPromote_put);

// 新增推广链接
export const addLink_put = (payload) => request.post(api.addLink_put, payload);
