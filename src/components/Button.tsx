import { ReactNode } from 'react'
import { Text, TouchableOpacity, TouchableOpacityProps } from 'react-native'
import { twMerge } from 'tailwind-merge'

type Props = TouchableOpacityProps & {
  title?: string
  variant?: 'filled' | 'outlined'
  textColor?: string
  children?: ReactNode
}

export function Button({
  title,
  variant = 'filled',
  textColor,
  className,
  children,
  ...rest
}: Props) {
  const VARIANT = {
    filled: 'bg-primary-700',
    outlined: 'border border-primary-700',
  }

  const TEXT = {
    filled: textColor || 'text-white',
    outlined: textColor || 'text-primary-700',
  }

  return (
    <TouchableOpacity
      activeOpacity={0.7}
      className={twMerge(
        'px-2 py-3 items-center justify-center rounded-md',
        VARIANT[variant],
        className,
      )}
      {...rest}
    >
      {title && (
        <Text
          className={twMerge(
            'font-button text-sm leading-relaxed uppercase text-white',
            TEXT[variant],
          )}
        >
          {title}
        </Text>
      )}

      {children}
    </TouchableOpacity>
  )
}
