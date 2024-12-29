import { View, Text } from 'react-native'

import themeColors from '@/theme/colors'

import MapPinIcon from '@/assets/icons/map-pin.svg'
import ShoppingCartIcon from '@/assets/icons/shopping-cart.svg'
import { SafeAreaView } from 'react-native-safe-area-context'

export function CatalogHeader() {
  return (
    <SafeAreaView
      edges={['top']}
      className="flex-row items-center justify-between px-8 py-5"
    >
      <View className="flex-row items-center gap-x-1">
        <MapPinIcon height={20} width={20} color={themeColors.primary[500]} />

        <Text className="font-body text-sm text-neutral-100">
          Porto Alegre, RS
        </Text>
      </View>

      <ShoppingCartIcon
        height={28}
        width={28}
        color={themeColors.secondary[700]}
      />
    </SafeAreaView>
  )
}
