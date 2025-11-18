import type { Meta, StoryObj } from '@storybook/react-vite'
import { DataTable } from './index'
import { createColumnHelper } from '@tanstack/react-table'

interface User {
  id: number
  name: string
  email: string
  role: string
  status: 'active' | 'inactive'
}

const columnHelper = createColumnHelper<User>()

const columns = [
  columnHelper.accessor('id', {
    header: 'ID',
    cell: (info) => info.getValue(),
  }),
  columnHelper.accessor('name', {
    header: 'Name',
    cell: (info) => info.getValue(),
  }),
  columnHelper.accessor('email', {
    header: 'Email',
    cell: (info) => info.getValue(),
  }),
  columnHelper.accessor('role', {
    header: 'Role',
    cell: (info) => info.getValue(),
  }),
  columnHelper.accessor('status', {
    header: 'Status',
    cell: (info) => {
      const status = info.getValue()
      return (
        <span
          style={{
            padding: '4px 8px',
            borderRadius: '4px',
            fontSize: '12px',
            fontWeight: 500,
            backgroundColor: status === 'active' ? '#f0fdf4' : '#fef2f2',
            color: status === 'active' ? '#15803d' : '#b91c1c',
          }}
        >
          {status}
        </span>
      )
    },
  }),
]

const sampleData: User[] = Array.from({ length: 50 }, (_, i) => ({
  id: i + 1,
  name: `User ${i + 1}`,
  email: `user${i + 1}@example.com`,
  role: ['Admin', 'Editor', 'Viewer'][i % 3],
  status: i % 3 === 0 ? 'inactive' : 'active',
}))

const meta: Meta<typeof DataTable> = {
  title: 'Components/DataTable',
  component: DataTable,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof DataTable<User>>

export const Default: Story = {
  args: {
    data: sampleData.slice(0, 10),
    columns,
  },
}

export const WithPagination: Story = {
  args: {
    data: sampleData,
    columns,
    enablePagination: true,
    pageSize: 10,
  },
}

export const WithSorting: Story = {
  args: {
    data: sampleData.slice(0, 20),
    columns,
    enableSorting: true,
  },
}

export const Virtualized: Story = {
  args: {
    data: sampleData,
    columns,
    virtualized: true,
    enablePagination: false,
  },
}
