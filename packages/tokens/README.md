# @ds/tokens

Design tokens for the Design System, built with Style Dictionary.

## 📦 Installation

```bash
pnpm add @ds/tokens
```

## 🚀 Usage

### CSS Variables

```css
@import '@ds/tokens/css';

.my-component {
  color: var(--color-brand-500);
  padding: var(--space-4);
  border-radius: var(--radius-md);
}
```

### JavaScript/TypeScript

```typescript
import { tokens } from '@ds/tokens'

const styles = {
  color: tokens['color.brand.500'],
  padding: tokens['space.4'],
}
```

### React Native

```javascript
import tokens from '@ds/tokens/react-native'

const styles = StyleSheet.create({
  container: {
    backgroundColor: tokens.color.brand[500],
    padding: parseInt(tokens.space[4]),
  },
})
```

## 🏗️ Structure

- **core.json**: Base tokens (colors, typography, spacing, etc.)
- **theme.light.json**: Light theme semantic tokens
- **theme.dark.json**: Dark theme semantic tokens
- **aliases.json**: Semantic aliases for common use cases

## 🔧 Building

```bash
pnpm build
```

This generates:
- CSS variables
- JavaScript/TypeScript modules
- React Native tokens
- Figma-compatible export

## 📊 Token Categories

- `color.*`: Brand, neutral, semantic colors
- `font.*`: Family, size, weight, line-height
- `space.*`: Spacing scale
- `radius.*`: Border radius values
- `elevation.*`: Box shadows
- `transition.*`: Duration values
- `zIndex.*`: Layer ordering
