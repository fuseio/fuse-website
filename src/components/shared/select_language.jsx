import React from 'react';

const SelectLanguage = ({ setLang }) => {
  return <select onChange={(e) => setLang(e.target.value)}>
    <option value='en'>English</option>
    <option value='zh'>中国酶</option>
  </select>;
}

export default SelectLanguage;