## QButton 公共按钮组件

```javascript

    import QImage from '@@@/QImage'
    /**
		 * data 参数
     * 
     * @param {tabBarExtraContent} { React Node } 右侧内容
     * 
		 * @param {style} { Object } 阴影
		 * @param {className} { String } className
     * 
     * @param antd 所有属性
    */

    // 数据驱动视图
    // 前端数据映射
    [
      {
        id: 1,
        title: '语文',
        children: <p>我喜欢语文</p>,
        just: 'right',
        tabBarExtraContent: [
          <h1>x1</h1>,
          <h1>x1</h1>,
        ],
      },
      {
        id: 2,
        title: '数学',
        children: <p>我喜欢数学</p>,
        just: 'left',
        tabBarExtraContent: [
          <h1>x1</h1>,
          <h1>x1</h1>,
        ],
      },
      {
        id: 3,
        title: '历史',
        children: <p>我喜欢历史</p>,
        just: 'space-sxxx',
        tabBarExtraContent: [
          <h1>x1</h1>,
          <h1>x1</h1>,
        ],
      },
    ]

    <QTab
      just="left"
      color="#000"
      fontSize="14"
      style={{}}
      className=""
      type=""
    />

```
