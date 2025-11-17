# Design System Monorepo

A comprehensive B2B Design System built with Next.js, TypeScript, and Stitches. This monorepo includes design tokens, React components, Storybook documentation, and a React Native adapter.

## 🏗️ Project Structure

```
monorepo/
├── apps/
│   └── web/                    # Next.js demo application
├── packages/
│   ├── design-system/          # React component library
│   ├── tokens/                 # Design tokens (Style Dictionary)
│   └── react-native-adapter/   # React Native adapter
├── .github/
│   └── workflows/              # CI/CD workflows
└── pnpm-workspace.yaml         # pnpm workspace configuration
```

## 🚀 Quick Start

### Prerequisites

- Node.js >= 18.0.0
- pnpm >= 8.0.0

### Installation

```bash
# Install pnpm if you haven't already
npm install -g pnpm

# Install dependencies
pnpm install

# Build design tokens
pnpm build:tokens

# Start development
pnpm dev
```

This will start:
- Next.js app on http://localhost:3000
- Storybook on http://localhost:6006

## 📦 Packages

### @ds/tokens

Design tokens built with Style Dictionary. Exports tokens as:
- CSS variables
- JavaScript/TypeScript modules
- React Native objects
- Figma-compatible JSON

```bash
cd packages/tokens
pnpm build
```

**Key Features:**
- Core tokens (colors, typography, spacing, etc.)
- Light and dark theme support
- Semantic token aliases
- Multi-platform output

### @ds/design-system

React component library built with Stitches.

```bash
cd packages/design-system
pnpm dev          # Start Storybook
pnpm build        # Build library
pnpm test         # Run tests
```

**Components:**
- ✅ Button (variants, sizes, loading state)
- ✅ Input (prefix/suffix, validation)
- ✅ TextArea
- ✅ NumberInput (with formatting)
- ✅ Card (variants, hoverable)
- ✅ DataTable (sorting, pagination, virtualization)
- And more...

**Why Stitches?**
- Near-zero runtime overhead
- Excellent TypeScript support
- Variant API perfect for design systems
- Better performance than emotion/styled-components
- Smaller bundle size
- CSS variables support for theming

### @ds/react-native-adapter

Adapter for using design tokens in React Native.

```bash
cd packages/react-native-adapter
pnpm build
```

### apps/web

Next.js 14 application demonstrating the design system.

```bash
cd apps/web
pnpm dev
```

Visit:
- `/` - Landing page
- `/ds` - Design system showcase

## 🛠️ Development Scripts

### Root Level

```bash
pnpm dev              # Run web app + Storybook
pnpm build            # Build all packages
pnpm build:tokens     # Build design tokens
pnpm build:storybook  # Build Storybook static site
pnpm test             # Run all tests
pnpm lint             # Lint all packages
pnpm format           # Format code with Prettier
pnpm typecheck        # Type check all packages
pnpm clean            # Clean all build artifacts
```

### Package Level

```bash
pnpm --filter @ds/design-system dev
pnpm --filter web build
```

## 🎨 Design Tokens

Tokens are organized into:

1. **Core tokens**: Primitive values (colors, spacing, typography)
2. **Theme tokens**: Semantic tokens for light/dark themes
3. **Alias tokens**: Semantic shortcuts for common use cases

### Using Tokens

**In React/Next.js:**

```tsx
import { styled } from '@ds/design-system'

const Button = styled('button', {
  backgroundColor: '$actionPrimary',
  padding: '$4',
  borderRadius: '$md',
})
```

**In CSS:**

```css
@import '@ds/tokens/css';

.button {
  background-color: var(--color-brand-500);
  padding: var(--space-4);
}
```

**In React Native:**

```tsx
import { theme } from '@ds/react-native-adapter'

const styles = StyleSheet.create({
  button: {
    backgroundColor: theme.colors.brand[500],
    padding: theme.spacing[4],
  },
})
```

## 📚 Storybook

Storybook provides interactive documentation for all components.

```bash
pnpm dev:storybook
```

Features:
- Component playground with controls
- Accessibility testing (a11y addon)
- Dark/light theme toggle
- Design foundations documentation
- Responsive viewport testing

## ♿ Accessibility

This design system prioritizes accessibility:

- **WCAG AA compliance**: Color contrast ratios meet minimum standards
- **Keyboard navigation**: All components are keyboard accessible
- **ARIA attributes**: Proper semantic HTML and ARIA labels
- **Focus management**: Visible focus indicators
- **Screen reader support**: Descriptive labels and roles

### Accessibility Checklist

- [ ] All interactive elements are keyboard accessible
- [ ] Focus states are clearly visible
- [ ] Color contrast meets WCAG AA (4.5:1 for normal text)
- [ ] Form inputs have associated labels
- [ ] Error messages are announced to screen readers
- [ ] Images have alt text
- [ ] Semantic HTML is used throughout

## 🧪 Testing

```bash
# Run all tests
pnpm test

# Run tests in watch mode
pnpm --filter @ds/design-system test:watch

# Run tests with coverage
pnpm --filter @ds/design-system test --coverage
```

Tests use:
- Vitest for unit testing
- Testing Library for React component testing
- User Event for interaction testing

## 🔧 CI/CD

GitHub Actions workflow runs on every push and PR:

1. **Lint**: ESLint checks
2. **Type Check**: TypeScript validation
3. **Test**: Unit and integration tests
4. **Build**: Build all packages
5. **Storybook**: Build static Storybook

## 📖 Contributing

See [CONTRIBUTING.md](./CONTRIBUTING.md) for development guidelines.

### Adding a New Component

1. Create component directory in `packages/design-system/src/components/`
2. Create `index.tsx`, `ComponentName.stories.tsx`, and `ComponentName.test.tsx`
3. Export from `packages/design-system/src/index.ts`
4. Add documentation and examples
5. Ensure accessibility compliance

### Adding New Tokens

1. Add tokens to appropriate JSON file in `packages/tokens/tokens/`
2. Run `pnpm build:tokens`
3. Update documentation
4. Test in both web and React Native contexts

## 🎯 Roadmap

### Components To Implement

- [ ] Select/ComboBox with keyboard navigation
- [ ] DatePicker with react-day-picker
- [ ] FileUploader with preview
- [ ] SearchBar with autocomplete
- [ ] Filters Panel
- [ ] Charts (recharts integration)
- [ ] Maps (react-leaflet or mapbox-gl)
- [ ] Modal/Dialog
- [ ] Tooltip
- [ ] Notifications/Toasts
- [ ] Forms with react-hook-form + zod
- [ ] Chat/Messages component

### Features To Add

- [ ] Theme switcher component
- [ ] Advanced table features (filtering, column resize)
- [ ] Virtualized components for large lists
- [ ] Animation utilities
- [ ] Responsive utilities
- [ ] Publish packages to npm
- [ ] Figma plugin for token sync

## 🔑 Environment Variables

For map components (optional):

```bash
# .env.local in apps/web
NEXT_PUBLIC_MAPBOX_TOKEN=your_token_here
```

## 📝 License

MIT License - see [LICENSE](./LICENSE) for details

## 🤝 Support

For issues and questions:
- Open an issue on GitHub
- Check existing documentation
- Review Storybook for component examples

## 📊 Package Dependencies

```mermaid
graph TD
    A[apps/web] --> B[@ds/design-system]
    B --> C[@ds/tokens]
    D[@ds/react-native-adapter] --> C
```

## 🎓 Learning Resources

- [Stitches Documentation](https://stitches.dev/)
- [Style Dictionary](https://amzn.github.io/style-dictionary/)
- [Next.js 14](https://nextjs.org/docs)
- [Storybook](https://storybook.js.org/)
- [React Table](https://tanstack.com/table/v8)
- [WCAG Guidelines](https://www.w3.org/WAI/WCAG21/quickref/)

---

**Built with** ❤️ **using Next.js, TypeScript, and Stitches**
