import React, { useState } from 'react'
import MainPage from './MainPage'
import { Football } from './Football'

const ResultPage = ({theme,setTheme}) => {
const [showMainPage,setMain] = useState(() => {
  return false
})
const score  = JSON.parse(localStorage.getItem("score"))
const result = (score/10)*100
console.log(score)
  return (
    <>
      {showMainPage ? (<MainPage/>) : <div>
        <div className='container'>
            <p>Quiz Results</p>
            <p className='result'>Your Score = {result}%</p>
            <button className='restart' onClick={() => {setMain(true)}}>R E S T A R T</button>
        </div>
    </div>}  
    </>
  )
}

export default ResultPage