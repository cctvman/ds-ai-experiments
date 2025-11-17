# Contributing Guide

Thank you for considering contributing to our Design System! This guide will help you get started.

## 🚀 Getting Started

### Prerequisites

- Node.js >= 18.0.0
- pnpm >= 8.0.0
- Git

### Setup

1. Fork the repository
2. Clone your fork:
   ```bash
   git clone https://github.com/your-username/design-system-monorepo.git
   cd design-system-monorepo
   ```

3. Install dependencies:
   ```bash
   pnpm install
   ```

4. Build tokens:
   ```bash
   pnpm build:tokens
   ```

5. Start development:
   ```bash
   pnpm dev
   ```

## 📁 Project Structure

Understanding the monorepo structure:

```
├── apps/web                   # Next.js demo app
├── packages/
│   ├── design-system/         # Component library
│   │   ├── src/
│   │   │   ├── components/    # Components
│   │   │   ├── stitches.config.ts
│   │   │   └── index.ts
│   │   └── .storybook/        # Storybook config
│   ├── tokens/                # Design tokens
│   └── react-native-adapter/  # RN adapter
```

## 🎨 Adding a New Component

### 1. Create Component Files

```bash
packages/design-system/src/components/MyComponent/
├── index.tsx                 # Component implementation
├── MyComponent.test.tsx      # Unit tests
└── MyComponent.stories.tsx   # Storybook stories
```

### 2. Component Template

```tsx
// index.tsx
import React from 'react'
import { styled } from '../../stitches.config'
import type { VariantProps } from '@stitches/react'

const StyledMyComponent = styled('div', {
  // Base styles
  padding: '$4',
  borderRadius: '$md',

  variants: {
    variant: {
      default: {
        backgroundColor: '$bgPrimary',
      },
      highlighted: {
        backgroundColor: '$brand500',
      },
    },
    size: {
      sm: { fontSize: '$14' },
      md: { fontSize: '$16' },
      lg: { fontSize: '$18' },
    },
  },

  defaultVariants: {
    variant: 'default',
    size: 'md',
  },
})

export interface MyComponentProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof StyledMyComponent> {
  children: React.ReactNode
}

export const MyComponent = React.forwardRef<HTMLDivElement, MyComponentProps>(
  ({ children, ...props }, ref) => {
    return (
      <StyledMyComponent ref={ref} {...props}>
        {children}
      </StyledMyComponent>
    )
  }
)

MyComponent.displayName = 'MyComponent'
```

### 3. Add Tests

```tsx
// MyComponent.test.tsx
import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { MyComponent } from './index'

describe('MyComponent', () => {
  it('renders correctly', () => {
    render(<MyComponent>Hello</MyComponent>)
    expect(screen.getByText('Hello')).toBeInTheDocument()
  })

  it('applies variant styles', () => {
    const { container } = render(
      <MyComponent variant="highlighted">Test</MyComponent>
    )
    // Add specific style assertions
  })
})
```

### 4. Add Storybook Stories

```tsx
// MyComponent.stories.tsx
import type { Meta, StoryObj } from '@storybook/react'
import { MyComponent } from './index'

const meta: Meta<typeof MyComponent> = {
  title: 'Components/MyComponent',
  component: MyComponent,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'highlighted'],
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
    },
  },
}

export default meta
type Story = StoryObj<typeof MyComponent>

export const Default: Story = {
  args: {
    children: 'My Component',
  },
}

export const Highlighted: Story = {
  args: {
    variant: 'highlighted',
    children: 'Highlighted',
  },
}
```

### 5. Export Component

Add to `packages/design-system/src/index.ts`:

```tsx
export * from './components/MyComponent'
```

## 🎨 Design Token Guidelines

### Adding New Tokens

1. Edit appropriate JSON file in `packages/tokens/tokens/`:
   - `core.json` - Primitive values
   - `theme.light.json` - Light theme semantics
   - `theme.dark.json` - Dark theme semantics
   - `aliases.json` - Semantic aliases

2. Follow naming convention:
   ```json
   {
     "category": {
       "subcategory": {
         "variant": { "value": "..." }
       }
     }
   }
   ```

3. Rebuild tokens:
   ```bash
   pnpm build:tokens
   ```

4. Update documentation

### Token Categories

- **color**: Color palette and semantics
- **font**: Typography (family, size, weight, line-height)
- **space**: Spacing scale
- **radius**: Border radius values
- **elevation**: Box shadows
- **transition**: Animation durations
- **zIndex**: Layer ordering

## ♿ Accessibility Requirements

All components must meet WCAG AA standards:

### Checklist

- [ ] Keyboard navigation supported
- [ ] Focus states visible and clear
- [ ] Color contrast meets 4.5:1 (normal text)
- [ ] Color contrast meets 3:1 (large text, UI components)
- [ ] Semantic HTML elements used
- [ ] ARIA attributes where necessary
- [ ] Form inputs have associated labels
- [ ] Error messages are descriptive
- [ ] Interactive elements have appropriate roles

### Testing Accessibility

```bash
# Storybook has a11y addon enabled
pnpm dev:storybook
# Check the "Accessibility" tab for each component
```

Use these tools:
- Storybook a11y addon
- axe DevTools browser extension
- Keyboard-only navigation testing
- Screen reader testing (NVDA, JAWS, VoiceOver)

## 🧪 Testing Guidelines

### Unit Tests

- Test component rendering
- Test prop variations
- Test user interactions
- Test accessibility attributes
- Test error states

### Running Tests

```bash
# Run all tests
pnpm test

# Run tests for specific package
pnpm --filter @ds/design-system test

# Watch mode
pnpm --filter @ds/design-system test:watch

# Coverage
pnpm --filter @ds/design-system test --coverage
```

### Writing Good Tests

```tsx
// Good ✅
it('disables button when loading prop is true', async () => {
  render(<Button loading>Click me</Button>)
  const button = screen.getByRole('button')

  expect(button).toHaveAttribute('aria-busy', 'true')
  expect(button).toBeDisabled()
})

// Avoid ❌
it('works', () => {
  render(<Button>Click</Button>)
  expect(true).toBe(true)
})
```

## 📝 Code Style

### TypeScript

- Use strict mode
- Prefer interfaces over types for public APIs
- Export types alongside components
- Use meaningful names

### React

- Use functional components
- Use React.forwardRef for components that need refs
- Prefer composition over inheritance
- Keep components focused and single-purpose

### Styling with Stitches

```tsx
// Good ✅
const Button = styled('button', {
  // Base styles
  padding: '$4',
  borderRadius: '$md',

  variants: {
    variant: {
      primary: { backgroundColor: '$brand500' },
      secondary: { backgroundColor: '$neutral200' },
    },
  },
})

// Avoid inline styles ❌
<button style={{ padding: '16px' }}>Click</button>
```

## 🔄 Git Workflow

### Branches

- `main` - Production-ready code
- `develop` - Development branch
- `feature/component-name` - Feature branches
- `fix/issue-description` - Bug fixes

### Commit Messages

Follow conventional commits:

```
type(scope): subject

body (optional)

footer (optional)
```

Types:
- `feat`: New feature
- `fix`: Bug fix
- `docs`: Documentation
- `style`: Formatting, missing semi-colons, etc.
- `refactor`: Code refactoring
- `test`: Adding tests
- `chore`: Maintenance

Examples:
```
feat(Button): add loading state
fix(Input): correct focus ring color
docs(README): update installation steps
```

### Pull Request Process

1. Create a feature branch
2. Make your changes
3. Add/update tests
4. Add/update documentation
5. Run tests and linting:
   ```bash
   pnpm test
   pnpm lint
   pnpm typecheck
   ```
6. Commit changes
7. Push to your fork
8. Create a Pull Request

### PR Template

```markdown
## Description
Brief description of changes

## Type of Change
- [ ] Bug fix
- [ ] New feature
- [ ] Breaking change
- [ ] Documentation update

## Checklist
- [ ] Tests pass
- [ ] Linting passes
- [ ] TypeScript compiles
- [ ] Documentation updated
- [ ] Accessibility tested
- [ ] Storybook stories added/updated
```

## 📚 Documentation

### Component Documentation

Each component should have:

1. **Props documentation** (via TypeScript)
2. **Usage examples** (in Storybook)
3. **Accessibility notes**
4. **Do's and Don'ts**

### Storybook Stories

Create comprehensive stories:

```tsx
export const AllVariants: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '1rem' }}>
      <Button variant="primary">Primary</Button>
      <Button variant="secondary">Secondary</Button>
      <Button variant="ghost">Ghost</Button>
    </div>
  ),
}
```

## 🐛 Reporting Bugs

Use the issue template:

```markdown
**Describe the bug**
A clear description

**To Reproduce**
Steps to reproduce

**Expected behavior**
What should happen

**Screenshots**
If applicable

**Environment**
- OS:
- Browser:
- Version:
```

## 💡 Suggesting Features

Open an issue with:
- Clear description
- Use cases
- Proposed API (if applicable)
- Alternatives considered

## ❓ Questions?

- Check existing documentation
- Search closed issues
- Open a discussion on GitHub
- Review Storybook examples

## 📄 License

By contributing, you agree that your contributions will be licensed under the MIT License.

Thank you for contributing! 🎉
