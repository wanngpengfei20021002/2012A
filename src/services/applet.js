import request from '@/utils/request';
import api from './api';

// 获取小程序配置信息
export const getApplet = (payload) => request.get(api.get_xcx_config, payload);
