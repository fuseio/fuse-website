import React, { useEffect, useState } from 'react'
import classNames from 'classnames'
import SearchIcon from '@/assets/images/search_icon.svg'
import arrowRight from '@/assets/images/arrow-right.svg'
import ecosystem from '@/utils/strapi'
import dateFormat from 'dateformat'
import _ from 'lodash'

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

function Card ({ logo, desc, link }) {
  return (
    <div className='ecosystem_section_2__card'>
      <div className='ecosystem_section_2__card__logo'>
        <img src={logo.data.attributes.url} alt='card' />
      </div>
      <div className='ecosystem_section_2__card__content_wrapper'>
        <div className='ecosystem_section_2__card__description'>{desc}</div>
        <a
          className='ecosystem_section_2__card__learn_more'
          href={link}
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
        {tags.map((tag, index) => (
          <div
            onClick={() => onClick(tag[0])}
            className={classNames('ecosystem_section_2__tags__tag', { 'ecosystem_section_2__tags__tag--selected': selectedTags.includes(tag[0]) })}
            key={index}
          >
            {tag[0]} <span>({tag[1]})</span>
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
    fetchEcosystem()
  }, [])

  const fetchEcosystem = async () => {
    const fetchedData = await ecosystem
    const result = fetchedData.data.data.map(e => e.attributes.tags.map(e => {
      if (e.tag.data) return e.tag.data.attributes.text
      return null
    }
    ))
    setTags(Object.entries(_.countBy(_.omitBy(result.flat(Infinity), _.isNil))))
    setData(fetchedData.data.data)
    setDate(dateFormat(fetchedData.data.data[0].attributes.updatedAt, 'mmmm dS, yyyy'))
    setOrgItems(fetchedData.data.data)
  }

  const handleSearch = ({ target: { value } }) => {
    setSearch(value)
    setSelectedTags([])
    const q = value.toLowerCase()
    const filtered = orgItems.filter(
      (t) =>

        t.attributes.desc.toLowerCase().includes(q) ||
        (t.attributes.tags.map(e => {
          if (e.tag.data) return e.tag.data.attributes.text
          return null
        }) || []).join(' ').toLowerCase().includes(q) || t.attributes.title?.toLowerCase().includes(q)

    )
    setData(filtered)
  }

  const handleTagClick = (tag) => {
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
      newSelectedTags.some((selectedTag) => (d.attributes.tags.map(e => {
        if (e.tag.data) return e.tag.data.attributes.text
        return null
      }) || []).includes(selectedTag))
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
              <Card key={index} {...item.attributes} />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default SectionTwo
