import React from 'react'

export default ({
  headerGroup
}) => {
  return (
    <tr {...headerGroup.getHeaderGroupProps({ className: 'table__header' })}>
      {
        headerGroup.headers.map((column, index) => (
          <th key={index} {...column.getHeaderProps({ className: column.collapse ? 'collapse' : '' })}>
            {column.render('Header')}
          </th>
        ))
      }
    </tr>
  )
}
