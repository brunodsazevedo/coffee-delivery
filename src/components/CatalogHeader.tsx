import { View, Text } from 'react-native'
import { router } from 'expo-router'

import { IconButton } from '@/components/IconButton'

import { useCart } from '@/hooks/useCart'

import themeColors from '@/theme/colors'

import MapPinIcon from '@/assets/icons/map-pin.svg'
import ShoppingCartIcon from '@/assets/icons/shopping-cart.svg'

export function CatalogHeader() {
  const { cart } = useCart()

  function handleGoCart() {
    router.push('/cart')
  }

  return (
    <View className="flex-row items-center justify-between px-8 py-5">
      <View className="flex-row items-center gap-x-1">
        <MapPinIcon height={20} width={20} color={themeColors.primary[500]} />

        <Text className="font-body text-sm text-neutral-100">
          Porto Alegre, RS
        </Text>
      </View>

      <View>
        <IconButton
          icon={ShoppingCartIcon}
          iconSize={28}
          iconColor={
            cart.length === 0
              ? themeColors.secondary[700]
              : themeColors.primary[500]
          }
          className="p-0"
          onPress={handleGoCart}
        />

        {cart.length > 0 && (
          <View className="absolute -top-4 -right-4 items-center justify-center h-5 w-5 rounded-full bg-primary-500">
            <Text className="font-body text-sm text-white">{cart.length}</Text>
          </View>
        )}
      </View>
    </View>
  )
}
