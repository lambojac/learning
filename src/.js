import React from 'react'

function App() {

const[Increment, setIncrement]=useState(0)
const[Decrement, setDecrement]=useState(1)

const Increase=(count)=>{
    setIncrement(
        Increment?0:+1
    )
}
const Decrease=(event)=>{
    setDecrement(Decrement?0:-1)
}
  return (
    <div>
      
    <div>
        <button onClick={Increase}>+</button>
        <button onClick={Decrease}>-</button>
    </div>
    </div>
  )
}

export default App
