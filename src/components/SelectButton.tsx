import { useEffect } from 'react'
import { Pressable, Text } from 'react-native'
import Animated, {
  interpolateColor,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated'
import { twMerge } from 'tailwind-merge'

import themeColors from '@/theme/colors'

type Props = {
  title: string
  selected?: boolean
  onPress?: () => void
}

const PressableAnimated = Animated.createAnimatedComponent(Pressable)

export function SelectButton({ title, selected = false, onPress }: Props) {
  const selectedValue = useSharedValue(0)

  const animatedContainerStyle = useAnimatedStyle(() => ({
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 9999,
    borderWidth: 1,
    borderColor: themeColors.primary[500],
    backgroundColor: interpolateColor(
      selectedValue.value,
      [0, 1],
      ['transparent', themeColors.primary[500]],
    ),
  }))

  useEffect(() => {
    selectedValue.value = withTiming(selected ? 1 : 0)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selected])

  return (
    <PressableAnimated
      // className={twMerge(
      //   'items-center justify-center px-3 py-1.5 rounded-full border border-primary-500',
      //   selected && 'bg-primary-500',
      // )}
      style={animatedContainerStyle}
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
    </PressableAnimated>
  )
}
