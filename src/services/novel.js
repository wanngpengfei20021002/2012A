import request from '@/utils/request'
import api from './api'

// 获取小说信息列表
export const getNovelList = payload => request.get(api.get_novellist, payload)

// 获取常用搜索条件
export const getSearchCommon = payload => request.get(api.get_searchcommon, payload)

// 添加常用搜索条件
export const getAddSearchCommon = payload => request.post(api.add_searchcommon, payload);

// 删除某条常用搜索条件
export const getDelSearchCommon = payload => request.post(api.del_searchcommon, payload);

// 获取搜索条件taglist数据
export const getSearchCriteria = payload => request.get(api.get_searchcriteria, payload)

// 获取自定义书豆select
export const getDiyCharge = payload => request.get(api.get_diy_charge, payload)

// 设置自定义价格
export const setDiyCharge = payload => request.post(api.set_diy_charge, payload);

// 批量设置默认价格
export const setNovelPrice = payload => request.post(api.set_novel_price, payload);

// 获取小说章节列表
export const getNovelInfo = payload => request.get(api.get_novel_info, payload);

// 获取小说章节详情
export const getNovelDetail = payload => request.get(api.get_novel_detail, payload)

// 获取章节推广链接,获取当前点击的章节id，name
export const getNextParagraph = payload => request.get(api.get_next_paragraph, payload);

// 获取推广链接入口页面类型
export const getPromoteType = payload => request.get(api.get_promote_type, payload);

// 获取推广链接
export const getGroupWxInfo = payload => request.get(api.get_group_wx_info, payload);

// 添加推广链接
export const setPromoteLink = payload => request.get(api.add_promote_link, payload);

// 获取小说详情上一章或下一章
export const getParagraphInfo = payload => request.get(api.get_paragraph_info, payload);

// 获取VIP批量链接列表
export const getVipList = payload => request.get(api.get_vip_list, payload);

// 获取VIP链接详情
export const getVipListDetail = payload => request.get(api.get_vip_listdetail, payload);

// 获取VIP链接详情
export const getQrcodeModule = payload => request.get(api.get_qrcode_module, payload);

// 获取vip创建链接明细的所有渠道
export const getUserOutChannels = payload => request.get(api.get_user_out_channels, {...payload, is_auth: 1});

// 修改vip创建链接明细成本价格
export const setCost = payload => request.get(api.set_cost, payload);

// 恢复默认价格
export const setDefaultCharge = payload => request.get(api.set_default_price, payload);

// 批量清除自定义价格
export const setClearPrice = payload => request.post(api.set_clear_price, payload);

// 获取自定义价格列表
export const getDiyChargeList = payload => request.get(api.get_diy_charge_list, payload);

// 导出详细数据
export const getExportDetail = (payload) => {
  return request.get(api.get_vip_export_detail, payload, {
    responseType: 'blob',
  });
};
