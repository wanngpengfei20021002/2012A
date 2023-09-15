export default {
  // 企业微信sdk配置参数获取
  getQywxConfig: '/wechat/auth/wechat_js_sdk',

  // 判断当前账号是否授权过企微
  checkQywxAuthorize: '/wechat/auth/get_authorizer_id',

  /* 客服消息 公共表单组件 */
  getMaterialTag: `/novel/novels/getMaterialTag`, // 物料标签数
  getMaterial: `/novel/novels/getMaterial`, // 物料数据
  couponActivityLinkList: `/promote/activity/coupon_activity_link_list`, // 活动链接
  getPromoteLinkByUser: `/wx_install/auth/get_promote_link_by_user`, // 推广链接
  getPromoteNovelInfo: `/wx_install/auth/get_promote_novel_info`, // 获取小说简介信息
  getNovelInfoList: `/wx_install/auth/get_novel_info_list`, // 获取小说列表
  getParagraphInfoList: `/wx_install/auth/get_paragraph_info_list`, // 获取章节列表
  wechatUploadMediaImage: `/wechat/auth/wechat_upload_media_image`, // 图片上传

  // 登录
  post_login: '/index/loginV2', // 用户登录
  get_logout: '/index/logoutV2', // 用户退出
  menu_list: '/index/menuList', // 获取左侧导航栏菜单
  auth_wx_app: '/wx_install/auth/auth_wx_app', // 判断用户是否绑定公众号

  new_login_Old: '/notauth/notauth/auto_login', // 新分销跳转老分销 带登陆状态
  // 通知公告
  notice: '/notices/index/index', // 获取通知公告列表
  noticeinfo: '/notices/index/getnoticeinfo', // 获取通知公告具体信息

  // ------------------小说管理模块----------------

  /**
   * 平台书库
   */
  get_novellist: '/novel/novels/getnovellist', // 获取小说信息列表
  get_searchcommon: '/novel/common_search/index', // 获取常用搜索条件
  add_searchcommon: '/novel/common_search/create', // 添加常用搜索条件
  del_searchcommon: '/novel/common_search/del', // 删除某条常用搜索条件
  get_diy_charge: '/novel/novels/get_diy_charge', // 根据小说id获取自定义价格
  set_diy_charge: '/novel/novels/set_diy_charge', // 修改小说自定义价格
  set_novel_price: '/novel/novels/set_novel_price', // 批量设置默认价格
  get_novel_info: '/novel/novels/getnovelinfo', // 获取小说章节列表
  get_novel_detail: '/novel/novels/getparagraphinfo', // 获取小说章节详情
  get_next_paragraph: '/novel/novels/getnextparagraph', // 获取推广链接
  add_promote_link: '/promote/info/promote_link_add', // 添加推广链接
  get_promote_type: '/promote/index/get_promote_type', // 获取小说入口页面
  get_group_wx_info: '/personal/group/get_group_wx_info', // 获取数据源
  get_qrcode_module: '/promote/info/get_qrcode_module', // 生成图片二维码
  get_user_out_channels:
    '/vip_account/User_manage/get_user_out_channels?is_auth=1', // 获取渠道列表
  set_cost: '/promote/info/set_cost', // 修改成本价格
  set_clear_price: '/novel/novels/del_diy_charge', // 批量清除自定义价格
  get_diy_charge_list: '/novel/novels/get_all_charge_list', // 获取自定义价格列表

  /**
   * VIP批量创建链接
   */
  get_vip_list: '/vip_account/batch_link/batch_link_list', // 获取vip批量链接列表
  get_vip_listdetail: '/vip_account/batch_link/batch_link_detail', // 获取vip链接详情
  get_vip_detail_export:
    '/vip_account/batch_link/vip_promote_batch_detail_export', // vip批量链接详情导出
  set_default_price: '/novel/novels/restore_default_price', // 恢复默认价格
  get_vip_export_detail:
    '/vip_account/batch_link/vip_promote_batch_detail_export', // 批量导出vip链接明细

  //----start《数据统计 模块》

  // 公用： 渠道数据源
  get_channel_opts: '/vip_account/User_manage/get_user_out_channels',

  // ----- 页面单独接口 ----

  // 回收趋势统计
  get_census_recover: '/census/recover/recover_list_v2',
  // 回收趋势详情
  get_census_recover_detail: '/census/recover/vip_recover_channel_list',
  // 小说数据统计
  get_census_novel: '/census/novel/novel_list_v2',
  // 小说数据统计导出
  get_novel_export: '/census/novel/vip_novel_export',
  // 订单管理
  get_order_manage_page: '/order/order/getorderlist',
  // 订单管理 --广告上报
  get_order_ad_report: '/adv_track/manage/act_report',
  // 订单管理导出
  export_order: '/order/order/putExcel',
  // 订单统计、充值统计
  get_census_order_and_charge: '/census/order/vip_order_list',
  //用户数据统计
  get_census_user: '/census/user/vip_user_list',
  // 用户数据统计导出
  get_user_export: '/census/user/vip_user_export',
  // 托底包统计
  get_census_basic_apk: '/census/bottom_pag/list',
  // 托底包提现记录
  get_census_withdraw_history: '/census/bottom_pag/history',
  // 申请提现
  withdrawal: '/census/bottom_pag/withdrawal',
  // 导出
  recoverExportV2: `/census/recover/recover_export_v2`,
  // 成本
  setRecoverCost: `/census/recover/set_cost`,
  //---end《数据统计 模块》

  // ------------------- 推广管理模块 --------------------------

  /**
   * 小程序配置
   */
  get_xcx_config: '/wx_install/auth/xcx_config',

  /**
   * 标签管理
   */
  get_tag_list: '/user/tag/tag_list', // 标签列表
  get_group_member: '/user/tag/group_member', // 查看号主关联账号
  get_estimate_num: '/user/tag/estimate_num', // 预估人数
  get_tag_info: '/user/tag/info', // 查看规则
  del_tag: '/user/tag/delete_tag', // 删除规则
  get_sync_users: '/user/tag/syn_tag_users', // 同步至其他公众号
  get_tag_attr: '/user/tag/attribute', // 标签属性展示列表
  get_search_form: '/novel/novels/searchForPromLink', // 获取书籍下拉菜单数据
  get_create_tag: '/user/tag/created_tag', //创建标签
  getPromoteList: `/user/tag/get_promote_list`, // 推广链接 下拉菜单

  /**
   * 智能模板消息
   */
  get_smart_template_list: '/wx_install/template/send_template_log', // 获取智能模板消息表格数据
  get_smart_template_user_list: '/user/tag/user_used_tags', //获取新增模板 推送用户下拉列表数据
  get_smart_template_draw_data: '/wx_install/template/get_template_info', //获取抽屉表单渲染数据
  get_smart_template_active_list: '/wx_install/template/template_active_list', //获取跳转链接数据
  post_smart_template_save_template: '/wx_install/template/save_template_info', //保存新建模板
  get_smart_template_refresh_template:
    '/wx_install/template/async_template_info', //刷新模板列表
  get_smart_template_switch_task: '/wx_install/template/change_template_status',
  /**
   * 促销活动
   */
  get_promotions_list: '/promote/sale/list', // 平台活动
  get_promotions_daily_list: '/promote/sale/daily_list', // 平台活动每日统计
  get_promotions_custom_list: '/promote/sale/user_define_list', // 自定义活动列表
  get_promotions_custom_daily_list: '/promote/sale/user_define_act_link_daily', // 自定义活动每日统计
  get_promotions_presented_list: '/promote/activity/coupon_activity_list', // 赠币活动列表
  get_promotions_presented_daily_list:
    '/promote/activity/coupon_activity_daily', // 赠币活动每日统计
  post_delete_custom: '/promote/sale/delete', // 删除自定义活动
  post_delete_coupon: '/promote/activity/delete_coupon_activity', // 删除赠币活动
  post_update_custom_popup_status: '/promote/sale/change_act_link_status', //修改自定义活动弹窗状态
  post_update_presented_popup_status: '/promote/activity/change_coupon_status', //修改赠币活动弹窗状态
  get_user_define_act_info: '/promote/sale/get_user_define_act_info', // 获取自定义活动信息
  get_coupon_activity_info: '/promote/activity/coupon_activity_info', // 获取赠币活动信息
  get_add_custom_activity: '/promote/sale/create_act', // 创建自定义活动
  get_add_coupon_activity: '/promote/activity/create_coupon_activity', // 创建赠币活动
  get_estimated_num: '/wx_install/auth/get_estimated_num_of_people', // 查看预估人数
  get_coupon_daily_export: '/promote/activity/coupon_daily_export', // 导出赠币活动每日统计
  get_custom_daily_export: '/promote/sale/user_define_act_export', // 导出自定义活动每日统计
  post_edit_custom: '/promote/sale/editor_link', // 修改自定义活动
  post_edit_coupon: '/promote/activity/editor_coupon_activity', // 修改赠币活动
  post_sync_channel_custom: '/promote/sale/batch_syn_define_activity', // vip批量同步至公众号-自定义活动
  post_sync_channel_coupon: '/promote/activity/syn_coupon_activity', // vip批量同步至公众号-赠币活动
  post_delete_custom_batch: '/promote/sale/batch_delete', // vip批量删除自定义活动
  post_delete_coupon_batch: '/promote/activity/batch_delete_coupon_activity', // vip批量删除赠币活动
  export_activity_excel: '/promote/activity/putExcel', // vip赠币活动导出
  export_sale_excel: '/promote/sale/putExcel', // vip自定义活动导出

  /**
   * 推广链接
   */
  get_promote_link_table_list: '/promote/index/index', //推广链接列表展示
  get_promote_link_ltv_list: '/promote/index/ltv_list', //推广链接快应用 ltv统计数据
  get_promote_link_qrcode: '/promote/info/get_qrcode_module', //获取二维码
  get_promote_link_kyyDesktop: '/personal/info/set_add_desk_info', // 快应用加桌信息获取
  set_promote_link_kyyDesktop: '/personal/info/set_add_desk', // 快应用加桌设置
  get_promote_link_Channel: '/personal/group/get_group_wx_info', // 获取渠道信息列表
  get_promote_link_focusSelect: '/personal/info/set_subscribe_info', // 获取引导关注下拉列表数据
  set_promote_link_focus: '/personal/info/set_subscribe', // 分流引导关注设置
  set_promote_link_delete: '/promote/info/delete', // 推广链接删除，恢复
  get_promote_link_export: '/promote/index/export', // 导出推广链接excel
  get_promote_link_order: '/promote/order/order_list', // 订单明细
  get_promote_link_order_export: '/promote/order/export', // 订单明细导出
  get_promote_link_type: '/promote/index/get_promote_type', //TODO: 获取入口页面和常用链接数据
  get_promote_link_novel_search: '/novel/novels/searchForPromLink', // 推广链接 小说和章节搜索
  set_promote_link_create: '/promote/info/promote_link_add', // 创建推广链接
  get_promote_link_info: '/promote/info/get_info', // 获取推广链接信息
  set_promote_link_update: '/promote/info/update', // 修改推广链接
  set_promote_kyy_export: '/promote/index/kyy_url_export', // 快应用推广链接导出
  set_promote_check_status: '/promote/info/change_prom_novel', // 修改推广链接审核状态
  set_promote_delete_link: '/promote/info/batch_delete', // 批量删除推广链接
  set_promote_sync_gzh: '/promote/info/sync_promote', // 推广链接批量同步公众号

  /**
   * 用户管理
   */
  userManagementList: `/user/index/list`, // 用户列表数据
  infoDetail: `/user/info/detail`, // 查看详情
  payLogList: `/user/index/pay_log_list`, // 订单详情
  consumptionLogList: `/user/index/consumption_log_list`, // 消费汇总
  readLogList: `/user/index/read_log_list`, // 阅读记录
  chargeLogList: `/user/index/charge_log_list`, // 阅读记录

  /**
   * 智能推送
   */

  post_intelligent_list: '/wx_install/auth/customerserviceindex', // 获取智能推送列表状态
  get_intelligent_update_status: '/wx_install/auth/customerServiceOpenOrClose', // 开启或关闭智能推送状态
  post_set_time: '/wx_install/auth/setCustomerServiceDiy', // 推送时间点设置
  post_set_custom_message: '/wx_install/auth/setCustomerServiceDiy', // 编辑图文消息，提交图文消息
  get_edit_custom_message: '/wx_install/auth/diycustomerserviceindex', // 编辑图文消息，获取图文消息
  get_intelligent_verify_code: '/wx_install/auth/subscribe_notice_info', // 订阅信息JS接口信息配置

  /**
   * 模板消息
   */
  get_template_list: '/wx_install/auth/template_list', // 获取模板消息列表
  post_del_template_msg: '/wx_install/auth/delHistoryMsg', // 删除模板消息
  get_cancel_template_msg: '/wx_install/auth/cancelMsg', // 取消发送模板信息
  get_template_info: '/wx_install/auth/getTemplateInfoByApp', // 获取模板信息
  get_promote_links: '/wx_install/auth/get_promote_link_by_user', //获取模板消息跳转链接数据
  post_send_template_msg: '/wx_install/auth/sendTemplateMsg', // 添加、测试模板消息
  post_get_last_template: '/wx_install/auth/get_last_template_msg_by_app', // 获取模板消息回填的值

  // 模板消息--被关注延迟模板消息
  post_add_delay_template: `/wx_install/auth/send_delay_template_msg`, // 添加延迟模板消息
  post_edit_delay_template: `/wx_install/auth/info_delay_template_msg`, // 编辑延迟模板消息
  get_delay_template_list: `/wx_install/auth/list_delay_template_msg`, // 延迟模板消息列表
  get_delete_delay_template: `/wx_install/auth/del_delay_template_msg`, // 删除模板消息
  get_change_delay_status: `/wx_install/auth/status_delay_template_msg`, // 修改延迟模板消息状态
  /**
   * 广告数据上报
   */
  get_ad_report_list: '/adv_track/manage/edit', // 获取广告数据上报
  get_ad_report_config: '/adv_track/manage/get_info', // 获取广告方数据上报配置信息
  set_ad_report_config: '/adv_track/manage/save', // 设置广告上报配置
  get_ad_report_vivo_link: '/adv_track/manage/vivo_liantiao', // vivo 链接联调
  get_ad_report_reject: '/adv_track/manage/check_other_single_advs', // 查看是否存在互斥平台
  set_ad_report_manual: '/adv_track/report_tools/do_report', // 手动上报

  /**
   * 财务管理
   */
  manger: `/vip_account/finance/manger`, // 我的结算单
  withdrawRecord: `/vip_account/finance/withdraw_record`, // 提现记录/可提现关联订单
  settlementOrders: `/finance/settlement/orders`, // 提现记录详情-关联订单列表
  settlementDetail: `/finance/settlement/detail`, // 提现记录详情-结算单详情
  financeWithdrawal: `/vip_account/finance/withdrawal`, // 申请提现/批量提现
  getMoneyList: `/census/Reyun_manage/get_money_list`, // 广告收益
  putVipWithdrawExcel: `/vip_account/finance/put_vip_withdraw_excel`, // 提现记录导出
  mysettlementlist: `/finance/settlement/mysettlementlist`, // 可提现关联订单
  /**
   * 客服消息
   */
  richList: `/wx_install/auth/rich_list`, // 客服消息信息
  sendCustomerMsg: `/wx_install/auth/send_customer_msg`, // 创建客服消息
  wxRichList: `/wx_auth/rich_list`, // 客服消息编辑信息
  cancelCustomerMsg: `/wx_install/auth/cancelCustomerMsg`, // 客服消息取消发送
  delCustomerMsg: `/wx_install/auth/delCustomerMsg`, // 客服消息删除
  uploadMediaImage: `/wx_install/auth/upload_media_image`, // 上传图片
  syncGzh: '/wx_install/auth/sync_customer_msg', // 公众号同步

  /**
   * 自定义菜单栏
   */
  get_custom_menu: '/wx_install/auth/custom_menu_index', // 默认菜单栏信息
  get_custom_menu_type: '/wx_install/auth/custom_diy_menu_index', // 自定义菜单栏信息 安卓 ios
  get_custom_menu_info: '/wx_install/auth/get_custom_media', // 获取菜单栏配置
  set_custom_menu_info: '/wx_install/auth/set_custom_media', // 设置菜单栏配置
  get_custom_update_time: '/wx_install/auth/async_custom_time_text', // 获取时间同步信息
  get_custom_default: '/wx_install/auth/set_custom_menu_default', // 菜单栏恢复默认
  set_custom_menu_save: '/wx_install/auth/set_custom_menu', // 菜单栏保存提交
  set_custom_sync_gzh: '/wx_install/auth/async_custom_to_other', // 同步菜单栏到公众号
  delete_custom_menu: '/wx_install/auth/del_menu', // 删除菜单栏配置
  /**
   * 延迟一分钟 客服消息
   */
  delayList: `/wx_install/auth/delay_list`, // 延迟一分钟客服消息列表
  delDelayMsg: `/wx_install/auth/del_delay_msg`, // 延迟一分钟客服消息删除
  setDelayMsg: `/wx_install/auth/set_delay_msg`, // 延迟客服消息添加编辑
  setDelayStatus: `/wx_install/auth/set_delay_status`, // 延迟一分钟状态设置
  saveMinuteDelay: `/wx_install/auth/save_minute_delay`, // 一分钟客服消息添加编辑
  sendTestCustomerMsg: `/wx_install/auth/send_test_customer_msg`, // 延迟 一分钟测试发送
  syncDelayGzh: '/wx_install/auth/sync_delay_customer_msg', // 延迟 一分钟 公众号同步
  /**
   * 被关注回复
   */
  get_focused_welcome: '/wx_install/auth/subscribe_reply_index',
  setSubscribeReply: '/wx_install/auth/set_subscribe_reply', // 被关注回复设置
  setSubscribeReplyNew: `/wx_install/auth/set_subscribe_reply_new`, // 提交 编辑
  subscribeReplyIndexNew: `/wx_install/auth/subscribe_reply_index_new`, // 被关注回复详情
  sync_focused_gzh: '/wx_install/auth/sync_subscribe_reply', // vip同步被关注回复消息
  /**
   * 关键词回复
   */
  get_keywords_list: '/wx_install/auth/keywordsindex', // 获取关键词回复列表数据
  get_sync_keyword_official: '/wx_install/auth/sync_switch_keyword', // vip账号官方关键词同步至其他公众号
  get_switch_keyword_info: '/wx_install/auth/switch_keyword_info', // 官方默认关键词回复开关
  get_switch_keyword: '/wx_install/auth/switch_keyword', // 修改官方默认关键词回复状态
  get_del_keyword: '/wx_install/auth/delKeywordInfo', // 删除关键字
  get_sync_keyword: '/wx_install/auth/sync_keyword', // vip批量同步关键词至公众号
  editKeywordInfo: `/wx_install/auth/editKeywordInfo`, // 添加关键字
  vipAddKeyword: `/wx_install/auth/vip_add_keyword`, // vip创建关键字
  updateKeywordInfo: `/wx_install/auth/updateKeywordInfo`, // 关键字提交
  keywordDetail: `/wx_install/auth/keywordDetail`, // 关键字编辑
  /**
   * 账号管理
   */
  // 密码设置
  get_accout_password: '/personal/info/change_pass', // 获取账号密码
  set_accout_password: '/personal/info/change_pass', // 设置密码
  // 公众号
  get_accout_authorization: '/personal/info/set_authorization', // 公众号设置-获取授权设置信息
  get_accout_refresh: '/personal/info/refresh_gzh_info', // 公众号设置-同步公众号授权信息
  get_accout_user_origin: '/personal/info/check_pingbi', // 公众号设置-用户来源屏蔽
  set_accout_user_origin: '/personal/info/set_pingbi', // 公众号设置-设置用户来源屏蔽
  get_accout_charge_config: '/charge/index/charge_config', // 获取充值管理-基础设置
  set_accout_charge_config: '/charge/info/save_charge_config', // 设置充值管理-基础设置
  get_accout_custom_charge_list: '/charge/index/charge_pid_list', // 获取充值管理-自定义档位单条数据
  get_accout_switch_status: '/charge/info/change_switch_status', // 自定义充值档位开关
  get_accout_del_charge: '/charge/info/delete_diy_charge', // 删除自定义充值档位列表数据
  get_accout_custom_diy_charge_list: '/charge/index/diy_charge_list', //充值管理-自定义充值档位定向粉丝策略列表
  get_accout_custom_pid_list: '/charge/index/get_pid_list', // 获取充值管理-自定义充值档位下拉菜单选项
  set_accout_custom_save: '/charge/info/save_pid_list', // 保存自定义充值档位配饰
  get_accout_custom_setheader: '/personal/info/do_set_customer', // 公众号设置上传头像
  set_accout_upload_img: '/upload/info/user_pic', // 公众号客服设置上传图片
  get_accout_custom_service: '/personal/info/set_customer', // 公众号设置-获取客服微信
  set_accout_custom_sync: '/charge/info/batch_syn_charge', // 自定义充值档位
  // 个人资料
  get_accout_info: '/personal/info/indexnew', // 个人资料信息获取
  get_accout_sync_gzh: '/personal/info/gzh_async_list', // 获取同步公众号信息
  set_accout_personal_info: '/personal/info/change_qq', // 个人资料信息提交 手机 qq
  set_accout_bank_info: '/personal/info/edit', // 银行信息提交
  // 关联账号
  get_accout_list: '/personal/group/account_list', // 关联账号列表信息获取
  set_accout_change: '/personal/group/change_account', // 进入账号（切换）
  set_accout_add_user: '/personal/group/add_account', // 添加关联账号
  set_accout_remove: '/personal/group/relieve_account', // 解除账号关联
  set_accout_one_password: '/vip_account/user_manage/do_password_modify', // 修改单个密码
  set_accout_more_password: '/vip_account/user_manage/batch_password_modify', // 批量修改密码

  // 快应用账号管理
  get_sub_account_list: '/sub_account/user/index', // 快应用账号列表
  set_sub_account_edit: '/sub_account/user/doupdate', // 快应用账号编辑
  set_sub_account_add: '/sub_account/user/doadd', // 快应用账号添加
  get_sub_account_status: '/sub_account/user/change_status', // 快应用账号状态更改
  // get_sub_account_pass:'/vip_account/user_manage/do_password_modify', // 修改子账号密码
  // get_sub_account_pass_more:'/vip_account/user_manager/batch_password_modify', // 批量修改密码
  get_sub_account_menu: '/sub_account/user/get_kyy_menu', // 查看子账号菜单

  // 快应用 专题活动
  getFestivals: `/festival/info/get_festivals`,
  getFestivalConfig: `/festival/info/get_festival_config`, // Select
  editFestivalStatus: `/festival/info/edit_festival_status`, // 修改专题活动状态
  uploadFestivalImg: `/festival/info/upload_festival_img`, // 上传
  editFestival: `/festival/info/edit_festival`, // 编辑或添加专题活动
  getFestivalInfo: `/festival/info/get_festival_info`, // 详情

  // 快应用 任务签到配置
  get_task_config: '/sign_task/task/get_task_config', // 获取签到任务开关配置数据
  set_task_config: '/sign_task/task/set_task_config', // 签到任务开关配置数据
  get_ckeckin: '/sign_task/task/get_sign_in_tasks', // 获取签到数据
  set_checkin: '/sign_task/task/set_sign_in_tasks', // 保存签到数据
  get_daily_novice_task: '/sign_task/task/get_normal_tasks', // 获取日常、新手任务
  set_daily_novice_task: '/sign_task/task/set_normal_tasks', //设置日常、新手任务
  get_share_task: '/sign_task/task/get_share_tasks', // 获取分享任务
  set_share_task: '/sign_task/task/set_share_tasks', //设置分享任务

  /**
   * 企业微信
   */

  // 公共
  get_company_auth_rbac_user: '/wechat/auth/get_auth_rbac_user', // 获取已授权的公众号
  // 企业号管理
  get_company_auth_list: '/wechat/auth/auth_list', // 获取企业号授权列表
  set_company_auth_account: '/wechat/auth/auth_account', // 授权至其他公众号
  set_company_auth_change_state: '/wechat/auth/change_auth_state', // 启用、停用
  set_company_edit_auth_info: '/wechat/auth/edit_auth_info', // 编辑企业号名称
  get_company_auth_url: '/wechat/auth/auth_url', // 获取授权链接
  get_company_auth_info: '/wechat/auth/get_auth_info', // 获取授权信息
  get_company_refresh_status: '/wechat/auth/refresh_license_info', // 刷新接口许可状态

  // 客服号
  set_company_add_customers: '/wechat/auth/add_customers', // 添加客服号
  get_company_customers_list: '/wechat/customer/list', // 客服号列表
  set_company_customers_switch: '/wechat/customer/switch_status', // 停用客服号
  get_company_customers_qrcode: '/wechat/customer/wechat_info', // 查看二维码
  get_company_customer_relation: '/wechat/customer/wechat_customer_relation', // 添加客服号企业号及客服列表
  set_company_customers_del: '/wechat/customer/delete_rbac_customer', // 删除客服号
  get_company_tencent: '/wechat/customer/single_customer_rbac', // 获取企业号客服同步的公众号
  get_company_customers_download_qrcode: '/wechat/customer/download_qrcode', // 客服管理二维码下载
  set_refresh_qrcode: '/wechat/customer/refresh_qrcode', // 客服管理刷新二维码

  // 微信引流
  get_company_wechat_cutomer_config: '/wechat/customer/get_set_customer', // 获取微信引流配置信息
  get_company_wechat_cutomer_list: '/wechat/customer/wechat_cutomer_list', // 微信引流客服列表
  set_company_set_customer: '/wechat/customer/set_customer', // 微信引流设置

  // 群发消息
  // get_company_group_list:'/wechat/auth/msg_send_list', // 群发列表
  massSendMsgList: `/wechat/message/mass_send_msg_list`, // 群发列表

  // 欢迎语
  get_company_welcome_list: '/wechat/message/welcome_msg_list', // 欢迎语列表
  set_company_welcome_config: '/wechat/message/set_welcome_msg', // 设置欢迎语

  // vip欢迎语配置
  get_company_vip_welcome_config: '/wechat/message/vip_welcome_msg_strategy', // 获取vip欢迎语配置
  set_company_vip_welcome_config:
    '/wechat/message/set_vip_welcome_msg_strategy', // vip欢迎语配置
  get_company_vip_gzh_list: '/wechat/customer/wechat_gzh_list', // 获取vip账号下客服号对应的公众号

  // 企业微信标签
  get_company_tag_list: '/wechat/tag/tag_list', // 标签列表
  get_company_tag_detail: '/wechat/tag/info', // 获取企业微信标签单条详细信息
  set_company_tag_change_state: '/wechat/tag/change_state', // 企业微信标签状态设置
  set_company_tag_sync_tencent: '/wechat/tag/syn_data', // 企业微信标签信息同步
  set_company_tag_create: '/wechat/tag/create_tag', // 企业微信标签创建标签

  // 好友管理
  get_company_frind_customer: '/wechat/customer/get_wechat_customer', // 获取企业or客服名称
  wechatCutomerList: '/wechat/customer/wechat_cutomer_list', // 获取客服列表
  get_company_friend_list: '/wechat/user/list', // 好友管理列表
  getMassSendMsgNum: `/wechat/message/get_mass_send_msg_num`, // 获取发送人数
  setMassSendMsg: `/wechat/message/set_mass_send_msg`, // 设置群发
  delNassSendMsg: `/wechat/message/del_mass_send_msg`, // 删除

  /**
   * 推广管理
   */

  // 朋友圈
  get_friend_circle_list: '/wechat/moment/list', // 列表
  add_friend_circle: '/wechat/moment/add', // 创建朋友圈
  get_friend_circle_estimate_num: '/wechat/moment/estimate_num', // 朋友圈预估人数
  get_friend_circle_info: '/wechat/moment/detail', // 查看朋友圈
  edit_friend_circle: '/wechat/moment/edit', // 编辑朋友圈
  del_friend_circle: '/wechat/moment/delete', // 删除朋友圈

  // 快应用 标签运营策略
  get_strategy_list: '/tag_strategy/strategy/strategy_list', // 获取策略列表
  get_strategy_list_name: '/tag_strategy/strategy/search_strategy_name', // 根据名称搜索策略
  change_strategy_status: '/tag_strategy/strategy/change_strategy_status', // 修改策略状态
  get_strategy_config: '/tag_strategy/strategy/get_config', // 获取标签运营的各项配置
  add_modify_strategy: '/tag_strategy/strategy/adjust_strategy', // 新增或者修改策略
  strategy_upload_img: '/tag_strategy/strategy/upload_img', // 上传图片
  get_strategy_img_list: '/tag_strategy/strategy/img_list', // 获取模版
  insert_strategy_img: '/strategy/insert_entrance_img', // 图片加入模版
  get_strategy_imgTemp: '/tag_strategy/strategy/img_list', // 获取模版
  add_strategy_imgTemp: '/tag_strategy/strategy/insert_entrance_img', // 图片加入模版
  insert_strategy_user: '/tag_strategy/strategy/insert_strategy_user', //设置预览用户
  get_strategy_data_list: '/tag_strategy/strategy/detail', //获取策略的详细数据

  // 推广管理 快应用推送
  get_send_rule_lists: '/push/app_push/rule_list', // 推送规则列表
  get_send_lists: '/push/app_push/send_info_lists', //推送数据列表
  change_send_status: '/push/app_push/change_status', //修改生效状态
  submit_push_rule: '/push/app_push/rule_submit', //推送规则新增
  get_push_rule_details: '/push/app_push/push_detail', //推送数据回显
  get_specialact_list: '/push/app_push/special_act_list', //获取专题活动
  get_promoteact_list: '/push/app_push/promote_act_list', //获取促销活动

  /***************************投放平台账号管理******************************** */
  // 账号管理
  getUserList_put: '/market_manager/user/list', // 投放用户表格数据获取
  getUserRole_put: '/market_manager/role/list', // 获取用户角色
  editUserStatus_put: '/market_manager/user/forbidden', // 账号启用禁用
  getPermissionList_put: '/market_manager/department/system_department_list', // 获取系统的部门列表
  addUser_put: '/market_manager/user/add', // 添加用户
  editUpdateUser_put: '/market_manager/user/update', // 编辑用户
  getUserInfo_put: '/market_manager/user/detail', // 获取用户详情

  // 推广链接
  getKyyList_put: '/market_manager/user/kyy_list', // 获取快应用列表
  getMemberList_put: '/market_manager/user/deparment_users', //获取部门用户列表
  getNovelById: '/novel/novels/searchByNovelId', // 查询小说名称
  addLink_put: '/promote/info/promote_link_add', // 推广链接添加

  // 媒体授权
  getMediaList_put: '/market_manager/adv_account/list', // 获取媒体授权列表
  editMediaStatus_put: '/market_manager/adv_account/forbidden', // 媒体账户禁用恢复
  getAuthLink_put: '/market_manager/media_auth/index', // 获取授权链接
  getAllocateUserList_put: '/market_manager/user/all_users', // 分配用户列表
  distributeAccount_put: '/market_manager/adv_account/dispatch', // 分配账户

  // 回收报表
  getRecycleList_put: '/market_manager/report/list', // 获取回收报表数据

  /**
   * 运营管理
   * */ 
  // 大转盘
  getTurntableTemplateList: '/tag_strategy/turntable/template_list', //获取大转盘模版列表
  getTurntableActiveList: '/tag_strategy/turntable/activity_list',   //获取大转盘活动列表
  getTurntableGiftList: '/tag_strategy/turntable/gift_list', //获取大转盘活动的奖品列表
  getTurntableActive: '/tag_strategy/turntable/get_activity',  //获取大转盘活动详情
  saveTurntableActive: '/tag_strategy/turntable/save_activity',   //保存大转盘活动
  delTuretableActive:'/tag_strategy/turntable/del_activity', //删除大转盘活动

  // 获取媒体类型下拉列表
  getMediaTypeList_put: '/market_manager/ext/media_type',

  // 获取投放书籍章节信息
  getChapterByBookId_put: '/novel/novels/searchForPromLink',

  // 获取千字价格
  getWordsPrice_put: '/market_manager/ext/price_per_thous_list',

  // 获取历史新增回填
  getHistoryPromote_put: '/promote/index/autofill',

  // 获取vivo数据源列表
  getVivoDataSource_put: '/market_manager/adv_account/vivo_source_list',

  // 关联vivo数据源
  addVivoSrcid_put: '/market_manager/adv_account/vivo_source',

  // vivo数据源删除
  deleteVivoSource_put:'/market_manager/adv_account/vivo_source_del',

  // oppo关联账号
  addOppoAdAccount_put: '/market_manager/adv_account/oppo_add',

  // 巨量同步广告账户 拉取列表
  getEngineUserAccount_put: '/market_manager/adv_account/second_ack_list',

  // 巨量同步广告 提交
  updateEngineUserAccount_put: '/market_manager/adv_account/second_ack_submit',



  // 商品分类
  category: `/adminapi/product/category/tree/0`,

  // 商品分类列表
  categoryList: `/adminapi/product/category`,

  setShow: `/adminapi/product/category/set_show`,

  upload2: `/adminapi/file/upload`,
  user: `/adminapi/home/user`,
  storeProduct: `/adminapi/export/storeProduct`,
  userLevel: `/adminapi/user/user_level/create?id=0`,


  //登录接口
  loginFuns: '/Home/Apis/Index/_c/sampleLogin',

  //首页接口
  listFuns:"/Home/Apis/sampleList",

  //添加接口
  addFuns:"/Home/Apis/samplePut",

  //图片上传
  uploadFuns:"/Home/Apis/Index/_c/upload",

  //删除
  delFuns:"/Home/Apis/Index/_c/sampleDel",

  //详情
  detislFuns:"/Home/Apis/Index/_c/sampleInfo"
}