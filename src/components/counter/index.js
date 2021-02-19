import React, { useState, useEffect } from 'react'

const Counter = () => {
  const [counterValue, setCounterValue] = useState(0)

  useEffect(() => {
    document.title = counterValue
    alert(counterValue)
  })

  return (
    <div>
      <p>{counterValue}</p>
      <div>
        <button onClick={() => setCounterValue(counterValue - 1)}>-</button>
        <button onClick={() => setCounterValue(counterValue + 1)}>+</button>
      </div>
    </div>
  )
}

export default Counter
