import React, { useState, useRef } from 'react'
import classNames from 'classnames'
import { useLang } from './lang_provider'
import useOutsideClick from '@/hooks/useOutsideClick.jsx'

const options = [
  { label: 'English', value: 'en' },
  { label: '中国酶', value: 'zh' },
  { label: 'Vietnamese', value: 'vi' },
  { label: 'Korean', value: 'ko' }
]

const SelectLanguage = ({ isNetworkHeader, isAboutHeader, isOpen }) => {
  const [isListOpen, setIsOpen] = useState(false)
  const [, setLang] = useLang()
  const iconRef = useRef(null)

  useOutsideClick(iconRef, () => {
    if (isListOpen) {
      setIsOpen(false)
    }
  })

  const onOptionClicked = ({ value }) => () => {
    setLang(value)
    setIsOpen(false)
  }

  const openLanguageOptions = (e) => {
    e.stopPropagation()
    setIsOpen(!isListOpen)
  }

  return (
    <a
      ref={iconRef}
      onClick={openLanguageOptions}
      rel='noreferrer noopener'
      className={classNames('icon', { language: (!(isNetworkHeader || isAboutHeader) || isOpen), 'language--white': (isNetworkHeader || isAboutHeader) && !isOpen })}
      target='_blank'
    >
      <div style={{ minWidth: '130px' }} className={classNames('drop', { 'drop--show': isListOpen })}>
        <ul className='drop__options'>
          {options.map((option, index) => (
            <li onClick={onOptionClicked(option)} key={index} className='drop__options__item'>
              {option.label}
            </li>
          ))}
        </ul>
      </div>
    </a>
  )
}

export default SelectLanguage
