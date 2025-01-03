import { View, Text, Image } from 'react-native'

import { IconButton } from '@/components/IconButton'

import { CartItemProps } from '@/contexts/CartContext'

import themeColors from '@/theme/colors'

import MinusIcon from '@/assets/icons/minus.svg'
import PlusIcon from '@/assets/icons/plus.svg'
import TrashIcon from '@/assets/icons/trash.svg'

type Props = {
  data: CartItemProps
  onPlusItem: () => void
  onMinusItem: () => void
  onRemove: () => void
}

export function CartItem({ data, onMinusItem, onPlusItem, onRemove }: Props) {
  const totalItem = data.price * data.amount

  const totalItemFormatted = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(totalItem)

  return (
    <View className="flex-row justify-between px-8 py-4 border-y border-y-neutral-300">
      <View className="flex-row items-center gap-x-4">
        <Image
          source={data.image}
          alt={`Imagem do café ${data.name}`}
          className="h-16 w-16"
        />

        <View>
          <Text className="font-body text-base text-neutral-900">
            {data.name}
          </Text>

          <Text className="font-body text-sm text-neutral-600">
            {data.size}
          </Text>

          <View className="flex-row gap-x-2 mt-2">
            <View className="flex-row items-center gap-x-3 rounded-md border border-neutral-400">
              <IconButton
                icon={MinusIcon}
                iconSize={20}
                iconColor={themeColors.primary[500]}
                onPress={onMinusItem}
              />

              <Text className="font-body text-base text-neutral-900">
                {data.amount}
              </Text>

              <IconButton
                icon={PlusIcon}
                iconSize={20}
                iconColor={themeColors.primary[500]}
                onPress={onPlusItem}
              />
            </View>

            <IconButton
              icon={TrashIcon}
              iconColor={themeColors.primary[500]}
              iconSize={20}
              className="bg-neutral-300"
              onPress={onRemove}
            />
          </View>
        </View>
      </View>

      <Text className="font-heading text-base text-neutral-900">
        {totalItemFormatted}
      </Text>
    </View>
  )
}
