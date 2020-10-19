import React, { useState, useEffect } from 'react';
import classNames from 'classnames'
import { useLang } from './lang_provider';

const options = [
  {label: "English", value: "en"},
  {label: "中国酶", value: "zh"},
];

const SelectLanguage = ({isNetworkHeader, isOpen}) => {
  const [isListOpen, setIsOpen] = useState(false);
  const [lang, setLang] = useLang();
  const toggling = () => setIsOpen(!isListOpen);

  const onOptionClicked = ({ value }) => () => {
    setLang(value);
    setIsOpen(false);
  };

  return (
  <>
    <a onClick={toggling} rel="noreferrer noopener" className={classNames('icon', { 'language': (!isNetworkHeader || isOpen), 'language--white': isNetworkHeader && !isOpen })} target='_blank'/>
    {/* <div onClick={toggling} className='dropdown-header'>
      {selectedOption.label}
    </div> */}
    <div className='dropdown-container'>
      {isListOpen && (
        <div className='dropdown-list-container'>
          <ul className='dropdown-list'>
            {options.map((option, index) => (
              <li onClick={onOptionClicked(option)} key={index} className='list-item'>
                {option.label}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  </>
  );
}

export default SelectLanguage;