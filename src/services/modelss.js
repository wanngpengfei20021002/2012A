import request from '@/utils/request';
import api from './api';

export const getMediaList1 = payload => request.get(api.sampleList, payload)
