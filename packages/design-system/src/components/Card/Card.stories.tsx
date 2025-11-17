import type { Meta, StoryObj } from '@storybook/react'
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from './index'
import { Button } from '../Button'

const meta: Meta<typeof Card> = {
  title: 'Components/Card',
  component: Card,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof Card>

export const Default: Story = {
  render: () => (
    <Card>
      <CardHeader>
        <CardTitle>Card Title</CardTitle>
        <CardDescription>Card description goes here</CardDescription>
      </CardHeader>
      <CardContent>
        <p>
          This is the main content of the card. It can contain any elements you
          need.
        </p>
      </CardContent>
      <CardFooter>
        <Button variant="ghost">Cancel</Button>
        <Button>Confirm</Button>
      </CardFooter>
    </Card>
  ),
}

export const Elevated: Story = {
  render: () => (
    <Card variant="elevated">
      <CardHeader>
        <CardTitle>Elevated Card</CardTitle>
      </CardHeader>
      <CardContent>This card has a shadow elevation.</CardContent>
    </Card>
  ),
}

export const Hoverable: Story = {
  render: () => (
    <Card hoverable>
      <CardHeader>
        <CardTitle>Hoverable Card</CardTitle>
      </CardHeader>
      <CardContent>Hover over this card to see the effect.</CardContent>
    </Card>
  ),
}

export const ProductCard: Story = {
  render: () => (
    <div style={{ maxWidth: '320px' }}>
      <Card hoverable>
        <div
          style={{
            width: '100%',
            height: '200px',
            backgroundColor: '#e5e5e5',
            borderRadius: '8px',
            marginBottom: '1rem',
          }}
        />
        <CardHeader>
          <CardTitle>Product Name</CardTitle>
          <CardDescription>$99.99</CardDescription>
        </CardHeader>
        <CardContent>
          <p style={{ fontSize: '14px', color: '#737373' }}>
            High-quality product with amazing features and benefits.
          </p>
        </CardContent>
        <CardFooter>
          <Button fullWidth>Add to Cart</Button>
        </CardFooter>
      </Card>
    </div>
  ),
}
