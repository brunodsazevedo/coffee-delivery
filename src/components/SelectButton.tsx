import { Text, TouchableOpacity } from 'react-native'
import { twMerge } from 'tailwind-merge'

type Props = {
  title: string
  selected?: boolean
  onPress?: () => void
}

export function SelectButton({ title, selected = false, onPress }: Props) {
  return (
    <TouchableOpacity
      activeOpacity={0.7}
      className={twMerge(
        'items-center justify-center px-3 py-1.5 rounded-full border border-primary-500',
        selected && 'bg-primary-500',
      )}
      onPress={onPress}
    >
      <Text
        className={twMerge(
          'font-bold text-sm uppercase text-primary-700',
          selected && 'text-white',
        )}
      >
        {title}
      </Text>
    </TouchableOpacity>
  )
}
