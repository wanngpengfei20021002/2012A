import request from '@/utils/request'
import api from './api'

// 获取策略列表
export const getStrategyList = payload => request.get(api.get_strategy_list, payload)

// 根据策略名称搜索
export const getStrategyDataList = payload => request.get(api.get_strategy_data_list, payload)

// 修改策略状态
export const changeStrategyStatus = payload => request.post(api.change_strategy_status, payload)

// 获取策略信息
export const getStrategyConfig = payload => request.get(api.get_strategy_config, payload)

// 新增/修改策略
export const addModifyStrategy = payload => request.post(api.add_modify_strategy, payload)

// 上传图片
export const strategyUploadImg = payload => request.uploadPost(api.strategy_upload_img, payload)

// 获取模版
export const getStrategyImgTemp = payload => request.get(api.get_strategy_imgTemp, payload)

// 图片加入模版
export const addStrategyImgTemp = payload => request.post(api.add_strategy_imgTemp, payload)

// 设置预览用户
export const setStrategyUser = payload => request.post(api.insert_strategy_user, payload)
