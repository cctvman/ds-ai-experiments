import React from 'react'
import { styled } from '../../stitches.config'
import type { VariantProps } from '@stitches/react'

const InputWrapper = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: '$2',
  width: '100%',
})

const Label = styled('label', {
  fontSize: '$14',
  fontWeight: '$medium',
  color: '$textPrimary',
  cursor: 'pointer',

  variants: {
    disabled: {
      true: {
        opacity: 0.5,
        cursor: 'not-allowed',
      },
    },
  },
})

const InputContainer = styled('div', {
  position: 'relative',
  display: 'flex',
  alignItems: 'center',
  width: '100%',
})

const StyledInput = styled('input', {
  width: '100%',
  fontFamily: '$sans',
  fontSize: '$16',
  color: '$textPrimary',
  backgroundColor: '$bgPrimary',
  border: '1px solid $borderDefault',
  borderRadius: '$md',
  px: '$4',
  py: '$3',
  transition: 'all $base ease-in-out',
  outline: 'none',

  '&::placeholder': {
    color: '$textTertiary',
  },

  '&:hover:not(:disabled)': {
    borderColor: '$borderHover',
  },

  '&:focus': {
    borderColor: '$borderFocus',
    boxShadow: '0 0 0 3px rgba(14, 165, 233, 0.1)',
  },

  '&:disabled': {
    opacity: 0.5,
    cursor: 'not-allowed',
    backgroundColor: '$bgSecondary',
  },

  variants: {
    hasPrefix: {
      true: {
        pl: '$10',
      },
    },
    hasSuffix: {
      true: {
        pr: '$10',
      },
    },
    error: {
      true: {
        borderColor: '$error500',
        '&:focus': {
          borderColor: '$error500',
          boxShadow: '0 0 0 3px rgba(239, 68, 68, 0.1)',
        },
      },
    },
    size: {
      sm: {
        fontSize: '$14',
        px: '$3',
        py: '$2',
        minHeight: '32px',
      },
      md: {
        fontSize: '$16',
        px: '$4',
        py: '$3',
        minHeight: '40px',
      },
      lg: {
        fontSize: '$18',
        px: '$5',
        py: '$4',
        minHeight: '48px',
      },
    },
  },

  defaultVariants: {
    size: 'md',
  },
})

const Affix = styled('div', {
  position: 'absolute',
  display: 'flex',
  alignItems: 'center',
  color: '$textSecondary',
  pointerEvents: 'none',

  variants: {
    position: {
      prefix: {
        left: '$4',
      },
      suffix: {
        right: '$4',
      },
    },
  },
})

const ErrorMessage = styled('span', {
  fontSize: '$14',
  color: '$error500',
  marginTop: '$1',
})

const HelperText = styled('span', {
  fontSize: '$14',
  color: '$textSecondary',
  marginTop: '$1',
})

export interface InputProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size'>,
    VariantProps<typeof StyledInput> {
  label?: string
  error?: boolean
  errorMessage?: string
  helperText?: string
  prefix?: React.ReactNode
  suffix?: React.ReactNode
}

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  (
    {
      label,
      error,
      errorMessage,
      helperText,
      prefix,
      suffix,
      disabled,
      id,
      size,
      ...props
    },
    ref
  ) => {
    const inputId = id || React.useId()

    return (
      <InputWrapper>
        {label && (
          <Label htmlFor={inputId} disabled={disabled}>
            {label}
          </Label>
        )}
        <InputContainer>
          {prefix && <Affix position="prefix">{prefix}</Affix>}
          <StyledInput
            ref={ref}
            id={inputId}
            disabled={disabled}
            error={error}
            hasPrefix={!!prefix}
            hasSuffix={!!suffix}
            size={size}
            aria-invalid={error}
            aria-describedby={
              errorMessage
                ? `${inputId}-error`
                : helperText
                  ? `${inputId}-helper`
                  : undefined
            }
            {...props}
          />
          {suffix && <Affix position="suffix">{suffix}</Affix>}
        </InputContainer>
        {error && errorMessage && (
          <ErrorMessage id={`${inputId}-error`} role="alert">
            {errorMessage}
          </ErrorMessage>
        )}
        {!error && helperText && (
          <HelperText id={`${inputId}-helper`}>{helperText}</HelperText>
        )}
      </InputWrapper>
    )
  }
)

Input.displayName = 'Input'

// NumberInput with formatting
export interface NumberInputProps extends InputProps {
  min?: number
  max?: number
  step?: number
  format?: 'currency' | 'percentage' | 'decimal'
}

export const NumberInput = React.forwardRef<HTMLInputElement, NumberInputProps>(
  ({ format, ...props }, ref) => {
    const formatValue = (value: string) => {
      if (!value || !format) return value

      const number = parseFloat(value.replace(/[^0-9.-]/g, ''))
      if (isNaN(number)) return value

      switch (format) {
        case 'currency':
          return new Intl.NumberFormat('pt-BR', {
            style: 'currency',
            currency: 'BRL',
          }).format(number)
        case 'percentage':
          return `${number}%`
        case 'decimal':
          return number.toFixed(2)
        default:
          return value
      }
    }

    return <Input ref={ref} type="number" {...props} />
  }
)

NumberInput.displayName = 'NumberInput'

// TextArea
const StyledTextArea = styled('textarea', {
  width: '100%',
  fontFamily: '$sans',
  fontSize: '$16',
  color: '$textPrimary',
  backgroundColor: '$bgPrimary',
  border: '1px solid $borderDefault',
  borderRadius: '$md',
  px: '$4',
  py: '$3',
  transition: 'all $base ease-in-out',
  outline: 'none',
  resize: 'vertical',
  minHeight: '100px',

  '&::placeholder': {
    color: '$textTertiary',
  },

  '&:hover:not(:disabled)': {
    borderColor: '$borderHover',
  },

  '&:focus': {
    borderColor: '$borderFocus',
    boxShadow: '0 0 0 3px rgba(14, 165, 233, 0.1)',
  },

  '&:disabled': {
    opacity: 0.5,
    cursor: 'not-allowed',
    backgroundColor: '$bgSecondary',
  },

  variants: {
    error: {
      true: {
        borderColor: '$error500',
        '&:focus': {
          borderColor: '$error500',
          boxShadow: '0 0 0 3px rgba(239, 68, 68, 0.1)',
        },
      },
    },
  },
})

export interface TextAreaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string
  error?: boolean
  errorMessage?: string
  helperText?: string
}

export const TextArea = React.forwardRef<HTMLTextAreaElement, TextAreaProps>(
  ({ label, error, errorMessage, helperText, disabled, id, ...props }, ref) => {
    const textareaId = id || React.useId()

    return (
      <InputWrapper>
        {label && (
          <Label htmlFor={textareaId} disabled={disabled}>
            {label}
          </Label>
        )}
        <StyledTextArea
          ref={ref}
          id={textareaId}
          disabled={disabled}
          error={error}
          aria-invalid={error}
          aria-describedby={
            errorMessage
              ? `${textareaId}-error`
              : helperText
                ? `${textareaId}-helper`
                : undefined
          }
          {...props}
        />
        {error && errorMessage && (
          <ErrorMessage id={`${textareaId}-error`} role="alert">
            {errorMessage}
          </ErrorMessage>
        )}
        {!error && helperText && (
          <HelperText id={`${textareaId}-helper`}>{helperText}</HelperText>
        )}
      </InputWrapper>
    )
  }
)

TextArea.displayName = 'TextArea'
