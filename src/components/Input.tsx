import { ElementType } from 'react'
import { View, TextInput, TextInputProps } from 'react-native'
import { SvgProps } from 'react-native-svg'
import { twMerge } from 'tailwind-merge'

import themeColors from '@/theme/colors'

type Props = TextInputProps & {
  leftIcon?: ElementType<SvgProps>
}

export function Input({ leftIcon: LeftIcon, ...rest }: Props) {
  return (
    <View className="">
      <TextInput
        placeholderTextColor={themeColors.neutral[600]}
        className={twMerge(
          'w-full h-10 p-3 rounded-lg font-body text-neutral-300 bg-neutral-800',
          LeftIcon && 'pl-9',
        )}
        {...rest}
      />

      {LeftIcon && (
        <View className="absolute left-3 top-3">
          <LeftIcon height={16} width={16} color={themeColors.neutral[600]} />
        </View>
      )}
    </View>
  )
}
