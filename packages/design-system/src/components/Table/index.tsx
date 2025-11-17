import React from 'react'
import {
  useReactTable,
  getCoreRowModel,
  getSortedRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  flexRender,
  type ColumnDef,
  type SortingState,
  type ColumnFiltersState,
} from '@tanstack/react-table'
import { useVirtualizer } from '@tanstack/react-virtual'
import { styled } from '../../stitches.config'
import { Button } from '../Button'

const TableContainer = styled('div', {
  width: '100%',
  overflowX: 'auto',
  border: '1px solid $borderDefault',
  borderRadius: '$lg',
})

const StyledTable = styled('table', {
  width: '100%',
  borderCollapse: 'collapse',
  fontSize: '$14',
})

const Th = styled('th', {
  padding: '$3 $4',
  textAlign: 'left',
  fontWeight: '$semibold',
  color: '$textPrimary',
  backgroundColor: '$bgSecondary',
  borderBottom: '2px solid $borderDefault',
  userSelect: 'none',
  cursor: 'pointer',

  '&:hover': {
    backgroundColor: '$bgTertiary',
  },

  '&[data-sortable="true"]': {
    '&::after': {
      content: '↕',
      marginLeft: '$2',
      opacity: 0.3,
    },
  },

  '&[data-sorted="asc"]::after': {
    content: '↑',
    opacity: 1,
  },

  '&[data-sorted="desc"]::after': {
    content: '↓',
    opacity: 1,
  },
})

const Td = styled('td', {
  padding: '$3 $4',
  borderBottom: '1px solid $borderDefault',
  color: '$textPrimary',
})

const Tr = styled('tr', {
  '&:hover': {
    backgroundColor: '$bgSecondary',
  },

  '&:last-child td': {
    borderBottom: 'none',
  },
})

const PaginationContainer = styled('div', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  padding: '$4',
  borderTop: '1px solid $borderDefault',
  gap: '$4',
})

const PaginationInfo = styled('span', {
  fontSize: '$14',
  color: '$textSecondary',
})

const PaginationButtons = styled('div', {
  display: 'flex',
  gap: '$2',
})

export interface DataTableProps<TData> {
  data: TData[]
  columns: ColumnDef<TData>[]
  enableSorting?: boolean
  enableFiltering?: boolean
  enablePagination?: boolean
  pageSize?: number
  virtualized?: boolean
}

export function DataTable<TData>({
  data,
  columns,
  enableSorting = true,
  enableFiltering = false,
  enablePagination = true,
  pageSize = 10,
  virtualized = false,
}: DataTableProps<TData>) {
  const [sorting, setSorting] = React.useState<SortingState>([])
  const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>(
    []
  )

  const table = useReactTable({
    data,
    columns,
    state: {
      sorting,
      columnFilters,
    },
    onSortingChange: setSorting,
    onColumnFiltersChange: setColumnFilters,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: enableSorting ? getSortedRowModel() : undefined,
    getFilteredRowModel: enableFiltering ? getFilteredRowModel() : undefined,
    getPaginationRowModel: enablePagination
      ? getPaginationRowModel()
      : undefined,
    initialState: {
      pagination: {
        pageSize,
      },
    },
  })

  const parentRef = React.useRef<HTMLDivElement>(null)

  const rows = table.getRowModel().rows

  const virtualizer = useVirtualizer({
    count: rows.length,
    getScrollElement: () => parentRef.current,
    estimateSize: () => 48,
    enabled: virtualized,
  })

  const virtualRows = virtualized ? virtualizer.getVirtualItems() : null

  return (
    <div>
      <TableContainer ref={virtualized ? parentRef : null}>
        <StyledTable>
          <thead>
            {table.getHeaderGroups().map((headerGroup) => (
              <tr key={headerGroup.id}>
                {headerGroup.headers.map((header) => (
                  <Th
                    key={header.id}
                    onClick={header.column.getToggleSortingHandler()}
                    data-sortable={header.column.getCanSort()}
                    data-sorted={
                      header.column.getIsSorted()
                        ? String(header.column.getIsSorted())
                        : undefined
                    }
                  >
                    {header.isPlaceholder
                      ? null
                      : flexRender(
                          header.column.columnDef.header,
                          header.getContext()
                        )}
                  </Th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody>
            {virtualized && virtualRows
              ? virtualRows.map((virtualRow) => {
                  const row = rows[virtualRow.index]
                  return (
                    <Tr key={row.id}>
                      {row.getVisibleCells().map((cell) => (
                        <Td key={cell.id}>
                          {flexRender(
                            cell.column.columnDef.cell,
                            cell.getContext()
                          )}
                        </Td>
                      ))}
                    </Tr>
                  )
                })
              : rows.map((row) => (
                  <Tr key={row.id}>
                    {row.getVisibleCells().map((cell) => (
                      <Td key={cell.id}>
                        {flexRender(
                          cell.column.columnDef.cell,
                          cell.getContext()
                        )}
                      </Td>
                    ))}
                  </Tr>
                ))}
          </tbody>
        </StyledTable>
      </TableContainer>

      {enablePagination && (
        <PaginationContainer>
          <PaginationInfo>
            Showing {table.getState().pagination.pageIndex * pageSize + 1} to{' '}
            {Math.min(
              (table.getState().pagination.pageIndex + 1) * pageSize,
              data.length
            )}{' '}
            of {data.length} results
          </PaginationInfo>
          <PaginationButtons>
            <Button
              size="sm"
              variant="secondary"
              onClick={() => table.previousPage()}
              disabled={!table.getCanPreviousPage()}
            >
              Previous
            </Button>
            <Button
              size="sm"
              variant="secondary"
              onClick={() => table.nextPage()}
              disabled={!table.getCanNextPage()}
            >
              Next
            </Button>
          </PaginationButtons>
        </PaginationContainer>
      )}
    </div>
  )
}
