import React from 'react'
import { useTable } from 'react-table'
import BodyRow from './BodyRow'
import HeaderRow from './HeaderRow'
import Holders from '@/assets/img/table/holders.svg'
import Circulating from '@/assets/img/table/circulating.svg'
import TotalSupply from '@/assets/img/table/total_supply.svg'
import Contract from '@/assets/img/table/contract.svg'
import { FormattedMessage } from 'react-intl'

const rightColumnData = [
  {
    icon: Holders,
    name: <FormattedMessage defaultMessage='Holders' />
  },
  {
    icon: Circulating,
    name: <FormattedMessage defaultMessage='Circulating supply' />
  },
  {
    icon: TotalSupply,
    name: <FormattedMessage defaultMessage='Total supply' />
  },
  {
    icon: Contract,
    name: <FormattedMessage defaultMessage='Contracts' />
  }
]

function MyTable ({ columns, data, count }) {
  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable(
      {
        columns,
        data,
        initialState: { pageCount: count, pageSize: 4 }
      },
      (hooks) => {
        hooks.visibleColumns.push((columns) => [
          {
            id: 'checkbox',
            Cell: ({ row: { index } }) => (
              <div className='number'>
                <img src={rightColumnData[index].icon} />
                {rightColumnData[index].name}
              </div>
            )
          },
          ...columns
        ])
      }
    )

  return (
    <div className='table__wrapper'>
      <table {...getTableProps({ className: 'table' })}>
        <thead>
          {
            headerGroups.map((headerGroup, index) => (
              <HeaderRow key={index} headerGroup={headerGroup} />
            ))
          }
        </thead>
        <tbody {...getTableBodyProps({ className: 'table__body' })}>
          {
            rows.map(
              (row, i) =>
                prepareRow(row) || <BodyRow key={i} row={row} index={i} />
            )
          }
        </tbody>
      </table>
    </div>
  )
}

export default React.memo(MyTable)
