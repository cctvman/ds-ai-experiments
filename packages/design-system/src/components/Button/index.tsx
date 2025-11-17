import React from 'react'
import { styled } from '../../stitches.config'
import type { VariantProps } from '@stitches/react'

const StyledButton = styled('button', {
  // Base styles
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '$2',
  fontFamily: '$sans',
  fontWeight: '$medium',
  border: 'none',
  cursor: 'pointer',
  transition: 'all $base ease-in-out',
  outline: 'none',
  textDecoration: 'none',
  userSelect: 'none',
  whiteSpace: 'nowrap',

  '&:focus-visible': {
    outline: '2px solid $borderFocus',
    outlineOffset: '2px',
  },

  '&:disabled': {
    opacity: 0.5,
    cursor: 'not-allowed',
    pointerEvents: 'none',
  },

  variants: {
    variant: {
      primary: {
        backgroundColor: '$actionPrimary',
        color: '$textInverse',
        '&:hover': {
          backgroundColor: '$actionPrimaryHover',
        },
        '&:active': {
          backgroundColor: '$actionPrimaryActive',
        },
      },
      secondary: {
        backgroundColor: 'transparent',
        color: '$actionPrimary',
        border: '1px solid $borderDefault',
        '&:hover': {
          backgroundColor: '$bgSecondary',
          borderColor: '$borderHover',
        },
        '&:active': {
          backgroundColor: '$bgTertiary',
        },
      },
      ghost: {
        backgroundColor: 'transparent',
        color: '$textPrimary',
        '&:hover': {
          backgroundColor: '$bgSecondary',
        },
        '&:active': {
          backgroundColor: '$bgTertiary',
        },
      },
      destructive: {
        backgroundColor: '$error500',
        color: '$textInverse',
        '&:hover': {
          backgroundColor: '$error700',
        },
      },
    },
    size: {
      sm: {
        fontSize: '$14',
        px: '$3',
        py: '$2',
        borderRadius: '$md',
        minHeight: '32px',
      },
      md: {
        fontSize: '$16',
        px: '$4',
        py: '$3',
        borderRadius: '$md',
        minHeight: '40px',
      },
      lg: {
        fontSize: '$18',
        px: '$6',
        py: '$4',
        borderRadius: '$lg',
        minHeight: '48px',
      },
    },
    fullWidth: {
      true: {
        width: '100%',
      },
    },
    loading: {
      true: {
        opacity: 0.7,
        cursor: 'wait',
      },
    },
  },

  defaultVariants: {
    variant: 'primary',
    size: 'md',
  },
})

const Spinner = styled('span', {
  display: 'inline-block',
  width: '1em',
  height: '1em',
  border: '2px solid currentColor',
  borderRightColor: 'transparent',
  borderRadius: '50%',
  animation: 'spin 0.6s linear infinite',

  '@keyframes spin': {
    '0%': { transform: 'rotate(0deg)' },
    '100%': { transform: 'rotate(360deg)' },
  },
})

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof StyledButton> {
  children: React.ReactNode
  loading?: boolean
  asChild?: boolean
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ children, loading, disabled, ...props }, ref) => {
    return (
      <StyledButton
        ref={ref}
        disabled={disabled || loading}
        loading={loading}
        aria-disabled={disabled || loading}
        aria-busy={loading}
        {...props}
      >
        {loading && <Spinner aria-label="Loading" />}
        {children}
      </StyledButton>
    )
  }
)

Button.displayName = 'Button'
