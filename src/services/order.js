
import request from "@/utils/request";
import api from "./api";

// ------------------- 数据统计 --------------------------

//订单
export const getOrderPage = payload => request.get(api.get_order_manage_page, payload);
export const exportOrder = payload => {
    return request.get(api.export_order, payload, {
      responseType: 'blob',
    });
  };

// 广告上报
export const reportOrderAd = payload => request.post(api.get_order_ad_report,payload)
