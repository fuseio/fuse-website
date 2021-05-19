import React from 'react'

const TableHeader = ({ name, icon }) => (
  <div className='heade'>
    <img src={icon} />
    <span>{name}</span>
  </div>
)

export default TableHeader
