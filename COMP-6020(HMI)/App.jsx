import { useState, useEffect, useRef} from 'react'
import './App.css'
import Traffic from './Traffic'

function App() {
  const [light, setLight] = useState(false)
  const [lights, setLights] = useState(["red", "yellow", "green"])
  const [turnOn, setTurnOn]= useState('red')
  const [isPressed, setisPressed]= useState(false)
  const timer = useRef('')


  const buttonAction=() =>{
    if(turnOn==='red')
    {
        setTurnOn('yellow')
    }
    else if(turnOn==='yellow')
    {
      setTurnOn('green')
    }
    else if (turnOn==='green')
    {
      setTurnOn('red')
    }
  }
const effect =() =>{
  setLight(!light)
}

  useEffect(()=>{
    //
    if(isPressed===true){
      timer.current= setTimeout(()=>{
        buttonAction();
      }, 1000)
    }
    return ()=>{
      if(timer.current)
      {
        clearTimeout(timer.current)
      }
    }


  },[isPressed, turnOn])



  return (
    <>
      {lights.map((item, index) => 
          <Traffic
          color={item}
          isOn={item === turnOn}
          key={index}
          />
        )}
        <div>
        <button onClick={()=> buttonAction()}>Push</button>
        </div>
        <div>
        <button onClick={()=> { /*effect();*/setisPressed(!isPressed);}}>{isPressed ? "stop":"run"}</button>
        </div>
    </>
  )
}

export default App