import { useEffect, useState } from 'react';
import './App.css';
import React from 'react';

//  hooks不要应用在class中
//  useState
//   返回值： 数组 【state， function update State】 = useState（）
//   state 变量 ：ES6 数组解构，名称随意
//   变量不会因为函数退出而消失，会保存在当前的react

//  useEffect(): 在函数中提供state数据
//  副作用：容易造成副作用的污染操作：网络请求，事件监听 dom操作
// class组件：有生命周期函数钩子 方便处理 副作用操作
// class 组件 1.生命周期臃肿 2.逻辑复用（继承：不支持多继承；渲染： 组件嵌套）3.this 指向

// useEffect 为什么在组件中使用
// 能够有效的访问state变量或者props； 函数作用域的支持

// mounting and updateing =》 after render

// 释放资源、回收机制
// 一般情况cleanup
// 特殊情况： 订阅额外的资源
// 危险 内存泄露 memory leak

// Context
// 通过组件树 传递 数据一个方法，避免 每一层手动传递props
// 多层嵌套 场景
// React createContext（defaultValue）生成context
// Provider 提供者： 提供要共享的数据
// Consumer 消费者： 使用provider 提供的数据

const {Provider,Consumer}  = React.createContext('default')

function Father() {
  
  const [money,setMoney] = useState(200)

  return (
   <Provider value={money}>
    <div style={{width:'40%',margin:'50px auto'}}>
      <p>father组件定义值：</p>
      <Son></Son>
    </div>
   </Provider>
  )
}

function Son(props) {
  return (
    // Consumer 里面不能直接是一个字组件，而是一个函数，参数是Context的值，返回值是真正的字组件
    // 多个Context时候可以通过 嵌套函数获取所有Context
    <Consumer>
     {(money) => 
     <div style={{width:'40%',margin:'50px auto'}}>
     <p>子组件：获取father 值{money}</p>
   </div>}
    
   </Consumer>
  )
}


function App(props) {

  // const [count, setCount] = useState(0)
  const [count,setCount] = useState(() => {
    let initCount = props.initCount
    return initCount || 0
  })

  useEffect(() => {
    document.title = `you click ${count} times`
  },[count])

  return (
    <div className="App">
      <p>{count}</p>
      <button onClick={() => setCount(count + 1)}>Click </button>
    </div>
  );
}

// const App = () => <App1 initCount={10}></App1>

export default Father;