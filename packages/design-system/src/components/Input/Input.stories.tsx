import type { Meta, StoryObj } from '@storybook/react'
import { Input, NumberInput, TextArea } from './index'

const meta: Meta<typeof Input> = {
  title: 'Components/Input',
  component: Input,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof Input>

export const Default: Story = {
  args: {
    placeholder: 'Enter text...',
  },
}

export const WithLabel: Story = {
  args: {
    label: 'Email',
    placeholder: 'your@email.com',
    type: 'email',
  },
}

export const WithPrefix: Story = {
  args: {
    label: 'Website',
    prefix: 'https://',
    placeholder: 'example.com',
  },
}

export const WithSuffix: Story = {
  args: {
    label: 'Domain',
    suffix: '.com',
    placeholder: 'yoursite',
  },
}

export const WithError: Story = {
  args: {
    label: 'Username',
    error: true,
    errorMessage: 'This username is already taken',
    defaultValue: 'john',
  },
}

export const WithHelperText: Story = {
  args: {
    label: 'Password',
    type: 'password',
    helperText: 'Must be at least 8 characters',
  },
}

export const Disabled: Story = {
  args: {
    label: 'Disabled Input',
    disabled: true,
    defaultValue: 'Cannot edit this',
  },
}

export const Sizes: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
      <Input size="sm" placeholder="Small input" />
      <Input size="md" placeholder="Medium input" />
      <Input size="lg" placeholder="Large input" />
    </div>
  ),
}

export const Number: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
      <NumberInput
        label="Quantity"
        type="number"
        defaultValue={1}
        min={0}
        max={100}
      />
      <NumberInput
        label="Price"
        type="number"
        format="currency"
        defaultValue={99.99}
      />
      <NumberInput
        label="Discount"
        type="number"
        format="percentage"
        defaultValue={15}
        suffix="%"
      />
    </div>
  ),
}

export const TextAreaExample: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
      <TextArea
        label="Description"
        placeholder="Enter a description..."
        helperText="Maximum 500 characters"
      />
      <TextArea
        label="Comments"
        error
        errorMessage="This field is required"
        rows={4}
      />
    </div>
  ),
}
