import React, { useEffect, useState } from 'react'
import classNames from 'classnames'
import { database } from '@/utils/firebase'
import { ref, child, get } from 'firebase/database'
import SearchIcon from '@/assets/images/search_icon.svg'
import arrowRight from '@/assets/images/arrow-right.svg'

function Header ({ search, onChange }) {
  return (
    <div className='ecosystem_section_2__header'>
      <div className='ecosystem_section_2__search'>
        <div className='ecosystem_section_2__search__icon__wrapper'>
          <img className='ecosystem_section_2__search__icon' src={SearchIcon} alt='search' />
        </div>
        <input type='text' placeholder='Type to search' value={search} onChange={onChange} />
      </div>
    </div>
  )
}

function Card ({ logo, description, website }) {
  return (
    <div className='ecosystem_section_2__card'>
      <div className='ecosystem_section_2__card__logo'>
        <img src={`${logo}`} alt='card' />
      </div>
      <div className='ecosystem_section_2__card__content_wrapper'>
        <div className='ecosystem_section_2__card__description'>{description}</div>
        <a
          className='ecosystem_section_2__card__learn_more'
          href={website}
          target='_blank'
          rel='noopener noreferrer'
        >
          Learn More
          <img src={arrowRight} alt='arrow-right' />
        </a>
      </div>
    </div>
  )
}

function Tags ({ tags, selectedTags, onClick }) {
  return (
    <div className='ecosystem_section_2__tags__wrapper'>
      <h1 className='ecosystem_section_2__tags__title'>Tags</h1>
      <div className='ecosystem_section_2__tags'>
        {tags.map(({ tag, count }, index) => (
          <div
            onClick={() => onClick({ tag, count })}
            className={classNames('ecosystem_section_2__tags__tag', { 'ecosystem_section_2__tags__tag--selected': selectedTags.includes(tag) })}
            key={index}
          >
            {tag} <span>({count})</span>
          </div>
        ))}
      </div>
    </div>
  )
}

const SectionTwo = () => {
  const [search, setSearch] = useState('')
  const [tags, setTags] = useState([])
  const [selectedTags, setSelectedTags] = useState([])
  const [data, setData] = useState([])
  const [orgItems, setOrgItems] = useState([])
  const [date, setDate] = useState('')

  useEffect(() => {
    (async () => {
      const tagsSnapshot = await get(child(ref(database), 'tags'))
      const itemsSnapshot = await get(child(ref(database), 'items'))
      const dateSnapshot = await get(child(ref(database), 'date'))
      const tags = Object.values(tagsSnapshot.exists() ? tagsSnapshot.val() : [])
      const items = Object.values(itemsSnapshot.exists() ? itemsSnapshot.val() : {})
      const date = dateSnapshot.exists() ? dateSnapshot.val() : ''

      setData(items)
      setOrgItems(items)
      setDate(date)
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
    })()
  }, [])

  const handleSearch = ({ target: { value } }) => {
    setSearch(value)
    setSelectedTags([])
    const q = value.toLowerCase()
    const filtered = orgItems.filter(
      (t) =>
        t.description.toLowerCase().includes(q) ||
        (t.tags || []).join(' ').toLowerCase().includes(q)
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
    if (!newSelectedTags.length) {
      setData(orgItems)
      return
    }
    const arr = orgItems.filter((d) =>
      newSelectedTags.some((selectedTag) => (d.tags || []).includes(selectedTag))
    )
    setData(arr)
  }

  return (
    <div className='ecosystem_section_2'>
      <Header search={search} onChange={handleSearch} />
      <div className='ecosystem_section_2__content_container'>
        <Tags tags={tags} selectedTags={selectedTags} onClick={handleTagClick} />
        <div className='ecosystem_section_2__cards__wrapper'>
          <div className='ecosystem_section_2__last_update'>
            Last Updated on
            <span>{date}</span>
          </div>
          <div className='ecosystem_section_2__cards'>
            {data.map((item, index) => (
              <Card key={index} {...item} />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default SectionTwo
