import { useCallback, useState } from 'react';
import './App.css';
import React from 'react';

// useRef
// 获取children 子节点 字组件
// 类似于class 组件属性，组件的全局变量

// 通过useImperativeHandle 让父组件获取字组件 内 的引用
// 定义子组件可以选择性暴露给父组件一些定义的方法或属性

// forward Ref = 转发ref
// React.forwardRef 会创建一个组件
// 参数 function，函数 参数props，

// useLayoutEffect useEffect
// 相同： useEffect(() => {
// do effect
//  return() => clean up
// },[])
// 不同： useEffect async 异步的 + after：render（Screen painted）

// useLayoutEffect sync 同步的 + before：render（Screen painted） 
// run,阻塞 直到完成

React.forwardRef((props,ref) => {
  return (
    <div>
      <h3 ref={ref}>{props.content}</h3>
    </div>
  )
})



function App(props) {
  

  return (
    <div>

    </div>
  )
  
}


export default App;
