import { useEffect, useMemo, useState } from 'react';
import './App.css';
import React from 'react';

// 类似于vue 的计算属性
// 依赖[count]变化而重新计算 + 不会render执行而执行

function App(props) {

  const [count,setCount] = useState(0)
  
  const add =useMemo(() => {
    return count +1
  },[count])
 
  return (
    <div>
      <div >
        count
      </div>
      <div>
        {add}
      </div>
    </div>
  );
}


export default App;
