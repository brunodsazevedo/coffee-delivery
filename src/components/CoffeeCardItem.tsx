import { View, Text, Image, TouchableOpacity } from 'react-native'

import { CoffeeDTO } from '@/constants/coffees'

type Props = {
  data: CoffeeDTO
  onPress?: () => void
}

export function CoffeeCardItem({ data, onPress }: Props) {
  const priceFormatted = new Intl.NumberFormat('pt-BR', {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(data.price)

  return (
    <TouchableOpacity
      activeOpacity={0.7}
      className="flex-row px-4 mb-10 gap-x-4 border rounded-tl-md rounded-tr-[36px] rounded-br-md rounded-bl-[36px] border-neutral-300 bg-neutral-200"
      onPress={onPress}
    >
      <View className="-mt-4">
        <Image
          source={data.image}
          alt="Imagem de xícara de café"
          className="h-24 w-24"
        />
      </View>

      <View className="flex-1 gap-y-2 py-4">
        <Text className="font-heading text-base text-neutral-800">
          {data.name}
        </Text>

        <Text className="font-body text-sm text-neutral-600">
          {data.description}
        </Text>

        <View className="flex-row items-center">
          <Text className="font-body text-sm text-secondary-700">R$ </Text>

          <Text className="font-heading text-xl text-secondary-700">
            {priceFormatted}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  )
}
