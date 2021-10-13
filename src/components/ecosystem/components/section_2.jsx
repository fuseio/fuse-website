import React, { useEffect, useState } from 'react';
import { FormattedMessage } from 'react-intl';

import SearchIcon from '@/assets/images/search_icon.png';

import Ramp from '@/assets/images/ecosystem_cards/ramp_eco.png';
import ChainLink from '@/assets/images/ecosystem_cards/chainlink_eco.png';
import Pokt from '@/assets/images/ecosystem_cards/pokt.png';
import Request from '@/assets/images/ecosystem_cards/request.png';
import Boson from '@/assets/images/ecosystem_cards/boson.png';
import Ochain from '@/assets/images/ecosystem_cards/ochain.png';
import Orion from '@/assets/images/ecosystem_cards/orion_eco.png';
import EMoney from '@/assets/images/ecosystem_cards/e-Money.png';
import MantraDao from '@/assets/images/ecosystem_cards/MantraDao.png';
import Transak from '@/assets/images/ecosystem_cards/transak_eco.png';
import Monerium from '@/assets/images/ecosystem_cards/Monerium.png';
import Ichi from '@/assets/images/ecosystem_cards/ichi.png';
import Ola from '@/assets/images/ecosystem_cards/ola.png';
import Krystal from '@/assets/images/ecosystem_cards/krystal.png';
import Dapp from '@/assets/images/ecosystem_cards/dapp.png';
import GetBlock from '@/assets/images/ecosystem_cards/getblock.png';
import Staking from '@/assets/images/ecosystem_cards/staking.png';
import ChangeNow from '@/assets/images/ecosystem_cards/change-now.png';
import Unstoppable from '@/assets/images/ecosystem_cards/unstoppable.png';
import MintGate from '@/assets/images/ecosystem_cards/MintGate.png';
import Unmarshal from '@/assets/images/ecosystem_cards/unmarshal_eco.png';
import TheGraph from '@/assets/images/ecosystem_cards/thegraph_eco.png';
import OZ from '@/assets/images/ecosystem_cards/OZ.png';
import Sushi from '@/assets/images/ecosystem_cards/Sushi.png';
import Vfat from '@/assets/images/ecosystem_cards/vfat.png';
import GoodDollar from '@/assets/images/ecosystem_cards/good-dollar.png';
import Kolektivo from '@/assets/images/ecosystem_cards/kolektivo.png';
import Comunitaria from '@/assets/images/ecosystem_cards/comunitaria.png';
import Peepl from '@/assets/images/ecosystem_cards/peepl.png';
import TheWellbeing from '@/assets/images/ecosystem_cards/TheWellbeing.png';
import CuraDai from '@/assets/images/ecosystem_cards/curadai.png';
import Flambu from '@/assets/images/ecosystem_cards/Flambu.png';



// const items = [];



function Header({ search, onChange }) {
  return (
    <div className='ecosystem_section_2__header'>
      <div className='ecosystem_section_2__last_update'>
        Last Updated on
        <span>Sept 20</span>
      </div>
      <div className='ecosystem_section_2__search'>
        <div className='ecosystem_section_2__search__icon__wrapper'>
          <img className='ecosystem_section_2__search__icon' src={SearchIcon} alt='search' />
        </div>
        <input type='text' placeholder='Type to search' value={search} onChange={onChange} />
      </div>
    </div>
  );
}

function Card({ logo, description, tags }) {

  console.log(tags);
  return (
    <div className='ecosystem_section_2__card'>
      <div className='ecosystem_section_2__card__logo'>
        <img src = {`${logo}`} alt='card' />
      </div>
      <div className='ecosystem_section_2__card__content_wrapper'>
        <div className='ecosystem_section_2__card__description'>{description}</div>
        <div className='ecosystem_section_2__card__tags'>
          {(tags || []).map((tag, index) => (
            <div className='ecosystem_section_2__card__tag' key={index}>
              {tag}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function Tags({ tags, selectedTags, onClick }) {
  
  return (
    <div className='ecosystem_section_2__tags'>
      {tags.map(({ tag, count }, index) => (
        <div
          onClick={() => onClick({ tag, count })}
          className={`ecosystem_section_2__tags__tag ${
            selectedTags.includes(tag) ? 'ecosystem_section_2__tags__tag--selected' : ''
          }`}
          key={index}
        >
          {tag} <span>({count})</span>
        </div>
      ))}
    </div>
  );
}

const SectionTwo = () => {


  const [search, setSearch] = useState('');
  const [tags, setTags] = useState([]);
  const [selectedTags, setSelectedTags] = useState([]);
  const [data, setData] = useState([]);
  const [orgItems, setOrgItems] = useState([]);

  
  useEffect(()=>{
    
      fetch("https://fuse-website-3ce69-default-rtdb.europe-west1.firebasedatabase.app/tags.json")
      .then(res => res.json())
      .then(json => {
        let orgTags = []
        for (let key in json) {
          orgTags.push(json[key]);
        }
      
        setTags(orgTags)
      })

      fetch("https://fuse-website-3ce69-default-rtdb.europe-west1.firebasedatabase.app/items.json")
        .then(res => res.json())
        .then(json => {
          let orgItems = [];
          for (let key in json){
            orgItems.push(json[key]);
          }
          setData(orgItems);
          setOrgItems(orgItems);
        })
    
  },[])

  const handleSearch = ({ target: { value } }) => {
    setSearch(value);
    setSelectedTags([]);
    const q = value.toLowerCase();
    const filtered = orgItems.filter(
      (t) => t.description.toLowerCase().includes(q) || (t.tags || []).join(' ').toLowerCase().includes(q)
    );
    setData(filtered);
  };

  const handleTagClick = ({ tag }) => {
    const index = selectedTags.findIndex((t) => t === tag);
    console.log(index);
    let newSelectedTags;
    if (index === -1) newSelectedTags = [...selectedTags, tag];
    else {
      newSelectedTags = [...selectedTags];
      newSelectedTags.splice(index, 1);
    }
    setSelectedTags(newSelectedTags);
    console.log(newSelectedTags);
    const arr = orgItems.filter((d) =>
      newSelectedTags.every((selectedTag) => (d.tags || []).includes(selectedTag))
    );
    setData(arr);
  };

  return (
    <section className='ecosystem_section_2__container'>
      <div className='ecosystem_section_2'>
        <Header search={search} onChange={handleSearch} />
        <div className='ecosystem_section_2__content_container'>
          <Tags tags={tags} selectedTags={selectedTags} onClick={handleTagClick} />
          <div className='ecosystem_section_2__cards'>
            {data.map((item, index) => (
              <Card key={index} {...item} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionTwo;
