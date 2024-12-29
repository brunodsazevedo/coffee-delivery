import { View, Text, Image } from 'react-native'

import EspressoImg from '@/assets/images/espresso-coffee-img.png'

export function CoffeeCardItem() {
  return (
    <View className="flex-row px-4 gap-x-4 border rounded-tl-md rounded-tr-[36px] rounded-br-md rounded-bl-[36px] border-neutral-300 bg-neutral-200">
      <View className="-mt-4">
        <Image
          source={EspressoImg}
          alt="Imagem de xícara de café"
          className="h-24 w-24"
        />
      </View>

      <View className="flex-1 gap-y-2 py-4">
        <Text className="font-heading text-base text-neutral-800">
          Expresso Tradicional
        </Text>

        <Text className="font-body text-sm text-neutral-600">
          O tradicional café feito com água quente e grãos moídos
        </Text>

        <View className="flex-row items-center">
          <Text className="font-body text-sm text-secondary-700">R$ </Text>

          <Text className="font-heading text-xl text-secondary-700">9,90</Text>
        </View>
      </View>
    </View>
  )
}
