import { useCallback, useState } from 'react';
import './App.css';
import React from 'react';




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
