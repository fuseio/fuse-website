import React from 'react'

const TableHeader = ({ name, icon }) => (
  <div>
    <img src={icon} />
    <span>{name}</span>
  </div>
)

export default TableHeader
