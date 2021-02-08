import React from 'react'

function Navbar ({ onMouseLeave, children }) {
  return (
    <nav className='nav' onMouseLeave={onMouseLeave}>
      <ul className='nav__list grid-x align-middle align-justify'>{children}</ul>
    </nav>
  )
}

export default Navbar
