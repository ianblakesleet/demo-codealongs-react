import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <header>
      <Link to="/">
        <button id="link-btn">Home</button>
      </Link>
      <Link to="/addTask">
        <button id="link-btn">Add Task</button>
      </Link>
      <Link to="/team">
        <button id="link-btn">Team</button>
      </Link>
    </header>
  )
}

export default Header
