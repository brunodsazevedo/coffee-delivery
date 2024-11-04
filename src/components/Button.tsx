import { Text, TouchableOpacity, TouchableOpacityProps } from 'react-native'
import { twMerge } from 'tailwind-merge'

type Props = TouchableOpacityProps & {
  title: string
}

export function Button({ title, className,...rest }: Props) {
  return (
    <TouchableOpacity
      activeOpacity={0.7}
      className={twMerge(
        'px-2 py-3 items-center justify-center rounded-md bg-primary-700',
        className,
      )}
      {...rest}
    >
      <Text className="font-button text-sm leading-relaxed uppercase text-white">
        {title}
      </Text>
    </TouchableOpacity>
  )
}
