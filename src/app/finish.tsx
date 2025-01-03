import { View, Text } from 'react-native'
import { router } from 'expo-router'

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
        <DeliverySvg />

        <View className="items-center justify-center gap-y-2">
          <Text className="font-heading text-2xl text-center text-secondary-700">
            Uhu! Pedido confirmado
          </Text>

          <Text className="font-body text-lg text-center text-neutral-800">
            Agora é só aguardar que logo o café{'\n'}
            chegará até você!
          </Text>
        </View>

        <View className="w-full">
          <Button title="Ir para a home" onPress={handleGoHome} />
        </View>
      </View>
    </View>
  )
}
