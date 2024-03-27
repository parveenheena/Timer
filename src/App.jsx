import React, { useEffect, useState } from 'react'
import './App.css'

const App = () => {
    const [timer, setTimer] = useState(0)
    const [running, setRunning] = useState(false)
    
    useEffect(()=>{
        let interval;
        if(running){
            interval = setInterval(()=>{
                setTimer(prev=>prev+1)
            },1000)
        }else{
            clearInterval(interval)
        }

        return ()=>clearInterval(interval)
    },[running])

    function handleTimer(){
        setRunning(prev=>!prev)
    }

    function handleReset(){
        setTimer(0);
        setRunning(false)
    }
  return (
    <div>
        <h2>Timer</h2>
        <p>{timer}</p>
        <button onClick={handleTimer}>{running ? "pause" : "start"}</button>
        <button onClick={handleReset}>reset</button>
    </div>
  )
}

export default App