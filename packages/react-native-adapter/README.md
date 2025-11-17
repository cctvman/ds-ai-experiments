# @ds/react-native-adapter

React Native adapter for the Design System. This package provides utilities to use design tokens in React Native applications.

## 📦 Installation

```bash
npm install @ds/react-native-adapter
# or
yarn add @ds/react-native-adapter
# or
pnpm add @ds/react-native-adapter
```

## 🚀 Usage

### Basic Usage

```tsx
import { theme } from '@ds/react-native-adapter'
import { View, Text, StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  container: {
    padding: theme.spacing[4],
    backgroundColor: theme.colors.neutral[0],
    borderRadius: theme.borderRadius.lg,
  },
  text: {
    fontSize: theme.fontSizes[16],
    fontWeight: theme.fontWeights.medium,
    color: theme.colors.brand[500],
  },
})

function MyComponent() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Hello, Design System!</Text>
    </View>
  )
}
```

### Using Raw Tokens

```tsx
import { tokens } from '@ds/react-native-adapter'

const styles = StyleSheet.create({
  button: {
    backgroundColor: tokens.color.brand[500],
    paddingHorizontal: parseFloat(tokens.space[4]),
    paddingVertical: parseFloat(tokens.space[3]),
  },
})
```

## 🎨 Available Tokens

### Colors

- `theme.colors.brand[50-900]` - Brand colors
- `theme.colors.neutral[0-950]` - Neutral/grayscale colors

### Spacing

- `theme.spacing[1-24]` - Spacing values in pixels
  - Example: `theme.spacing[4]` = 16

### Border Radius

- `theme.borderRadius.sm` = 4
- `theme.borderRadius.md` = 6
- `theme.borderRadius.lg` = 8
- `theme.borderRadius.xl` = 12
- `theme.borderRadius['2xl']` = 16
- `theme.borderRadius.full` = 9999

### Typography

- `theme.fontSizes[12-48]` - Font sizes
- `theme.fontWeights` - Font weights (regular, medium, semibold, bold)

## 🔧 Helper Functions

### parseSpacing

Converts CSS spacing values to React Native pixels:

```tsx
import { parseSpacing } from '@ds/react-native-adapter'

const padding = parseSpacing('1rem') // 16
const margin = parseSpacing('24px') // 24
```

### parseBorderRadius

Converts CSS border radius to React Native values:

```tsx
import { parseBorderRadius } from '@ds/react-native-adapter'

const radius = parseBorderRadius('0.5rem') // 8
```

## 🏗️ Architecture

This adapter maps web design tokens to React Native equivalents:

1. **Color tokens**: Directly mapped (hex values work in both)
2. **Spacing tokens**: Converted from rem to pixels (16px = 1rem)
3. **Border radius**: Converted from rem to pixels
4. **Typography**: Font sizes in pixels, font weights as strings

## 📱 Platform Considerations

- React Native doesn't support CSS variables, so tokens are JavaScript objects
- Spacing uses pixel values instead of rem
- Shadows need platform-specific implementations (use `elevation` on Android, `shadowColor`/`shadowOffset` on iOS)
- Some CSS features (like gradients) require additional libraries

## 🎯 Component Mapping

When building React Native components based on the web design system:

| Web Component | React Native Alternative          |
| ------------- | --------------------------------- |
| Button        | Pressable + Text                  |
| Input         | TextInput                         |
| Card          | View with styling                 |
| Modal         | Modal from react-native           |
| Select        | Picker or custom dropdown         |
| Table         | FlatList/SectionList              |

## 📚 Examples

### Button Component

```tsx
import { Pressable, Text, StyleSheet } from 'react-native'
import { theme } from '@ds/react-native-adapter'

function Button({ children, onPress, variant = 'primary' }) {
  const backgroundColor =
    variant === 'primary'
      ? theme.colors.brand[500]
      : theme.colors.neutral[100]

  const textColor =
    variant === 'primary'
      ? theme.colors.neutral[0]
      : theme.colors.neutral[900]

  return (
    <Pressable
      onPress={onPress}
      style={[
        styles.button,
        {
          backgroundColor,
        },
      ]}
    >
      <Text style={[styles.text, { color: textColor }]}>{children}</Text>
    </Pressable>
  )
}

const styles = StyleSheet.create({
  button: {
    paddingHorizontal: theme.spacing[4],
    paddingVertical: theme.spacing[3],
    borderRadius: theme.borderRadius.md,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: theme.fontSizes[16],
    fontWeight: theme.fontWeights.medium,
  },
})
```

## 🔄 Keeping in Sync

This adapter automatically stays in sync with the design tokens. When you rebuild the `@ds/tokens` package, the React Native tokens are regenerated.

To rebuild tokens:

```bash
pnpm --filter @ds/tokens build
```

## 🤝 Contributing

When adding new tokens, ensure they're compatible with React Native:

1. Add tokens to the web token files
2. Rebuild tokens (`pnpm build:tokens`)
3. Update the adapter theme object if needed
4. Test on both iOS and Android

## 📖 Further Reading

- [React Native Styling](https://reactnative.dev/docs/style)
- [Design Tokens for React Native](https://bradfrost.com/blog/post/design-tokens/)
