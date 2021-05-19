import React from 'react'

export default ({
  row,
  index,
  style = {}
}) => {
  if (!row) {
    return (
      <div>
        <span>Loading more...</span>
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
      {row.cells.map(cell => {
        const { column: { id } } = cell
        const className = id === 'checkbox' || id === 'dropdown'
          ? 'table__body__cell cell grid-x align-start align-middle small-6'
          : `table__body__cell cell grid-x align-center align-middle small-${Math.ceil(24 / row.cells.length)}`
        return (
          <td key={index} {...cell.getCellProps({ className: cell.column.collapse ? 'collapse' : '' })}>
            {cell.render('Cell')}
          </td>
        )
      })}
    </tr>
  )
}
