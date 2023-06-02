import request from "@/utils/request";
import api from "./api";

// 图片上传
export const getUpload = payload => request.uploadPost(api.upload, payload);

// 提交
export const samplePut = payload => request.post(api.samplePut, payload);

// 详情
export const sampleInfo = payload => request.post(api.sampleInfo, payload);

export const sampleList = payload => request.get(api.sampleList, payload);

export const upload2 = payload => request.uploadPost(api.upload2, payload);

