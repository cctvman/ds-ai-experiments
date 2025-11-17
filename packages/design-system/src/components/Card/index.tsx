import React from 'react'
import { styled } from '../../stitches.config'
import type { VariantProps } from '@stitches/react'

export const Card = styled('div', {
  backgroundColor: '$bgPrimary',
  border: '1px solid $borderDefault',
  borderRadius: '$lg',
  padding: '$6',
  boxShadow: '$sm',
  transition: 'all $base ease-in-out',

  variants: {
    hoverable: {
      true: {
        cursor: 'pointer',
        '&:hover': {
          boxShadow: '$md',
          transform: 'translateY(-2px)',
        },
      },
    },
    variant: {
      default: {
        border: '1px solid $borderDefault',
      },
      elevated: {
        border: 'none',
        boxShadow: '$lg',
      },
      outlined: {
        border: '2px solid $borderDefault',
        boxShadow: 'none',
      },
    },
  },

  defaultVariants: {
    variant: 'default',
  },
})

export const CardHeader = styled('div', {
  marginBottom: '$4',
  paddingBottom: '$4',
  borderBottom: '1px solid $borderDefault',
})

export const CardTitle = styled('h3', {
  fontSize: '$20',
  fontWeight: '$semibold',
  color: '$textPrimary',
  margin: 0,
})

export const CardDescription = styled('p', {
  fontSize: '$14',
  color: '$textSecondary',
  marginTop: '$2',
})

export const CardContent = styled('div', {
  fontSize: '$16',
  color: '$textPrimary',
})

export const CardFooter = styled('div', {
  marginTop: '$4',
  paddingTop: '$4',
  borderTop: '1px solid $borderDefault',
  display: 'flex',
  gap: '$3',
  justifyContent: 'flex-end',
})

export type CardProps = React.HTMLAttributes<HTMLDivElement> &
  VariantProps<typeof Card>
