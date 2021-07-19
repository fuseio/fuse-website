import React, { useState, useRef } from 'react'
import { withRouter } from 'react-router'
import classNames from 'classnames'
import { useLang } from './lang_provider'
import useOutsideClick from '@/hooks/useOutsideClick.jsx'

const options = [
  { label: 'English', value: 'en' },
  { label: 'Spanish', value: 'es' },
  { label: '中文', value: 'zh' },
  { label: 'Русский', value: 'ru' },
  // { label: 'Vietnamese', value: 'vi' },
  { label: 'Korean', value: 'ko' }
]

function SelectLanguage ({ history }) {
  const [isOpen, setIsOpen] = useState(false)
  const [lang, setLang] = useLang()
  const iconRef = useRef(null)

  const isWhite = !history.location.pathname.includes('about')

  useOutsideClick(iconRef, () => {
    if (isOpen) {
      setIsOpen(false)
    }
  })

  const onOptionClicked = ({ value }) => () => {
    setLang(value)
    setIsOpen(false)
  }

  const openLanguageOptions = (e) => {
    e.stopPropagation()
    setIsOpen(!isOpen)
  }

  return (
    <a
      ref={iconRef}
      onClick={openLanguageOptions}
      rel='noreferrer noopener'
      className={classNames('icon language', { 'language--white': isWhite })}
      target='_blank'
    >
      <span>{lang}</span>
      <div style={{ minWidth: '130px' }} className={classNames('drop', { 'drop--show': isOpen })}>
        <ul className='drop__options'>
          {
            options.map((option, index) => (
              <li onClick={onOptionClicked(option)} key={index} className='drop__options__item'>
                {option.label}
              </li>
            ))
          }
        </ul>
      </div>
    </a>
  )
}

export default withRouter(SelectLanguage)
