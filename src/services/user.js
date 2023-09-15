import request from '@/utils/request';
import api from './api';

// 登录接口
export const login = params => request.post(api.post_login, params);

// 退出接口
export const logout = params => request.get(api.get_logout);

// 左侧导航栏菜单
export const getMenuList = params => request.get(api.menu_list, params);

// 判断用户是否绑定公众号
export const getAuthWx = params => request.get(api.auth_wx_app, params);

// 新分销登陆老分销 带状态
export const newLoginOld = params => request.get(api.new_login_Old, params)