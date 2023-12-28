import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  let [counter, setCounter] = useState(0)
  // let Counter = 15
  let addValue = () => {
    setCounter(counter + 1)
     console.log('Value added',counter);
  }

  let removeValue  = () => {
    setCounter(counter - 1)
  }

  return (
    <>
      <h2>Hello everyone YASH here!!</h2>
      <p>Tap on increase to increase the number and on decrease to decrease the number</p>

      <br />

        <h4>Counter value:{counter}</h4>

      <br />
      <div>
        <button 
        onClick={addValue}> 
          increase
          </button>
        <br /><br />
        <button
        onClick={removeValue}>
        decrease
        </button>
      </div>
    </>
  )
}

export default App
