import request from '@/utils/request';
import api from './api';

// 获取企业微信授权配置
export const getQywxConfig = (payload) =>
  request.get(api.getQywxConfig, payload);

// 判断是否企业微信授权完成
export const checkQywxAuthorize = () => request.get(api.checkQywxAuthorize);

export const getCompanyAuthRbacUser = (payload) =>
  request.post(api.get_company_auth_rbac_user, payload); // 获取已授权的微信公众号

/*
 * 企业微信账号管理
 */
export const getCompanyAuthList = (payload) =>
  request.get(api.get_company_auth_list, payload); // 获取企业号授权列表
export const setCompanyAuthAccount = (payload) =>
  request.post(api.set_company_auth_account, payload); // 授权至其他公众号
export const setCompanyAuthChangeState = (payload) =>
  request.post(api.set_company_auth_change_state, payload); // 启用、停用
export const setCompanyEditAuthInfo = (payload) =>
  request.post(api.set_company_edit_auth_info, payload); // 编辑企业号名称
export const getCompanyAuthUrl = (payload) =>
  request.get(api.get_company_auth_url, payload); // 获取跳转链接
export const getCompanyAuthInfo = (payload) =>
  request.get(api.get_company_auth_info, payload); // 获取授权信息
export const getRefreshStatus = (payload) =>
  request.get(api.get_company_refresh_status, payload); // 刷新接口许可状态
/*
 * 客服管理
 */
export const setCompanyAddCustomers = (payload) =>
  request.post(api.set_company_add_customers, payload); // 添加客服号
export const getCompanyCustomersList = (payload) =>
  request.get(api.get_company_customers_list, payload); // 客服号列表
export const setCompanyCustomersSwitch = (payload) =>
  request.post(api.set_company_customers_switch, payload); // 停用客服号
export const getCompanyCustomersQrcode = (payload) =>
  request.get(api.get_company_customers_qrcode, payload); // 查看二维码
export const getCompanyCustomersRelation = (payload) =>
  request.get(api.get_company_customer_relation, payload); // 添加客服号企业号及客服下拉菜单数据
export const setDelCompanyCustomer = (payload) =>
  request.post(api.set_company_customers_del, payload); // 删除客服
export const getCompanyTencent = (payload) =>
  request.post(api.get_company_tencent, payload); // 公众号管理
export const getCompanyCustomerDownQrcode = (payload) =>
  request.post(api.get_company_customers_download_qrcode, payload, {
    responseType: 'blob',
  }); // 二维码下载
export const setRefreshQrcode = (payload) =>
  request.post(api.set_refresh_qrcode, payload); // 刷新二维码
/*
 * 微信引流模块
 */

// 获取微信引流配置
export const getCompanyWechatConfig = () =>
  request.get(api.get_company_wechat_cutomer_config);

export const getCompanyWechatCutomerList = (payload) =>
  // 获取微信客服列表
  request.get(api.get_company_wechat_cutomer_list, payload);

//微信引流设置
export const setCompanyCustomersConfig = (payload) =>
  request.post(api.set_company_set_customer, payload);

/**
 * 群发消息
 */
// 获取群发列表
export const getCompanyGroupList = (payload) => request.get('', payload);
export const massSendMsgList = (payload) =>
  request.get(api.massSendMsgList, payload);

/* 
  群发消息模块
*/
// 欢迎语列表
export const getCompanyWelcomeList = (payload) =>
  request.get(api.get_company_welcome_list, payload);

// 欢迎语设置
export const setCompanyWelcomeConfig = (payload) =>
  request.post(api.set_company_welcome_config, payload);

// 获取vip欢迎语设置
export const getCompanyVipWelcomeConfig = (payload) =>
  request.get(api.get_company_vip_welcome_config, payload);

// 设置vip欢迎语设置
export const setCompanyVipWelcomeConfig = (payload) =>
  request.post(api.set_company_vip_welcome_config, payload);

// 获取vip账号下客服号对应的公众号
export const getCompanyVipCustomerGzh = (payload) =>
  request.post(api.get_company_vip_gzh_list, payload);

/* 
  好友管理模块
*/
// 获取好友展示列表数据
export const getCompanyFriendList = (payload) =>
  request.get(api.get_company_friend_list, payload);

export const getCompanyGzh = (payload) =>
  request.get(api.get_channel_opts, payload);

/* 
  企业微信标签
*/

// 获取企业微信标签列表数据
export const getCompanyTagList = (payload) =>
  request.get(api.get_company_tag_list, payload);

// 获取企业微信标签单条详细信息
export const getCompanyTagDetail = (payload) =>
  request.get(api.get_company_tag_detail, payload);

// 企业微信标签状态设置
export const getCompanyTagChangeState = (payload) =>
  request.post(api.set_company_tag_change_state, payload);

// 企业微信标签信息同步
export const getCompanyTagSyncTencent = (payload) =>
  request.post(api.set_company_tag_sync_tencent, payload);

// 企业微信标签创建标签
export const getCompanyTagCreate = (payload) =>
  request.get(api.set_company_tag_create, payload);

export const getCompanyOrService = (payload) =>
  request.get(api.get_company_frind_customer, payload);

// 获取客服列表
export const wechatCutomerList = (payload) =>
  request.get(api.wechatCutomerList, payload);

// 获取获取发送人数
export const getMassSendMsgNum = (payload) =>
  request.get(api.getMassSendMsgNum, payload);

// 设置群发
export const setMassSendMsg = (payload) =>
  request.post(api.setMassSendMsg, payload);

// 删除
export const delNassSendMsg = (payload) =>
  request.get(api.delNassSendMsg, payload);

/**
 * 朋友圈
 */

// 朋友圈列表
export const getCompanyFriendCircleList = (payload) =>
  request.get(api.get_friend_circle_list, payload);

// 添加朋友圈
export const setAddCompanyFriendCircle = (payload) =>
  request.post(api.add_friend_circle, payload);

// 朋友圈预估人数
export const getCompanyFriendCircleEstimateNum = (payload) =>
  request.post(api.get_friend_circle_estimate_num, payload);

// 查看朋友圈
export const getCompanyFriendCircleInfo = (payload) =>
  request.get(api.get_friend_circle_info, payload);

// 删除朋友圈
export const getDelCompanyFriendCircle = (payload) =>
  request.post(api.del_friend_circle, payload);

// 编辑朋友圈
export const setEditCompanyFriendCircle = (payload) =>
  request.post(api.edit_friend_circle, payload);
