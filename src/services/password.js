// 推广模块
import request from '@/utils/request';
import api from './api';

// 记住密码
export const sampleLogin = payload => request.post(api.sampleLogin, payload)



