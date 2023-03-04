import { useCallback, useState } from 'react';
import './App.css';
import React from 'react';


// useCallback hooks:避免bind操作 和 重复声明

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
