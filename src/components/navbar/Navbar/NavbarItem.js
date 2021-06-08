import React from 'react'
import classNames from 'classnames'
import ArrowDown from '@/assets/images/arrow_down.svg'
import ArrowWhite from '@/assets/images/dropdown/drop_arrow_white.svg'
import { withRouter } from 'react-router'

function NavbarItem ({
  onMouseEnter,
  index,
  title,
  children,
  history,
  currentIndex
}) {
  const isWhite = !history.location.pathname.includes('about')
  const handler = () => {
    onMouseEnter(index)
  }
  return (
    <li className='nav__item' onMouseEnter={handler} onFocus={handler}>
      <button className={classNames('text', { 'text--white': isWhite })}>
        {title}
        <img className={classNames('arrow', { 'arrow--open': currentIndex === index })} src={isWhite ? ArrowWhite : ArrowDown} alt='arrow' />
      </button>
      <div className='dropdown_slot'>{children}</div>
    </li>
  )
}

export default withRouter(NavbarItem)
