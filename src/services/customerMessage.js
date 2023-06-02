import request from '@/utils/request';
import api from './api';

// 客服消息
export const getMaterial = (payload) => request.get(api.getMaterial, payload) // 物料数据
export const couponActivityLinkList = (payload) => request.get(api.couponActivityLinkList, payload) // 活动链接
export const getPromoteLinkByUser = (payload) => request.get(api.getPromoteLinkByUser, payload) // 推广链接
export const getPromoteNovelInfo = (payload) => request.get(api.getPromoteNovelInfo, payload) // 获取小说简介信息
