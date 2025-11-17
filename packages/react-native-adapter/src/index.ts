/**
 * React Native Adapter for Design System
 *
 * This package provides utilities to consume design tokens in React Native apps.
 * Since React Native doesn't support CSS variables, we use JavaScript objects.
 */

// Import tokens from the compiled React Native output
const tokens = require('@ds/tokens/react-native')

export { tokens }

// Example theme object for React Native
export const theme = {
  colors: {
    // Brand
    brand: {
      50: tokens.color?.brand?.[50] || '#f0f9ff',
      100: tokens.color?.brand?.[100] || '#e0f2fe',
      200: tokens.color?.brand?.[200] || '#bae6fd',
      300: tokens.color?.brand?.[300] || '#7dd3fc',
      400: tokens.color?.brand?.[400] || '#38bdf8',
      500: tokens.color?.brand?.[500] || '#0ea5e9',
      600: tokens.color?.brand?.[600] || '#0284c7',
      700: tokens.color?.brand?.[700] || '#0369a1',
      800: tokens.color?.brand?.[800] || '#075985',
      900: tokens.color?.brand?.[900] || '#0c4a6e',
    },
    // Neutral
    neutral: {
      0: tokens.color?.neutral?.[0] || '#ffffff',
      50: tokens.color?.neutral?.[50] || '#fafafa',
      100: tokens.color?.neutral?.[100] || '#f5f5f5',
      200: tokens.color?.neutral?.[200] || '#e5e5e5',
      300: tokens.color?.neutral?.[300] || '#d4d4d4',
      400: tokens.color?.neutral?.[400] || '#a3a3a3',
      500: tokens.color?.neutral?.[500] || '#737373',
      600: tokens.color?.neutral?.[600] || '#525252',
      700: tokens.color?.neutral?.[700] || '#404040',
      800: tokens.color?.neutral?.[800] || '#262626',
      900: tokens.color?.neutral?.[900] || '#171717',
      950: tokens.color?.neutral?.[950] || '#0a0a0a',
    },
  },
  spacing: {
    1: 4,
    2: 8,
    3: 12,
    4: 16,
    5: 20,
    6: 24,
    8: 32,
    10: 40,
    12: 48,
    16: 64,
    20: 80,
    24: 96,
  },
  borderRadius: {
    sm: 4,
    md: 6,
    lg: 8,
    xl: 12,
    '2xl': 16,
    full: 9999,
  },
  fontSizes: {
    12: 12,
    14: 14,
    16: 16,
    18: 18,
    20: 20,
    24: 24,
    30: 30,
    36: 36,
    48: 48,
  },
  fontWeights: {
    regular: '400',
    medium: '500',
    semibold: '600',
    bold: '700',
  },
}

// Helper functions
export const parseSpacing = (value: string): number => {
  // Convert rem to pixels (assuming 16px base)
  if (value.endsWith('rem')) {
    return parseFloat(value) * 16
  }
  // Already in pixels
  if (value.endsWith('px')) {
    return parseFloat(value)
  }
  return parseFloat(value)
}

export const parseBorderRadius = (value: string): number => {
  if (value === '9999px') return 9999
  return parseSpacing(value)
}
