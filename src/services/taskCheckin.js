import request from '@/utils/request';
import api from './api';

// 获取任务开关配置数据
export const getTaskConfig = () => request.get(api.get_task_config);

// 设置任务开关配置数据
export const setTaskConfig = (params) => request.post(api.set_task_config, params);

// 获取签到数据
export const getCheckin = () => request.get(api.get_ckeckin);

// 设置签到数据
export const setCheckin = (params) => request.post(api.set_checkin, params);

// 获取日常任务、新手任务
export const getDailyNoviceTask = (params) => request.get(api.get_daily_novice_task, params);

// 设置日常任务、新手任务
export const setDailyNoviceTask = (params) =>  request.post(api.set_daily_novice_task, params);

// 获取分享任务
export const getShareTask = () => request.get(api.get_share_task);

// 设置分享任务
export const setShareTask = (params) => request.post(api.set_share_task, params);
