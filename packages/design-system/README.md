# @ds/design-system

A comprehensive React component library built with Stitches and TypeScript for B2B applications.

## Installation

```bash
npm install @ds/design-system
# or
pnpm add @ds/design-system
```

## Usage

```tsx
import { Button, Input, Card } from '@ds/design-system'

function App() {
  return (
    <Card>
      <Input label="Email" type="email" placeholder="your@email.com" />
      <Button variant="primary">Submit</Button>
    </Card>
  )
}
```

## Components

### Button

Versatile button component with multiple variants and states.

```tsx
<Button variant="primary" size="md">
  Click me
</Button>

<Button variant="secondary" loading>
  Loading...
</Button>

<Button variant="destructive" disabled>
  Delete
</Button>
```

**Props:**
- `variant`: primary | secondary | ghost | destructive
- `size`: sm | md | lg
- `loading`: boolean
- `fullWidth`: boolean

### Input

Text input with label, validation, and prefix/suffix support.

```tsx
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
  label="Price"
  suffix="USD"
  error
  errorMessage="Invalid price"
/>
```

**Props:**
- `label`: string
- `error`: boolean
- `errorMessage`: string
- `helperText`: string
- `prefix`: ReactNode
- `suffix`: ReactNode
- `size`: sm | md | lg

### NumberInput

Number input with formatting options.

```tsx
<NumberInput
  label="Price"
  format="currency"
  defaultValue={99.99}
/>

<NumberInput
  label="Discount"
  format="percentage"
  suffix="%"
/>
```

### TextArea

Multi-line text input.

```tsx
<TextArea
  label="Description"
  placeholder="Enter description..."
  helperText="Maximum 500 characters"
  rows={4}
/>
```

### Card

Container component for grouping content.

```tsx
<Card variant="elevated" hoverable>
  <CardHeader>
    <CardTitle>Title</CardTitle>
    <CardDescription>Description</CardDescription>
  </CardHeader>
  <CardContent>
    Content goes here
  </CardContent>
  <CardFooter>
    <Button>Action</Button>
  </CardFooter>
</Card>
```

**Variants:**
- `default`: Standard card with border
- `elevated`: Card with shadow
- `outlined`: Card with prominent border

### DataTable

Powerful table component with sorting, pagination, and virtualization.

```tsx
import { DataTable } from '@ds/design-system'
import { createColumnHelper } from '@tanstack/react-table'

const columnHelper = createColumnHelper<User>()

const columns = [
  columnHelper.accessor('name', {
    header: 'Name',
  }),
  columnHelper.accessor('email', {
    header: 'Email',
  }),
]

<DataTable
  data={users}
  columns={columns}
  enableSorting
  enablePagination
  pageSize={10}
/>
```

## Theming

### Using the Theme

```tsx
import { styled, theme, darkTheme } from '@ds/design-system'

const Container = styled('div', {
  backgroundColor: '$bgPrimary',
  color: '$textPrimary',
  padding: '$4',
})
```

### Dark Theme

```tsx
import { darkTheme } from '@ds/design-system'

function App() {
  return (
    <div className={darkTheme}>
      {/* Your app */}
    </div>
  )
}
```

## Styling with Stitches

### Why Stitches?

- **Near-zero runtime**: Styles are extracted at build time
- **Type-safe**: Full TypeScript support
- **Variants**: Perfect for component libraries
- **Performance**: Better than styled-components/emotion
- **Smaller bundle**: Optimized output

### Custom Components

```tsx
import { styled } from '@ds/design-system'

const CustomButton = styled('button', {
  // Base styles
  padding: '$4',
  borderRadius: '$md',
  fontSize: '$16',

  // Variants
  variants: {
    color: {
      primary: {
        backgroundColor: '$brand500',
        color: 'white',
      },
      secondary: {
        backgroundColor: '$neutral200',
        color: '$neutral900',
      },
    },
  },
})
```

### Using Utils

```tsx
const Box = styled('div', {
  px: '$4',    // padding-left & padding-right
  py: '$2',    // padding-top & padding-bottom
  m: '$4',     // margin
  size: '40px', // width & height
})
```

## Accessibility

All components are built with accessibility in mind:

- ✅ Keyboard navigation
- ✅ ARIA attributes
- ✅ Focus management
- ✅ Screen reader support
- ✅ WCAG AA color contrast

## TypeScript

Fully typed with TypeScript for excellent developer experience:

```tsx
import type { ButtonProps } from '@ds/design-system'

const MyButton: React.FC<ButtonProps> = (props) => {
  return <Button {...props} />
}
```

## Testing

Components include unit tests and can be tested with:

```tsx
import { render, screen } from '@testing-library/react'
import { Button } from '@ds/design-system'

test('button renders', () => {
  render(<Button>Click me</Button>)
  expect(screen.getByText('Click me')).toBeInTheDocument()
})
```

## Storybook

View interactive documentation:

```bash
pnpm storybook
```

## License

MIT
