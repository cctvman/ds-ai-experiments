'use client'

import { useState } from 'react'
import {
  styled,
  Button,
  Input,
  TextArea,
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
  DataTable,
} from '@ds/design-system'
import { createColumnHelper } from '@tanstack/react-table'

const Container = styled('div', {
  minHeight: '100vh',
  backgroundColor: '$bgSecondary',
  padding: '$8',
})

const Header = styled('div', {
  marginBottom: '$8',
})

const Title = styled('h1', {
  fontSize: '$36',
  fontWeight: '$bold',
  color: '$textPrimary',
  marginBottom: '$2',
})

const Subtitle = styled('p', {
  fontSize: '$18',
  color: '$textSecondary',
})

const Grid = styled('div', {
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
  gap: '$6',
  marginBottom: '$8',
})

const Section = styled('section', {
  marginBottom: '$8',
})

const SectionTitle = styled('h2', {
  fontSize: '$24',
  fontWeight: '$semibold',
  color: '$textPrimary',
  marginBottom: '$4',
})

interface Product {
  id: number
  name: string
  category: string
  price: string
  stock: number
}

const columnHelper = createColumnHelper<Product>()

const columns = [
  columnHelper.accessor('id', {
    header: 'ID',
    cell: (info) => info.getValue(),
  }),
  columnHelper.accessor('name', {
    header: 'Product',
    cell: (info) => info.getValue(),
  }),
  columnHelper.accessor('category', {
    header: 'Category',
    cell: (info) => info.getValue(),
  }),
  columnHelper.accessor('price', {
    header: 'Price',
    cell: (info) => info.getValue(),
  }),
  columnHelper.accessor('stock', {
    header: 'Stock',
    cell: (info) => {
      const value = info.getValue()
      return (
        <span
          style={{
            color: value > 10 ? '#15803d' : value > 0 ? '#b45309' : '#b91c1c',
          }}
        >
          {value}
        </span>
      )
    },
  }),
]

const sampleProducts: Product[] = [
  { id: 1, name: 'Laptop Pro', category: 'Electronics', price: '$1,299', stock: 15 },
  { id: 2, name: 'Wireless Mouse', category: 'Accessories', price: '$29', stock: 42 },
  { id: 3, name: 'USB-C Hub', category: 'Accessories', price: '$49', stock: 8 },
  { id: 4, name: 'Monitor 27"', category: 'Electronics', price: '$399', stock: 0 },
  { id: 5, name: 'Keyboard Mechanical', category: 'Accessories', price: '$129', stock: 23 },
]

export default function DesignSystemPage() {
  const [loading, setLoading] = useState(false)

  return (
    <Container>
      <Header>
        <Title>Design System Components</Title>
        <Subtitle>Interactive component showcase</Subtitle>
      </Header>

      <Section>
        <SectionTitle>Buttons</SectionTitle>
        <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
          <Button variant="primary">Primary</Button>
          <Button variant="secondary">Secondary</Button>
          <Button variant="ghost">Ghost</Button>
          <Button variant="destructive">Delete</Button>
          <Button
            loading={loading}
            onClick={() => {
              setLoading(true)
              setTimeout(() => setLoading(false), 2000)
            }}
          >
            {loading ? 'Loading...' : 'Click to Load'}
          </Button>
          <Button disabled>Disabled</Button>
        </div>
      </Section>

      <Section>
        <SectionTitle>Form Inputs</SectionTitle>
        <Grid>
          <Input
            label="Email"
            type="email"
            placeholder="your@email.com"
            helperText="We'll never share your email"
          />
          <Input
            label="Website"
            prefix="https://"
            placeholder="example.com"
          />
          <Input
            label="Username"
            error
            errorMessage="This username is taken"
            defaultValue="john"
          />
        </Grid>
        <TextArea
          label="Description"
          placeholder="Enter a detailed description..."
          helperText="Maximum 500 characters"
          rows={4}
        />
      </Section>

      <Section>
        <SectionTitle>Cards</SectionTitle>
        <Grid>
          <Card>
            <CardHeader>
              <CardTitle>Standard Card</CardTitle>
              <CardDescription>This is a standard card example</CardDescription>
            </CardHeader>
            <CardContent>
              <p>
                Cards are great for organizing content into logical groups and
                sections.
              </p>
            </CardContent>
            <CardFooter>
              <Button variant="ghost">Cancel</Button>
              <Button>Save</Button>
            </CardFooter>
          </Card>

          <Card variant="elevated" hoverable>
            <CardHeader>
              <CardTitle>Elevated Card</CardTitle>
            </CardHeader>
            <CardContent>
              <p>This card has elevation and hover effects.</p>
            </CardContent>
          </Card>

          <Card variant="outlined">
            <CardHeader>
              <CardTitle>Outlined Card</CardTitle>
            </CardHeader>
            <CardContent>
              <p>This card uses an outlined variant.</p>
            </CardContent>
          </Card>
        </Grid>
      </Section>

      <Section>
        <SectionTitle>Data Table</SectionTitle>
        <DataTable
          data={sampleProducts}
          columns={columns}
          enablePagination={false}
          enableSorting={true}
        />
      </Section>
    </Container>
  )
}
