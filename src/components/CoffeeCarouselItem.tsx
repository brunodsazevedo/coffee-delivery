import { View, Text, Image, TouchableOpacity } from 'react-native'

import { CoffeeDTO } from '@/constants/coffees'

import { coffeeTypeTranslation } from '@/utils/coffeeTypeTranslation'

type Props = {
  data: CoffeeDTO
  onPress?: () => void
}

export function CoffeeCarouselItem({ data, onPress }: Props) {
  const coffeeTypeFormatted = coffeeTypeTranslation(data.type || 'traditional')

  const priceFormatted = new Intl.NumberFormat('pt-BR', {
    maximumFractionDigits: 2,
    minimumFractionDigits: 2,
  }).format(data.price)

  return (
    <TouchableOpacity
      activeOpacity={1}
      className="w-56 px-4 pb-5 mx-8 items-center gap-y-4 rounded-tl-md rounded-tr-[36px] rounded-br-md rounded-bl-[36px] border border-neutral-300 bg-neutral-200"
      onPress={onPress}
    >
      <View className="-mt-8">
        <Image
          source={data.image}
          alt="Imagem de xícara de café"
          className="h-32 w-32"
        />
      </View>

      <View className="items-center justify-center py-1 px-2 rounded-full bg-primary-300">
        <Text className="font-bold text-xs text-center text-primary-700">
          {coffeeTypeFormatted}
        </Text>
      </View>

      <Text className="font-heading text-xl text-neutral-800">{data.name}</Text>

      <Text className="font-body text-xs text-center text-neutral-600">
        {data.description}
      </Text>

      <View className="flex-row items-center justify-center">
        <Text className="font-body text-sm text-secondary-700">R$ </Text>

        <Text className="font-heading text-2xl text-secondary-700">
          {priceFormatted}
        </Text>
      </View>
    </TouchableOpacity>
  )
}
