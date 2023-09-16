import request from "@/utils/request";
import api from "./api";

// 获取通知公告列表
export const getNotice = payload => request.get(api.notice, payload);

// 获取通知公告详细信息
export const getNoticeInfo = payload => request.get(api.noticeinfo, payload);
