import React, { useEffect, useState } from 'react'
import SearchIcon from '@/assets/images/search_icon.png'
import globe from '@/assets/images/ecosystem_cards/Globe.png'
import twitterIcon from '@/assets/images/ecosystem_cards/twitter-ecocard.png'
import discordIcon from '@/assets/images/ecosystem_cards/discord-ecocard.png'
import telegramIcon from '@/assets/images/ecosystem_cards/telegram-ecocard.png'

function Header ({ search, onChange }) {
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
  )
}

function Card ({ logo, description, tags, website, twitter, telegram, discord }) {
  return (
    <div className='ecosystem_section_2__card'>
      <div className='ecosystem_section_2__card__logo'>
        <img src={`${logo}`} alt='card' />
      </div>
      <div className='ecosystem_section_2__card__content_wrapper'>
        <div className='ecosystem_section_2__card__icons'>
          {
            website && (
              <a href={website} target='_blank' rel='noopener noreferrer'>
                <img src={globe} alt='globe' />
              </a>
            )
          }
          {
            twitter && (
              <a href={twitter} target='_blank' rel='noopener noreferrer'>
                <img src={twitterIcon} alt='twitter' />
              </a>
            )
          }
          {
            discord && (
              <a href={discord} target='_blank' rel='noopener noreferrer'>
                <img src={discordIcon} alt='discord' />
              </a>
            )
          }
          {
            telegram && (
              <a href={telegram} target='_blank' rel='noopener noreferrer'>
                <img src={telegramIcon} alt='telegram' />
              </a>
            )
          }
        </div>
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
  )
}

function Tags ({ tags, selectedTags, onClick }) {
  return (
    <div className='ecosystem_section_2__tags'>
      {tags.map(({ tag, count }, index) => (
        <div
          onClick={() => onClick({ tag, count })}
          className={`ecosystem_section_2__tags__tag ${selectedTags.includes(tag) ? 'ecosystem_section_2__tags__tag--selected' : ''}`}
          key={index}
        >
          {tag} <span>({count})</span>
        </div>
      ))}
    </div>
  )
}

const SectionTwo = () => {
  const [search, setSearch] = useState('')
  const [tags, setTags] = useState([])
  const [selectedTags, setSelectedTags] = useState([])
  const [data, setData] = useState([])
  const [orgItems, setOrgItems] = useState([])

  useEffect(() => {
    const tagsPromise = fetch('https://fuse-website-3ce69-default-rtdb.europe-west1.firebasedatabase.app/tags.json')
      .then(res => res.json())
      .then(json => {
        const orgTags = []
        for (const key in json) {
          orgTags.push(json[key])
        }
        return orgTags
      })

    const itemsPromise = fetch('https://fuse-website-3ce69-default-rtdb.europe-west1.firebasedatabase.app/items.json')
      .then(res => res.json())
      .then(json => {
        const orgItems = []
        for (const key in json) {
          orgItems.push(json[key])
        }
        setData(orgItems)
        setOrgItems(orgItems)
        return orgItems
      })

    Promise.all([tagsPromise, itemsPromise]).then(([tags, items]) => {
      const counts = items.reduce((acc, curr) => {
        (curr.tags || []).forEach((c) => {
          acc[c.toLowerCase()] = (acc[c.toLowerCase()] || 0) + 1
        })
        return acc
      }, {})
      const newTags = tags.map(({ tag }) => ({
        tag,
        count: counts[tag.toLowerCase()] || 0
      }))
      setTags(newTags)
    })
  }, [])

  const handleSearch = ({ target: { value } }) => {
    setSearch(value)
    setSelectedTags([])
    const q = value.toLowerCase()
    const filtered = orgItems.filter(
      (t) => t.description.toLowerCase().includes(q) || (t.tags || []).join(' ').toLowerCase().includes(q)
    )
    setData(filtered)
  }

  const handleTagClick = ({ tag }) => {
    const index = selectedTags.findIndex((t) => t === tag)
    let newSelectedTags
    if (index === -1) newSelectedTags = [...selectedTags, tag]
    else {
      newSelectedTags = [...selectedTags]
      newSelectedTags.splice(index, 1)
    }
    setSelectedTags(newSelectedTags)
    const arr = orgItems.filter((d) =>
      newSelectedTags.some((selectedTag) => (d.tags || []).includes(selectedTag))
    )
    setData(arr)
  }

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
  )
}

export default SectionTwo
