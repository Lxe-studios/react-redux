import { useEffect, useState } from 'react';
import './App.css';
import React from 'react';

// consumer 嵌套复杂，Consumer 表达式必须是一个函数 增加工作
// contextType：支持类组件，无法在多个Context 发挥作用，支持一个
// useText：不需要嵌套， 多个Context 写法简单


const {Provider,Consumer}  = React.createContext('default')

const ThemeContext = React.createContext('grey')
const FontContext = React.createContext('')

function App(props) {

  const [theme,setTheme] = useState('red')
  const [font,setFont] = useState('bold')

  return (
    <div >
       <p>{theme}</p>
        <button onClick={() => {
          setTheme('green')
        }}>Click </button>
        <button onClick={() => {setFont('')}}>改变字体</button>
      <ThemeContext.Provider value={theme}>
        
       <FontContext.Provider value={font}>
        <Child1></Child1>
       </FontContext.Provider>
      </ThemeContext.Provider>
    </div>
  );
}

function Child1() {
  return (
    <ThemeContext.Consumer>
      {
        (theme) => (
          <FontContext.Consumer>
             {
              (font) => (
                <div style={{backgroundColor:theme,fontWeight:font}}>child</div>
              )
             }
          </FontContext.Consumer>
        )
      }
    </ThemeContext.Consumer>
  )
}



// const App = () => <App1 initCount={10}></App1>

export default App;