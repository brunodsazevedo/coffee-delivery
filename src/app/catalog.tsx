import { View, ScrollView, Text, Image } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

import { Input } from '@/components/Input'
import { CatalogHeader } from '@/components/CatalogHeader'
import { CoffeeCarouselItem } from '@/components/CoffeeCarouselItem'
import { SelectButton } from '@/components/SelectButton'
import { CoffeeCardItem } from '@/components/CoffeeCardItem'

import SearchIcon from '@/assets/icons/magnifying-glass.svg'
import CoffeeBeansImg from '@/assets/images/coffee-beans-img.png'

export default function Catalog() {
  return (
    <View className="flex-1 bg-neutral-100">
      <ScrollView showsVerticalScrollIndicator={false}>
        <SafeAreaView edges={['top']} className="h-[372px] bg-neutral-900">
          <CatalogHeader />

          <View className="px-8 gap-y-4">
            <Text className="font-heading text-xl leading-[130%] text-white">
              Encontre o café perfeito para{'\n'}
              qualquer hora do dia
            </Text>

            <View className="pt-6 items-end">
              <View className="w-full">
                <Input placeholder="Pesquisar" leftIcon={SearchIcon} />
              </View>

              <View className="-mr-7">
                <Image
                  alt="Grãos de café"
                  source={CoffeeBeansImg}
                  className="w-20 h-20"
                />
              </View>
            </View>
          </View>
        </SafeAreaView>

        <View className="flex-row px-8 -mt-24 gap-x-4">
          <CoffeeCarouselItem />
          <CoffeeCarouselItem />
          <CoffeeCarouselItem />
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

        <View className="px-8 pt-8">
          <CoffeeCardItem />
        </View>
      </ScrollView>
    </View>
  )
}
