import React from 'react'
import { Image } from 'antd'
import { MFont } from '../'
import './styles.less'

/*
  <MCard 
    data={data} // 数据
    width={width} // 宽度
    columns={columns} // 列数
    rowGap={rowGap} // 行间距
    type={1} [1] 1左右 2上下 // 排列类型 
    numSize={numSize} // 数字字体大小
  />
*/
export default function MCard (props) {
  const {
    data = [],
    width = 70,
    rowGap = '18px', // 行间距
    columns = 3, // 列数
    numSize = '20px', // 数字字体大小
    type = 2, // 默认左右布局 模式一
  } = props

  // 左右布局 模式一
  const lr1 = () => {
    return (
      data.map((dt, index) => {
        const { image, title, num } = dt
        return (
          <div 
            className="common-mcard-box" 
            key={index}
          >
            <Image
              preview={false}
              src={image}
              width={width}
            />
            <div className="common-mcard-person">
              <p className="common-mcard-person-num">
                {/* 文字组件 */}
                <MFont
                  gradient='#F00 #0F0'
                  text={num}
                  fontSize={numSize}
                />
                <em>人</em>
              </p>
              <p className="common-mcard-person-title">{title}</p>
            </div>
          </div>
        )
      })
    )
  }

  // 上下布局 模式一
  const tb1 = () => {
    return (
      data.map((dt, index) => {
        const { title, num } = dt
        return (
          <div className="common-mcard-tb1" key={index}>
            <div className="common-mcard-tb1-text">
              {/* 文字组件 */}
              <MFont
                gradient='#F00 #0F0'
                text={num}
                fontSize={numSize}
              />
              <em>人</em>
              <p className="common-mcard-person-title">{title}</p>
            </div>
          </div>
        )
      })
    )
  }

  // 卡片展示样式
  const typeJsx = () => {
    const jsx = {
      1: lr1, // 左右布局 模式一
      2: tb1, // 上下布局 模式一
    }
    return jsx[type]
  }

  return (
    <div 
      className="common-mcard"
      style={{
        gridTemplateColumns: `repeat(${columns}, auto)`,
        rowGap, // 行间距
      }}
    >
      {typeJsx()()}
    </div>
  )
}
