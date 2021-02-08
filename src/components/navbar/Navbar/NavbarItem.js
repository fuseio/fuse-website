import React from 'react'
import classNames from 'classnames'
import ArrowDown from '@/assets/images/arrow_down.svg'

function NavbarItem({
  onMouseEnter,
  index,
  title,
  children,
  isNetworkHeader,
  isAboutHeader
}) {
  const handler = () => {
    onMouseEnter(index)
  }
  return (
    <li className='nav__item' onMouseEnter={handler} onFocus={handler}>
      <button className={classNames('text', { 'text--white': (isNetworkHeader || isAboutHeader) })}>
        {title}
        <img src={ArrowDown} alt='arrow' />
      </button>
      <div className='dropdown_slot'>{children}</div>
    </li>
  )
}

export default NavbarItem
