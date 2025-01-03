import { ElementType } from 'react'
import { TouchableOpacityProps, TouchableOpacity } from 'react-native'
import { SvgProps } from 'react-native-svg'
import { twMerge } from 'tailwind-merge'

type Props = TouchableOpacityProps & {
  icon?: ElementType<SvgProps>
  iconColor?: string
  iconSize?: number
}

export function IconButton({
  icon: Icon,
  iconSize = 20,
  iconColor,
  className,
  ...rest
}: Props) {
  return (
    <TouchableOpacity
      activeOpacity={0.7}
      className={twMerge(
        'items-center justify-center p-2 rounded-md',
        className,
      )}
      {...rest}
    >
      {Icon && <Icon height={iconSize} width={iconSize} color={iconColor} />}
    </TouchableOpacity>
  )
}
