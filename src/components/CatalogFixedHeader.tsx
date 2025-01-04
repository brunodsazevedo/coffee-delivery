import { View, Text } from 'react-native'
import { router } from 'expo-router'

import { IconButton } from '@/components/IconButton'
import { SelectButton } from '@/components/SelectButton'

import { useCart } from '@/hooks/useCart'

import themeColors from '@/theme/colors'

import MapPinIcon from '@/assets/icons/map-pin.svg'
import ShoppingCartIcon from '@/assets/icons/shopping-cart.svg'
import { SafeAreaView } from 'react-native-safe-area-context'

export function CatalogFixedHeader() {
  const { cart } = useCart()

  function handleGoCart() {
    router.push('/cart')
  }

  return (
    <SafeAreaView
      edges={['top']}
      className="shadow shadow-black/10 bg-neutral-100"
    >
      <View className="flex-row items-center justify-between px-8 py-2 border-b border-b-neutral-200">
        <View className="flex-row items-center gap-x-1">
          <MapPinIcon height={20} width={20} color={themeColors.primary[500]} />

          <Text className="font-body text-sm text-neutral-800">
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
              <Text className="font-body text-sm text-white">
                {cart.length}
              </Text>
            </View>
          )}
        </View>
      </View>

      <View className="py-4 px-8 mt-4 gap-y-3">
        <Text className="font-heading text-base text-neutral-700">
          Nossos cafés
        </Text>

        <View className="flex-row items-center gap-x-2">
          <View>
            <SelectButton title="Tradicionais" />
          </View>

          <View>
            <SelectButton title="Doces" />
          </View>

          <View>
            <SelectButton title="Especiais" />
          </View>
        </View>
      </View>
    </SafeAreaView>
  )
}
