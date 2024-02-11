import { useState } from 'react'
import './App.css'

function App() {
  const [counter, setCounter] = useState(10)

  const increaseValue = () => {
    if (counter < 20) {
      setCounter(prevCounter => prevCounter + 1);
      setCounter(prevCounter => prevCounter + 1);
      setCounter(prevCounter => prevCounter + 1);
      setCounter(prevCounter => prevCounter + 1);
    }
  }

  const decreaseValue = () => {
    if (counter > 0)
      setCounter(counter - 1);
  }

  return (
    <>
      <h1>Counter App</h1>
      <h2>Counter Value: {counter}</h2>
      <button onClick={increaseValue}>Increase +</button> &nbsp;
      <button onClick={decreaseValue}>Decrease -</button>
    </>
  )
}

export default App
