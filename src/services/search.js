import request from '@/utils/request';
import api from './api';

// 商品分类
export const getCategory = payload => request.get(api.category, payload)

// 商品分类列表
export const categoryList = payload => request.get(api.categoryList, payload)

// 商品分类列表
export const setShow = payload => request.put(`${api.setShow}${payload}`)

// 导出
export const storeProduct = payload => request.get(api.storeProduct, payload)


