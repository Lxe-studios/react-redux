import { useCallback, useState } from 'react';
import './App.css';
import React from 'react';


// useCallback hooks:避免bind操作 和 重复声明
// 默认返回缓存函数
// 如果依赖变化，返回新的缓存函数
// 给字组件传递 函数，通过usecallback 使得子组件性能有效的优化
// 性能优化根据依赖是否发生变化决定 决定子组件是否需要重新渲染(y因为传递缓存的值) 性能优化 细粒度更好

function App(props) {
  const [count,setCount] = useState(0)
  const clickCallback = useCallback(() => {
    setCount(count + 1)
  },[count])

  return (
    <div>
      <div>{count}</div>
       <button onClick={() => {setCount(count + 1)}}>button</button>
       <button onClick={clickCallback}>button2</button>
    </div>
  )
  
}





export default App;