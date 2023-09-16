import request from '@/utils/request';
import api from './api';

/**
 * 账号管理
 */

// 密码获取
export const getAccoutPassword = () => request.get(api.get_accout_password);

// 密码设置
export const setAccoutPassword = (payload) =>
  request.post(api.set_accout_password, payload);

// 获取 充值设置-基础设置
export const getAccoutChargeConfig = () =>
  request.get(api.get_accout_charge_config);

// 设置 充值设置-基础设置
export const setAccoutChargeConfig = (payload) =>
  request.post(api.set_accout_charge_config, payload);

// 充值设置-自定义档位单条内容
export const getAccoutCustomChargeList = (payload) =>
  request.post(api.get_accout_custom_charge_list, payload);

// 充值设置-自定义档位开关
export const getAccoutSwitchStatus = (payload) =>
  request.get(api.get_accout_switch_status, payload);

// 充值设置-自定义充值档位定向粉丝策略列表
export const getAccoutCustomDiyChargeList = (payload) =>
  request.get(api.get_accout_custom_diy_charge_list, payload);

// 充值设置-删除自定义充值档位
export const getAccoutDelCharge = (payload) =>
  request.post(api.get_accout_del_charge, payload);

// 充值设置-自定义档位 充值档位选项
export const getAccoutCustomPidList = (payload) =>
  request.get(api.get_accout_custom_pid_list, payload);

// 充值设置-自定义档位 同步至其他公众号
export const setAccoutCustomSync = (payload) =>
  request.post(api.set_accout_custom_sync, payload);

// 充值设置-自定义档位保存配置
export const setAccoutCustomSave = (payload) =>
  request.post(api.set_accout_custom_save, payload);

// 公众号设置-授权设置-获取授权信息
export const getAccoutAuthorization = (payload) =>
  request.get(api.get_accout_authorization, payload);

// 公众号设置-授权设置-同步微信授权信息
export const getAccoutRefresh = (payload) =>
  request.get(api.get_accout_refresh, payload);

// 公众号设置-客服设置-获取客服微信
export const getAccoutService = () =>
  request.get(api.get_accout_custom_service);

// 公众号设置-图片上传
export const setUploadAccoutImg = (payload) =>
  request.uploadPost(api.set_accout_upload_img, payload);

// 公众号设置-客服设置-设置客服微信
export const getAccoutServiceSetting = (payload) =>
  request.post(api.get_accout_custom_setheader, payload);

// 公众号设置-用户来源屏蔽
export const getAccoutUserOrigin = () =>
  request.get(api.get_accout_user_origin);

// 获取个人资料
export const getAccoutInfo = () => request.get(api.get_accout_info);

// 提交个人资料信息 手机 qq
export const setAccoutPersonInfo = (payload) =>
  request.post(api.set_accout_personal_info, payload);

// 获取同步公众号信息
export const getAccoutGzh = () => request.get(api.get_accout_sync_gzh);

// 银行信息修改提交（公众号同步）
export const setSyncBankInfo = (payload) =>
  request.post(api.set_accout_bank_info, payload);

// 获取关联账号列表
export const getAccoutList = (payload) =>
  request.get(api.get_accout_list, payload);

// 添加关联账号
export const setAccountAdd = (payload) =>
  request.post(api.set_accout_add_user, payload);

// 切换账号
export const setAccoutChange = (payload) =>
  request.post(api.set_accout_change, payload);

// 解除账号管理
export const setAccountRemove = (payload) =>
  request.post(api.set_accout_remove, payload);

// 修改单个关联账号密码
export const setAccountOnePsw = (payload) =>
  request.post(api.set_accout_one_password, payload);

// 批量修改多个关联账号密码
export const setAccountMorePsw = (payload) =>
  request.post(api.set_accout_more_password, payload);

// 获取vip渠道列表
export const getAccoutChannel = () =>
  request.get(api.get_user_out_channels, { is_auth: 1 });

// 公众号设置-设置用户来源屏蔽
export const setAccoutUserOrigin = (payload) =>
  request.post(api.set_accout_user_origin, payload);

// 获取加桌设置
export const getAddDesktopConfig = () =>
  request.get(api.get_promote_link_kyyDesktop);

// 设置加桌
export const setAddDesktopConfig = (payload) =>
  request.post(api.set_promote_link_kyyDesktop, payload);

// 快应用账号列表
export const getSubAccountList = (payload) =>
  request.get(api.get_sub_account_list, payload);

// 快应用子账号编辑
export const setSubAccountEdit = (payload) =>
  request.post(api.set_sub_account_edit, payload);

// 快应用子账号添加
export const addSubAccount = (payload) =>
  request.post(api.set_sub_account_add, payload);

// 快应用子账号状态更改
export const setSubAccountStatus = (payload) =>
  request.get(api.get_sub_account_status, payload);

// 快应用子账号单密码修改
export const setSubAccountPass = (payload) =>
  request.post(api.set_accout_one_password, payload);

// 快应用子账号密码批量修改
export const setSubAccountPassMore = (payload) =>
  request.post(api.set_accout_more_password, payload);

// 快应用子菜单默认列表展示
export const getSubAccountMenu = (payload) =>
  request.get(api.get_sub_account_menu, payload);


/***************************投放平台接口************************************* */
// 获取用户管理列表数据
export const getUserList_put = payload => request.get(api.getUserList_put,payload) 

// 获取用户角色
export const getUserRole_put = payload => request.get(api.getUserRole_put,payload)

// 账号启用禁用
export const editUserStatus_put = payload => request.post(api.editUserStatus_put,payload)

// 获取系统部门权限
export const permissionList_put = () => request.get(api.getPermissionList_put)

// 添加用户
export const addUser_put = payload => request.post(api.addUser_put,payload)

// 编辑用户
export const updateUser_put = payload => request.post(api.editUpdateUser_put,payload)

// 用户详情
export const getUserInfo_put = payload => request.get(api.getUserInfo_put,payload)


