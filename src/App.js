import React from 'react'

// import './App.css'
import styled from 'styled-components'

import Todo from './components/todolist'
import Trombinoscope from './components/trombinoscope'

function App() {
  return (
    <div className='App'>
      {/* <Todo /> */}
      <Square backgroundColor='red'></Square>
      <Square backgroundColor='blue'></Square>
      <Square backgroundColor='yellow'></Square>

      <Circle secondary></Circle>
      <Circle></Circle>
      <SquareBis></SquareBis>
    </div>
  )
}

const SquareBis = styled.div`
  width: 30px;
  height: 30px;
  background-color: ${props => props.theme.secondary};
`

const Square = styled.div`
  width: 30px;
  height: 30px;
  background-color: ${props => props.backgroundColor};
`

const Circle = styled.div`
  width: 30px;
  height: 30px;
  border-radius: 15px;
  background-color: ${props => (props.secondary ? 'transparent' : 'green')};
  border: 1px solid ${props => (props.secondary ? 'green' : 'transparent')};
`

export default App
