import request from "@/utils/request";
import api from "./api";

// 获取大转盘模版列表
export const getTurntableTemplateList = payload => request.get(api.getTurntableTemplateList, payload);

// 获取大转盘活动列表
export const getTurntableActiveList = payload => request.get(api.getTurntableActiveList, payload);

// 获取大转盘活动的奖品列表
export const getTurntableGiftList = payload => request.get(api.getTurntableGiftList, payload);

// 获取大转盘活动信息
export const getTurntableActive = payload => request.get(api.getTurntableActive, payload);

// 保存大转盘活动信息
export const saveTurntableActive = payload => request.post(api.saveTurntableActive, payload);

// 删除大转盘活动
export const delTuretableActive = payload => request.post(api.delTuretableActive, payload);