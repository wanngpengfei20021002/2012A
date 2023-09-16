## QIcon 图标组件

```javascript
    import QIcon from '@@@'
    
    /**
		 * 组件参数
     * 
     * @param {type} { string } [company] icon的类型
     * @param {fontSize} { number } [14] 图标大小
     * @param {color} { string } [#000] 图标颜色
     * @param {onClick} { function } 点击事件
     * @param {style} { object } 自定义 style
    */

    // 天气组件
    <Weather
      type={type} // icon的类型
      city={city} // 城区
      weather={weather} // 必填表单
      temperature={temperature} // 温度
      winddirection={winddirection} // 风向
      reporttime={reporttime} // 日期
    />

```

