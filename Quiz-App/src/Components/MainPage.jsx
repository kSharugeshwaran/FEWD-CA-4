import React from 'react'
import { Football } from './Football'
import { useState } from 'react'
const MainPage = ({theme,setTheme}) => {
    const [show, setShow] = useState(()=>{
        return false
    })
    
  return (
    <div className='body'>{show ?<Football theme={theme} setTheme={setTheme}/>:(
        <div className='nameContainer'>
        <h2 className='name'>TriviaTurf</h2>
        <button onClick={() => {setShow(true)}} className='start'>K I C K - O F F</button>
    </div>)}
    </div>
    
  )
}

export default MainPage