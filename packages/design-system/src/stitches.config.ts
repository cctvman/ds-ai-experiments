import { createStitches } from '@stitches/react'

/**
 * Stitches configuration for the design system
 *
 * Why Stitches?
 * - Type-safe CSS-in-JS with excellent TypeScript support
 * - Near-zero runtime (styles extracted at build time)
 * - Variants API perfect for component libraries
 * - Theme tokens with CSS variables support
 * - Better performance than emotion/styled-components
 * - Smaller bundle size
 */

export const {
  styled,
  css,
  globalCss,
  keyframes,
  getCssText,
  theme,
  createTheme,
  config,
} = createStitches({
  theme: {
    colors: {
      // Brand
      brand50: '#f0f9ff',
      brand100: '#e0f2fe',
      brand200: '#bae6fd',
      brand300: '#7dd3fc',
      brand400: '#38bdf8',
      brand500: '#0ea5e9',
      brand600: '#0284c7',
      brand700: '#0369a1',
      brand800: '#075985',
      brand900: '#0c4a6e',

      // Neutral
      neutral0: '#ffffff',
      neutral50: '#fafafa',
      neutral100: '#f5f5f5',
      neutral200: '#e5e5e5',
      neutral300: '#d4d4d4',
      neutral400: '#a3a3a3',
      neutral500: '#737373',
      neutral600: '#525252',
      neutral700: '#404040',
      neutral800: '#262626',
      neutral900: '#171717',
      neutral950: '#0a0a0a',

      // Semantic
      success50: '#f0fdf4',
      success500: '#22c55e',
      success700: '#15803d',

      error50: '#fef2f2',
      error500: '#ef4444',
      error700: '#b91c1c',

      warning50: '#fffbeb',
      warning500: '#f59e0b',
      warning700: '#b45309',

      info50: '#eff6ff',
      info500: '#3b82f6',
      info700: '#1d4ed8',

      // Theme semantic
      bgPrimary: '$neutral0',
      bgSecondary: '$neutral50',
      bgTertiary: '$neutral100',

      textPrimary: '$neutral900',
      textSecondary: '$neutral600',
      textTertiary: '$neutral500',
      textInverse: '$neutral0',

      borderDefault: '$neutral200',
      borderHover: '$neutral300',
      borderFocus: '$brand500',

      actionPrimary: '$brand500',
      actionPrimaryHover: '$brand600',
      actionPrimaryActive: '$brand700',
    },
    space: {
      1: '0.25rem',
      2: '0.5rem',
      3: '0.75rem',
      4: '1rem',
      5: '1.25rem',
      6: '1.5rem',
      8: '2rem',
      10: '2.5rem',
      12: '3rem',
      16: '4rem',
      20: '5rem',
      24: '6rem',
    },
    fontSizes: {
      12: '0.75rem',
      14: '0.875rem',
      16: '1rem',
      18: '1.125rem',
      20: '1.25rem',
      24: '1.5rem',
      30: '1.875rem',
      36: '2.25rem',
      48: '3rem',
    },
    fonts: {
      sans: 'Inter, system-ui, -apple-system, sans-serif',
      mono: 'Fira Code, monospace',
    },
    fontWeights: {
      regular: '400',
      medium: '500',
      semibold: '600',
      bold: '700',
    },
    lineHeights: {
      tight: '1.25',
      normal: '1.5',
      relaxed: '1.75',
    },
    radii: {
      none: '0',
      sm: '0.25rem',
      md: '0.375rem',
      lg: '0.5rem',
      xl: '0.75rem',
      '2xl': '1rem',
      full: '9999px',
    },
    shadows: {
      sm: '0 1px 2px 0 rgb(0 0 0 / 0.05)',
      md: '0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)',
      lg: '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)',
      xl: '0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)',
      '2xl':
        '0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)',
    },
    transitions: {
      fast: '150ms',
      base: '200ms',
      slow: '300ms',
    },
    zIndices: {
      dropdown: '1000',
      sticky: '1100',
      fixed: '1200',
      overlay: '1300',
      modal: '1400',
      popover: '1500',
      toast: '1600',
    },
  },
  media: {
    sm: '(min-width: 640px)',
    md: '(min-width: 768px)',
    lg: '(min-width: 1024px)',
    xl: '(min-width: 1280px)',
    '2xl': '(min-width: 1536px)',
    motion: '(prefers-reduced-motion: no-preference)',
    dark: '(prefers-color-scheme: dark)',
  },
  utils: {
    // Padding
    p: (value: string | number) => ({
      padding: value,
    }),
    pt: (value: string | number) => ({
      paddingTop: value,
    }),
    pr: (value: string | number) => ({
      paddingRight: value,
    }),
    pb: (value: string | number) => ({
      paddingBottom: value,
    }),
    pl: (value: string | number) => ({
      paddingLeft: value,
    }),
    px: (value: string | number) => ({
      paddingLeft: value,
      paddingRight: value,
    }),
    py: (value: string | number) => ({
      paddingTop: value,
      paddingBottom: value,
    }),

    // Margin
    m: (value: string | number) => ({
      margin: value,
    }),
    mt: (value: string | number) => ({
      marginTop: value,
    }),
    mr: (value: string | number) => ({
      marginRight: value,
    }),
    mb: (value: string | number) => ({
      marginBottom: value,
    }),
    ml: (value: string | number) => ({
      marginLeft: value,
    }),
    mx: (value: string | number) => ({
      marginLeft: value,
      marginRight: value,
    }),
    my: (value: string | number) => ({
      marginTop: value,
      marginBottom: value,
    }),

    // Size
    size: (value: string | number) => ({
      width: value,
      height: value,
    }),
  },
})

// Dark theme
export const darkTheme = createTheme('dark-theme', {
  colors: {
    bgPrimary: '$neutral950',
    bgSecondary: '$neutral900',
    bgTertiary: '$neutral800',

    textPrimary: '$neutral50',
    textSecondary: '$neutral400',
    textTertiary: '$neutral500',
    textInverse: '$neutral900',

    borderDefault: '$neutral700',
    borderHover: '$neutral600',
    borderFocus: '$brand400',

    actionPrimary: '$brand400',
    actionPrimaryHover: '$brand500',
    actionPrimaryActive: '$brand600',
  },
})

// Global styles
export const globalStyles = globalCss({
  '*': {
    margin: 0,
    padding: 0,
    boxSizing: 'border-box',
  },
  body: {
    fontFamily: '$sans',
    color: '$textPrimary',
    backgroundColor: '$bgPrimary',
    lineHeight: '$normal',
    fontSize: '$16',
    WebkitFontSmoothing: 'antialiased',
    MozOsxFontSmoothing: 'grayscale',
  },
  'h1, h2, h3, h4, h5, h6': {
    fontWeight: '$semibold',
    lineHeight: '$tight',
  },
})
