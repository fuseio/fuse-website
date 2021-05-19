import React from 'react'
import classNames from 'classnames'
import ArrowDown from '@/assets/images/arrow_down.svg'
import { withRouter } from 'react-router'

function NavbarItem ({
  onMouseEnter,
  index,
  title,
  children,
  history,
  currentIndex
}) {
  // const isNetworkHeader = true // history.location.pathname.includes('network')
  const isWhite = !history.location.pathname.includes('about')
  const handler = () => {
    onMouseEnter(index)
  }
  return (
    <li className='nav__item' onMouseEnter={handler} onFocus={handler}>
      <button className={classNames('text', { 'text--white': isWhite })}>
        {title}
        <img className={classNames('arrow', { 'arrow--open': currentIndex === index })} src={ArrowDown} alt='arrow' />
      </button>
      <div className='dropdown_slot'>{children}</div>
    </li>
  )
}

export default withRouter(NavbarItem)
