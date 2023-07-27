import React, { useState, useRef, useEffect } from 'react'
import { connect } from 'dva'
import * as echarts from 'echarts'
import { Button, Upload, message, Image } from 'antd'

const option = {
  title: {
    text: 'Stacked Line'
  },
  tooltip: {
    show: true, // 是否显示
    trigger: 'axis',
    axisPointer: { // 坐标轴指示器配置项。
      type: 'cross', // 'line' 直线指示器  'shadow' 阴影指示器  'none' 无指示器  'cross' 十字准星指示器。
    },
    backgroundColor: '#F99', // 提示框浮层的背景颜色。
    borderColor: '#0F0', // 提示框浮层的边框颜色。
    borderWidth: 10, // 提示框浮层的边框宽。
    padding: 5, // 提示框浮层内边距，
    textStyle: { // 提示框浮层的文本样式。
      color: '#00f',
      fontStyle: 'normal',
      fontWeight: 'normal',
      fontFamily: 'sans-serif',
      fontSize: 20,
    },
    // 提示框浮层内容格式器，支持字符串模板和回调函数两种形式。
    // 模板变量有 {a}, {b}，{c}，分别表示系列名，数据名，数据值等
    // formatter: '{a}--{b} 的成绩是 {c}'
    formatter: function(arg) {
      return '<h1>3333</h1>'
    }
  },
  legend: {
    data: ['Email', 'Union Ads', 'Video Ads', 'Direct', 'Search Engine']
  },
  grid: {
    left: '3%',
    right: '4%',
    bottom: '3%',
    containLabel: true
  },
  toolbox: {
    feature: {
      saveAsImage: {}
    }
  },
  xAxis: {
    type: 'category',
    boundaryGap: false,
    data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
  },
  yAxis: {
    type: 'value'
  },
  series: [
    {
      name: 'Email',
      type: 'line',
      stack: 'Total',
      data: [120, 132, 101, 134, 90, 230, 210]
    },
    {
      name: 'Union Ads',
      type: 'line',
      stack: 'Total',
      data: [220, 182, 191, 234, 290, 330, 310]
    },
    {
      name: 'Video Ads',
      type: 'line',
      stack: 'Total',
      data: [150, 232, 201, 154, 190, 330, 410]
    },
    {
      name: 'Direct',
      type: 'line',
      stack: 'Total',
      data: [320, 332, 301, 334, 390, 330, 320]
    },
    {
      name: 'Search Engine',
      type: 'line',
      stack: 'Total',
      data: [820, 932, 901, 934, 1290, 1330, 1320]
    }
  ]
};
export default connect(state => {
  return {}
})(App)
function App (props) {
  const ref = useRef()
  const ref2 = useRef()

  /*  
    * echart 封装组件
    * onresize 监听改变
    * 图标定制的
  */

  useEffect(() => {
    window.addEventListener('resize', () => {
      ref2.current.resize()
    })
  }, [])

  useEffect(() => {
    const myChart = ref2.current = echarts.init(ref.current)

    // 绘制图表
    myChart.setOption(option)
  }, [])

  return (
    <div>
      <div ref={ref} style={{width: '100%', height: 300}}></div>
    </div>
  )
}


