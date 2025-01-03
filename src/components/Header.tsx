import { ReactNode } from 'react'
import { Text, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { twMerge } from 'tailwind-merge'

import { IconButton } from '@/components/IconButton'

import themeColors from '@/theme/colors'

import ArrowLeftIcon from '@/assets/icons/arrow-left.svg'

type Props = {
  title?: string
  rightElement?: ReactNode
  titleColor?: string
  iconColor?: string
  onBack: () => void
}

export function Header({
  title,
  titleColor = 'text-neutral-900',
  iconColor,
  rightElement,
  onBack,
}: Props) {
  return (
    <SafeAreaView
      edges={['top']}
      className="flex-row items-center justify-between px-8 py-4"
    >
      <View className="flex-row items-center">
        <IconButton
          icon={ArrowLeftIcon}
          iconSize={24}
          iconColor={iconColor || themeColors.neutral[900]}
          onPress={onBack}
        />

        {title && (
          <View className="flex-1 items-center justify-center">
            <Text
              className={twMerge(
                'font-heading text-base text-center',
                titleColor,
              )}
            >
              {title}
            </Text>
          </View>
        )}
      </View>

      {rightElement && rightElement}
    </SafeAreaView>
  )
}
