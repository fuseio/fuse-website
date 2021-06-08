import React from 'react'
import { FormattedMessage } from 'react-intl'

export default ({ row, index, style = {} }) => {
  if (!row) {
    return (
      <div>
        <span>
          <FormattedMessage defaultMessage='Loading more' />
          ...
        </span>
      </div>
    )
  }

  return (
    <tr
      {...row.getRowProps({
        style,
        className: 'table__body__row'
      })}
    >
      {
        row.cells.map((cell) => {
          return (
            <td
              key={index}
              {...cell.getCellProps({
                className: cell.column.collapse ? 'collapse' : ''
              })}
            >
              {cell.render('Cell')}
            </td>
          )
        })
      }
    </tr>
  )
}
