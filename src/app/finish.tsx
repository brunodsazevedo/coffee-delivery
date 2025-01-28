import { View, Text } from 'react-native'
import { router } from 'expo-router'
import Animated, {
  Easing,
  FadeIn,
  FadeInUp,
  SlideInLeft,
} from 'react-native-reanimated'

import { Button } from '@/components/Button'

import { useCart } from '@/hooks/useCart'

import DeliverySvg from '@/assets/icons/delivery-Illustration.svg'

export default function Finish() {
  const { onRemoveAll } = useCart()

  function handleGoHome() {
    onRemoveAll()

    router.push('/catalog')
  }

  return (
    <View className="flex-1 bg-neutral-100">
      <View className="flex-1 items-center justify-center px-8 gap-y-12">
        <Animated.View
          entering={SlideInLeft.delay(500)
            .duration(1000)
            .easing(Easing.elastic(1))}
        >
          <DeliverySvg />
        </Animated.View>

        <Animated.View
          entering={FadeInUp.delay(500).duration(1000)}
          className="items-center justify-center gap-y-2"
        >
          <Text className="font-heading text-3xl text-center text-secondary-700">
            Uhu! Pedido confirmado
          </Text>

          <Text className="font-body text-lg text-center text-neutral-800">
            Agora é só aguardar que logo o café{'\n'}
            chegará até você!
          </Text>
        </Animated.View>

        <Animated.View entering={FadeIn.delay(1500)} className="w-3/4">
          <Button title="Ir para a home" onPress={handleGoHome} />
        </Animated.View>
      </View>
    </View>
  )
}
