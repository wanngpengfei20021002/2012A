import React, { useCallback, useEffect, useState } from 'react'
import shortid from 'shortid'
import cs from 'classnames'
import { QIcon } from '@@@'
import { ProgressBar } from 'antd-mobile'
import './styles.less'

// const data = [
//   {
//     seleted: '', // 1 
//     value: 5,
//   },
//   {
//     seleted: '',
//     value: 5,
//   },
// ]

export default function Xuanzuo (props) {
  const [result, setResult] = useState([])
  const [x3, setX3] = useState(0)
  const { data } = props

  useEffect(() => {
    const id = setInterval(() => {
      setX3(pre => {
        if (pre + 1 === 101) {
          clearInterval(id)
          return false
        }
        return pre + 1
      })
    }, 10)
  }, [])

  // 加载阶段
  // 更新阶段
  // 卸载阶段
  useEffect(() => {
    const xxx = data.map(() => ({
      id: shortid.generate(),
      seleted: '', // 改颜色
      seleted2: '', // 改颜色
      value: 5,
    }))

    setResult([...xxx])
  }, [data])

  const onClick = (index, dt) => {
    const { id } = dt
    const obj = result.find(dt => dt.id === id)
    obj['seleted'] = index
    setTimeout(() => {
      obj['seleted2'] = index
      setResult([...result])
    }, 0)
    setResult([...result])
  }

  return (
    <div>
      {
        result.map(dt => {
          const { value, id, seleted, seleted2 } = dt
          const arr = new Array(value).fill('')
          return (
            <div key={id}>
              {
                arr.map((ar, index) => {
                  return (
                    <QIcon
                      className={cs({
                        xxxx: seleted === index,
                        seleted: seleted2 === index,
                      })}
                      // className={cs({seleted: seleted === index})}
                      key={index}
                      type="a-check-circle-outlined2x"
                      fontSize={50}
                      // index: 点击每排的第几个座位
                      // dt: 整个数据
                      onClick={() => onClick(index, dt)}
                    />
                  )
                })
              }
            </div>
            
          )
        })
      }
      <ProgressBar
        percent={x3}
        style={{
          '--track-width': '4px',
        }}
      />
    </div>
  )
}