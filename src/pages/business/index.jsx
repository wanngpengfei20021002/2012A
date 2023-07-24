import React, { useCallback, useEffect, useRef } from 'react'
import Moveable from "react-moveable";
import './styles.less'

export default function App() {
  const targetRef = useRef(null);
  const targetRef2 = useRef(null);

  return (
    <div className="container" style={{
      position: 'relative', width: 500,
      height: 500, border: '1px #f00 solid'
    }}>
      <div styleName="target" ref={targetRef}>小花爱小白</div>

      <Moveable
        ref={targetRef2}
        draggable={true} // 目标是否可以拖动
        scalable={true} // 目标是否可以缩放
        snappable={true} // 目标是否可以捕捉到参考线, 相对于父元素
        target={targetRef} // moveable的对象
        resizable={true} // 是否可以缩放
        keepRatio={false} // 是否可以等比缩放
        throttleResize={1} // 计算改变宽高位置的频率
        renderDirections={["nw", "ne", "sw", "se"]} // 设置可以拖动的点的位置
        origin={false} // 显示中心点
        throttleDrag={1} // 拖拽多少距离 触发拖动
        throttleScale={0} // 缩放多少距离 触发缩放
        edgeDraggable={false} // 是否通过拖动边缘线来移动
        startDragRotate={0} // 拖动时throttleDragRotate x, y 的起始角度
        throttleDragRotate={0} // 拖动时x, y角度
        bounds={{ "left": 0, "top": 0, "right": 0, "bottom": 0, "position": "css" }}
        onDrag={e => {
          // 拖动中触发
          // console.log(e.transform, 1);
          e.target.style.transform = e.transform;
        }}
        // onScale={e => {
        //   console.log(e.drag.transform, 2);
        //   e.target.style.transform = e.drag.transform;
        // }}
        // 移动到 边界 触发
        onBound={e => {
          console.log(e, 2);
        }}
        onResize={e => {
          e.target.style.width = `${e.width}px`;
          e.target.style.height = `${e.height}px`;
        }}
      />
    </div>
  );
}