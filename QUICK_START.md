# Quick Start Guide

Get up and running with the Design System in 5 minutes.

## Prerequisites

Ensure you have the following installed:

```bash
node --version   # Should be >= 18.0.0
pnpm --version   # Should be >= 8.0.0
```

If you don't have pnpm:

```bash
npm install -g pnpm
```

## Installation

```bash
# Install dependencies
pnpm install

# Build design tokens
pnpm build:tokens
```

## Running the Project

### Option 1: Run Everything

```bash
pnpm dev
```

This starts:
- Next.js app at http://localhost:3000
- Storybook at http://localhost:6006

### Option 2: Run Individually

```bash
# Run Next.js app only
pnpm dev:web

# Run Storybook only
pnpm dev:storybook
```

## Project Structure

```
monorepo/
├── apps/web/              → Next.js demo at localhost:3000
├── packages/
│   ├── design-system/     → Component library + Storybook
│   ├── tokens/            → Design tokens
│   └── react-native-adapter/  → RN adapter
```

## First Steps

### 1. View the Demo App

Open http://localhost:3000 and click "View Design System"

### 2. Explore Storybook

Open http://localhost:6006 to see:
- Component documentation
- Interactive playground
- Design foundations
- Accessibility reports

### 3. Try Building

```bash
# Build everything
pnpm build

# Build specific package
pnpm --filter @ds/design-system build
```

### 4. Run Tests

```bash
# Run all tests
pnpm test

# Watch mode
pnpm --filter @ds/design-system test:watch
```

## Using Components in Your App

### 1. Install the Design System

In your app's `package.json`:

```json
{
  "dependencies": {
    "@ds/design-system": "workspace:*"
  }
}
```

### 2. Import and Use

```tsx
import { Button, Input, Card } from '@ds/design-system'

export default function MyPage() {
  return (
    <Card>
      <Input label="Email" type="email" />
      <Button variant="primary">Submit</Button>
    </Card>
  )
}
```

### 3. Setup Theme

In your app's root layout:

```tsx
import { getCssText, globalStyles } from '@ds/design-system'

globalStyles()

export default function RootLayout({ children }) {
  return (
    <html>
      <head>
        <style id="stitches" dangerouslySetInnerHTML={{ __html: getCssText() }} />
      </head>
      <body>{children}</body>
    </html>
  )
}
```

## Common Tasks

### Add a New Component

```bash
# Create component folder
mkdir -p packages/design-system/src/components/MyComponent

# Create files
touch packages/design-system/src/components/MyComponent/index.tsx
touch packages/design-system/src/components/MyComponent/MyComponent.test.tsx
touch packages/design-system/src/components/MyComponent/MyComponent.stories.tsx
```

See [CONTRIBUTING.md](./CONTRIBUTING.md) for templates.

### Add New Tokens

1. Edit `packages/tokens/tokens/*.json`
2. Run `pnpm build:tokens`
3. Tokens are now available in all packages

### Update Documentation

- Component docs: Update `.stories.tsx` files
- General docs: Update `README.md` or add to `.storybook/`
- Foundations: Edit `.storybook/Foundations.mdx`

## Troubleshooting

### Port Already in Use

```bash
# Kill process on port 3000
lsof -ti:3000 | xargs kill

# Kill process on port 6006
lsof -ti:6006 | xargs kill
```

### TypeScript Errors

```bash
# Clean and rebuild
pnpm clean
pnpm build:tokens
pnpm build
```

### Storybook Not Loading

```bash
# Clear Storybook cache
rm -rf packages/design-system/node_modules/.cache
pnpm dev:storybook
```

### Dependency Issues

```bash
# Clear all dependencies
pnpm clean
rm -rf node_modules
rm pnpm-lock.yaml

# Reinstall
pnpm install
pnpm build:tokens
```

## Next Steps

1. Read the full [README.md](./README.md)
2. Check out [CONTRIBUTING.md](./CONTRIBUTING.md)
3. Explore components in Storybook
4. Review accessibility guidelines
5. Start building!

## Helpful Commands

```bash
# Development
pnpm dev                  # Run everything
pnpm dev:web             # Next.js only
pnpm dev:storybook       # Storybook only

# Building
pnpm build               # Build all packages
pnpm build:tokens        # Build tokens only
pnpm build:storybook     # Build Storybook static

# Testing
pnpm test                # Run tests
pnpm lint                # Lint code
pnpm typecheck           # Type check
pnpm format              # Format code

# Cleaning
pnpm clean               # Clean build artifacts
```

## Resources

- [Stitches Docs](https://stitches.dev/)
- [Storybook Docs](https://storybook.js.org/)
- [Next.js Docs](https://nextjs.org/docs)
- [TanStack Table](https://tanstack.com/table/v8)

## Getting Help

- Check [existing documentation](./README.md)
- Search [closed issues](../../issues?q=is%3Aissue+is%3Aclosed)
- Review Storybook examples
- Open a new issue

Happy coding! 🎉
