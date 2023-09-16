import React from 'react'
import { Image } from 'antd'
import { getDay } from '@/utils/optimization'
import images from './images'

export default function Weather (props) {
  const {
    province: '', // 城市
    city: '', // 城区
    weather: '', // 天气
    temperature: '', // 温度
    winddirection: '', // 风向
    reporttime: '', // 日期
  } = props

  return (
    <div className="common-weather">
      {/* 日期 */}
      {reporttime && <span>reporttime</span>}

      {/* 星期 */}
      <span>{getDay()}</span>

      {/* 天气 */}
      {weather && <Image src={images[weather]} />}

      {/* 风向 */}
      {winddirection && <span>风向: {winddirection}</span>}

      {/* 城市 */}
      {province && <span>城市: {province}</span>}

      {/* 温度 */}
      {temperature && <span>温度: {temperature}</span>}
    </div>
  )
}
