import React, { useState } from 'react'
import "./App.css"
import MainPage from './Components/MainPage'

const App = () => {
  const[theme,setTheme] = useState(() => {
    return false
  })
  return (
    <>
    
    {theme && (<div className="morphism"></div>)}
    <button className='dark' onClick={() => {
      setTheme(prev => !prev)
    }}>dark</button>
    
    <div ><MainPage theme={theme} setTheme={setTheme}/></div>
    </>
  )
}

export default App