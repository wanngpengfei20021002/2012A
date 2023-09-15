import request from '../utils/request';
import api from './api';
//登录
export const loginFun = (payload) => request.post(api.loginFuns, payload);
//首页数据
export const listFn = (payload) => request.get(api.listFuns, payload);
//添加数据
export const addFn = (payload) => request.post(api.addFuns, payload);
//图片上传
export const uploadFn = (payload) =>
  request.uploadPost(api.uploadFuns, payload);
//删除
export const delFn = (payload) => request.post(api.delFuns, payload);
//详情
export const detislFn = (payload) => request.post(api.detislFuns, payload);