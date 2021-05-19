import React from 'react'

export default ({
  headerGroup
}) => {
  return (
    <tr {...headerGroup.getHeaderGroupProps({ className: 'table__header grid-x align-middle align-spaced' })}>
      {headerGroup.headers.map((column, index) => {
        const className = `table__header__cell cell small-${Math.ceil(24 / headerGroup.headers.length)}`
        return (
          <th key={index} {...column.getHeaderProps({ className })}>
            {column.render('Header')}
          </th>
        )
      })}
    </tr>
  )
}
