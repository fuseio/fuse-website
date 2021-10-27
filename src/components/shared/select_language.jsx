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
  { label: 'Vietnamese', value: 'vi' },
  { label: 'Korean', value: 'ko' },
  { label: 'Indonesian', value: 'id' },
  { label: 'Turkish', value: 'tr' }
]

function SelectLanguage ({ history }) {
  const [isOpen, setIsOpen] = useState(false)
  const [setLang] = useLang()
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
      <GlobeIcon />
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

const GlobeIcon = () => (<svg width='52' height='32' viewBox='0 0 52 32' fill='none' xmlns='http://www.w3.org/2000/svg'>
  <g clip-path='url(#clip0)'>
    <path fill-rule='evenodd' clip-rule='evenodd' d='M16 1C7.71484 1 1 7.71484 1 16C1 24.2852 7.71484 31 16 31C24.2852 31 31 24.2852 31 16C31 7.71484 24.2852 1 16 1ZM12.5557 3.57489C11.6621 4.33075 10.8623 5.36786 10.1973 6.6247C9.59082 6.31708 9.01074 5.96552 8.46289 5.57001H8.42188C9.65527 4.67353 11.0498 3.99091 12.5557 3.57489ZM9.33789 8.55597C8.44141 8.10772 7.5918 7.57452 6.80664 6.96515C4.84082 8.96319 3.52246 11.5999 3.19141 14.5355H8.13379C8.26562 12.3499 8.69043 10.3167 9.33789 8.55597ZM3.12305 16.6445H8.09766C8.16211 19.1436 8.61035 21.4668 9.33691 23.4443C8.4375 23.8896 7.59082 24.4258 6.80566 25.0352C4.6582 22.8525 3.28418 19.9082 3.12305 16.6445ZM8.46484 26.4297H8.42383C9.6543 27.3262 11.0488 28.0088 12.5576 28.4248C11.6641 27.6689 10.8672 26.6318 10.1992 25.375C9.58984 25.6826 9.0127 26.0342 8.46484 26.4297ZM15.0918 27.5462C13.9375 27.18 12.8975 26.1282 12.0742 24.6077C13.0352 24.3001 14.0459 24.1038 15.0918 24.0306V27.5462ZM11.2344 22.6621C12.459 22.252 13.751 21.9941 15.0928 21.915V16.6445H10.209C10.2705 18.874 10.6396 20.9365 11.2344 22.6621ZM15.0898 14.5355H10.2441C10.3643 12.6194 10.7129 10.8499 11.2314 9.33819C12.4561 9.74835 13.748 10.0032 15.0898 10.0853V14.5355ZM12.0742 7.39228C13.0352 7.69989 14.0459 7.89618 15.0918 7.96943V4.4538C13.9375 4.81708 12.8975 5.86884 12.0742 7.39228ZM28.8086 14.5355H23.8662C23.7344 12.3499 23.3096 10.3167 22.6621 8.55597C23.5615 8.11065 24.4082 7.57452 25.1934 6.96515C27.1592 8.96319 28.4775 11.5999 28.8086 14.5355ZM23.5361 5.57001H23.5771C22.3467 4.67353 20.9521 3.99091 19.4434 3.57489C20.3369 4.33075 21.1338 5.36786 21.8018 6.6247C22.4111 6.31708 22.9883 5.96552 23.5361 5.57001ZM17.2012 4.5628C18.2383 5.00225 19.1729 6.00128 19.9258 7.39288C19.0557 7.6712 18.1416 7.8587 17.2012 7.94659V4.5628ZM20.7666 9.33819C19.6328 9.71905 18.4375 9.96807 17.2012 10.0648V14.5355H21.7539C21.6367 12.6194 21.2881 10.8499 20.7666 9.33819ZM17.2012 16.6445H21.792C21.7305 18.874 21.3613 20.9365 20.7666 22.6621C19.6328 22.2812 18.4375 22.0352 17.2012 21.9355V16.6445ZM17.2012 24.0534V27.4372C18.2383 26.9977 19.1729 25.9987 19.9258 24.6071C19.0527 24.3288 18.1416 24.1413 17.2012 24.0534ZM19.4453 28.4248C20.3389 27.6689 21.1387 26.6318 21.8037 25.375C22.4102 25.6826 22.9902 26.0342 23.5381 26.4297H23.5791C22.3457 27.3262 20.9512 28.0088 19.4453 28.4248ZM22.6621 23.4443C23.5586 23.8926 24.4082 24.4258 25.1934 25.0352C27.3408 22.8525 28.7148 19.9082 28.876 16.6445H23.9014C23.8369 19.1406 23.3916 21.4668 22.6621 23.4443Z' stroke='none' />
    <path d='M43 16L46.9293 19.9293C46.9683 19.9683 47.0317 19.9683 47.0707 19.9293L51 16' stroke-width='2' stroke-linecap='round' fill='none' />
  </g>
  <defs>
    <clipPath id='clip0'>
      <rect width='52' height='32' fill='white' />
    </clipPath>
  </defs>
</svg>)
