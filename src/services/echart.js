import request from '@/utils/request';
import api from './api';

export const user = (payload) => request.get(api.user, payload);

