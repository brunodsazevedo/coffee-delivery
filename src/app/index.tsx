/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from 'react'
import { View, Dimensions } from 'react-native'
import { router } from 'expo-router'
import Animated, {
  runOnJS,
  useAnimatedStyle,
  useSharedValue,
  withDelay,
  withSequence,
  withTiming,
} from 'react-native-reanimated'

import themeColors from '@/theme/colors'

import CoffeeDeliveryIcon from '@/assets/icons/coffee-delivery-icon.svg'
import CoffeeDelivery from '@/assets/icons/coffee-delivery-string.svg'

const { height } = Dimensions.get('window')

export default function StartApp() {
  const size = useSharedValue(0)
  const translateXIcon = useSharedValue(58)
  const translateXTextIcon = useSharedValue(58)
  const opacityIcon = useSharedValue(0)
  const opacityTextIcon = useSharedValue(0)

  const animatedCircleStyle = useAnimatedStyle(() => ({
    height: size.value,
    width: size.value,
    borderRadius: size.value,
    backgroundColor: themeColors.primary[500],
  }))

  const animatedIconStyle = useAnimatedStyle(() => ({
    transform: [
      {
        translateX: translateXIcon.value,
      },
    ],
  }))

  const animatedTextIconStyle = useAnimatedStyle(() => ({
    transform: [
      {
        translateX: translateXTextIcon.value,
      },
    ],
    opacity: opacityTextIcon.value,
  }))

  function startApp() {
    router.push('/catalog')
  }

  useEffect(() => {
    withSequence([
      ((size.value = withTiming(height * 1.5, { duration: 800 })),
      (opacityIcon.value = withTiming(1000, { duration: 800 }))),
      ((translateXIcon.value = withDelay(
        800,
        withTiming(0, { duration: 600 }),
      )),
      (opacityTextIcon.value = withDelay(
        800,
        withTiming(1, { duration: 600 }),
      )),
      (translateXTextIcon.value = withDelay(
        800,
        withTiming(0, { duration: 600 }, () => {
          'worklet'
          runOnJS(startApp)()
        }),
      ))),
    ])
  }, [])

  return (
    <View className="flex-1 items-center justify-center bg-primary-700">
      <Animated.View style={animatedCircleStyle} />

      <View className="absolute flex-row items-center gap-x-4">
        <Animated.View style={animatedIconStyle}>
          <CoffeeDeliveryIcon />
        </Animated.View>

        <Animated.View style={animatedTextIconStyle}>
          <CoffeeDelivery />
        </Animated.View>
      </View>
    </View>
  )
}
