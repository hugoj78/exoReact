import React from 'react'
import logo from './../../logo.svg'
import PropTypes from 'prop-types'

const Header = ({ label, alertFunction }) => {
  return (
    <header className='App-header'>
      <img src={logo} className='App-logo' alt='logo' />
      <p>
        Edit <code>src/App.js</code> and save to reload. hihi
        {label}
      </p>
      <a
        className='App-link'
        href='https://reactjs.org'
        target='_blank'
        rel='noopener noreferrer'
      >
        Learn React
      </a>

      <button onClick={alertFunction}>coucou</button>
    </header>
  )
}

Header.propsTypes = {
  label: PropTypes.string,
  alertFunction: PropTypes.func.isRequired
}

export default Header
