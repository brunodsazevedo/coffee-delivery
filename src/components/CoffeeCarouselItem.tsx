import { View, Text, Image } from 'react-native'

import LatteImg from '@/assets/images/latte-coffee-img.png'

export function CoffeeCarouselItem() {
  return (
    <View className="w-52 px-4 pb-5 items-center gap-y-4 rounded-tl-md rounded-tr-[36px] rounded-br-md rounded-bl-[36px] border border-neutral-300 bg-neutral-200">
      <View className="-mt-8">
        <Image
          source={LatteImg}
          alt="Imagem de xícara de café"
          className="h-32 w-32"
        />
      </View>

      <View className="items-center justify-center py-1 px-2 rounded-full bg-primary-300">
        <Text className="font-bold text-xs text-center text-primary-700">
          Tradicional
        </Text>
      </View>

      <Text className="font-heading text-xl text-neutral-800">Latte</Text>

      <Text className="font-body text-xs text-center text-neutral-600">
        Café expresso com o dobro de leite e espuma cremosa
      </Text>

      <View className="flex-row items-center justify-center">
        <Text className="font-body text-sm text-secondary-700">R$ </Text>

        <Text className="font-heading text-2xl text-secondary-700">9,90</Text>
      </View>
    </View>
  )
}
