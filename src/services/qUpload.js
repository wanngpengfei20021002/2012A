import request from '@/utils/request';
import api from './api';

// 商品分类
export const getUpload2 = payload => request.uploadPost(api.upload, payload)
