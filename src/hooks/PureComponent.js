import { useEffect, useMemo, useState } from 'react';
import './App.css';
import React from 'react';


// 性能优化
// React UI层 js库；数据——视图——》render统一
// 数据更新 —— 重新render —— 视图更新
// 性能损失： 数据 没有变化 但是组件渲染了（无用功）


// function shouldComponentUpdate(nextProps,nextState){
//   if(nextProps.name === this.props.name) {
//     return false
//   } else {
//     return true
//   }

// }

// 优化方案 PureComponent
// 层次简单： react提供的语法糖，简单比较
// 深层次比较：shouldComponentUpdate
// 字组件继承PureComponent，我们不需要写shuoldComponentUpdate， react自动做对比——优化

// PureComponent 问题： 数据更新 视图没更新

function Children(){
  return (
    <div>Children</div>
  )
}

function App(props) {
  const [count,setCount] = useState(0)

  return (
    <div>
       <div>count: {count}</div>
       <Children></Children>
      <button onClick={() => {
        setCount(count + 1)
      }}>button</button>
    </div>
  )
  
}






export default App;
