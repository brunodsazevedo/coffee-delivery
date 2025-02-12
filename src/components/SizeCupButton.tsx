/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from 'react'
import { Pressable } from 'react-native'
import Animated, {
  interpolateColor,
  useAnimatedStyle,
  useSharedValue,
  withDelay,
  withSequence,
  withTiming,
} from 'react-native-reanimated'
import { twMerge } from 'tailwind-merge'

import themeColors from '@/theme/colors'

type Props = {
  title: string
  isSelected?: boolean
  isError: boolean
  onPress?: () => void
}

const PressableAnimated = Animated.createAnimatedComponent(Pressable)

export function SizeCupButton({
  title,
  isSelected = false,
  isError,
  onPress,
}: Props) {
  const selected = useSharedValue(0)
  const borderColor = useSharedValue(themeColors.neutral[300])

  const animatedContainerStyle = useAnimatedStyle(() => ({
    borderWidth: 1.5,
    backgroundColor: interpolateColor(
      selected.value,
      [0, 1],
      [themeColors.neutral[300], 'white'],
    ),
    borderColor: interpolateColor(
      selected.value,
      [0, 1],
      [borderColor.value, themeColors.primary[500]],
    ),
  }))

  const animatedTextStyle = useAnimatedStyle(() => ({
    color: interpolateColor(
      selected.value,
      [0, 1],
      [themeColors.neutral[700], themeColors.primary[500]],
    ),
  }))

  useEffect(() => {
    selected.value = withTiming(isSelected ? 1 : 0)
  }, [isSelected])

  useEffect(() => {
    if (isError) {
      withSequence(
        (borderColor.value = themeColors.feedback[500]),
        (borderColor.value = withDelay(
          400,
          withTiming(themeColors.neutral[300], {
            duration: 800,
          }),
        )),
      )
    }
  }, [isError])

  return (
    <PressableAnimated
      style={animatedContainerStyle}
      className="px-2 py-3 w-full items-center justify-center rounded-md"
      onPress={onPress}
    >
      <Animated.Text
        style={animatedTextStyle}
        className={twMerge(
          'font-body text-sm leading-relaxed uppercase',
          isSelected && 'font-button',
        )}
      >
        {title}
      </Animated.Text>
    </PressableAnimated>
  )
}
