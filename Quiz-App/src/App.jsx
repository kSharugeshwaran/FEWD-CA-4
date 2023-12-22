import React, { useState } from 'react'
import "./App.css"
import MainPage from './Components/MainPage'
import kdb from "./assets/kante.png" 
import kante from "./assets/kdb2.png" 

const App = () => {
  const[theme,setTheme] = useState(false)
  return (
    <>
    
    {theme && (<div className="morphism"></div>)}
    <button className='dark' onClick={() => {
      setTheme(prev => !prev)
    }} style={{backgroundColor : "rgba(255, 255, 255, 0)" , border: "none" , fontSize : "40px"}}>
    {theme ? (
      <img src={kdb} style={{
        width: "50px",
        height: "50px"
      }}/>
    ) : (
      <img src={kante}
      style={{
        width: "50px",
        height: "50px"
      }}/>
    )}</button>
    
    <div ><MainPage theme={theme} setTheme={setTheme}/></div>
    </>
  )
}

export default App