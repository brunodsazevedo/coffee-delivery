import { View, Text, TouchableOpacity } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { router } from 'expo-router'
import toast from 'react-native-toast-message'

import themeColors from '@/theme/colors'

import { CartItemProps } from '@/contexts/CartContext'

import ArrowRightIcon from '@/assets/icons/arrow-right.svg'
import ShoppingCartIcon from '@/assets/icons/shopping-cart.svg'

type Props = {
  data: CartItemProps
}

export function CartToast({ data }: Props) {
  function handleSeeCart() {
    toast.hide()

    router.push('/cart')
  }

  return (
    <SafeAreaView
      edges={['bottom']}
      className="flex-row items-center justify-between w-full px-8 pt-7 pb-1 gap-x-5 shadow shadow-black/10 bg-white"
    >
      <View className="flex-1 flex-row items-center gap-x-5">
        <View className="items-center justify-center h-9 w-9 rounded-md bg-neutral-500">
          <ShoppingCartIcon height={20} width={20} color="white" />

          <View className="absolute -right-2 -top-3 h-5 w-5 items-center justify-center rounded-full bg-primary-500">
            <Text className="font-body text-xs text-center text-white">
              {data.amount}
            </Text>
          </View>
        </View>

        <View className="flex-1">
          <Text className="font-body text-base text-neutral-600">
            {data.amount} café{' '}
            <Text className="font-heading">{data.name} </Text>
            de <Text className="font-heading">{data.size} </Text>
            adicionado ao carrinho
          </Text>
        </View>
      </View>

      <View>
        <TouchableOpacity
          className="flex-row items-center gap-x-2"
          onPress={handleSeeCart}
        >
          <Text className="font-heading text-base uppercase text-primary-500">
            Ver
          </Text>

          <ArrowRightIcon
            height={20}
            width={20}
            color={themeColors.primary[500]}
          />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  )
}
