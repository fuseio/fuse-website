import React from 'react'

function Navbar ({ onMouseLeave, children }) {
  return (
    <nav className='nav' onMouseLeave={onMouseLeave}>
      <ul className='nav__list'>{children}</ul>
    </nav>
  )
}

export default Navbar
