/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from 'react'
import { View, Text, Image, FlatList } from 'react-native'
import { router } from 'expo-router'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import Animated, {
  Easing,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
  withDelay,
  useAnimatedScrollHandler,
  Extrapolation,
  interpolate,
} from 'react-native-reanimated'

import { Input } from '@/components/Input'
import { CatalogHeader } from '@/components/CatalogHeader'
import { CoffeeCarouselItem } from '@/components/CoffeeCarouselItem'
import { SelectButton } from '@/components/SelectButton'
import { CoffeeCardItem } from '@/components/CoffeeCardItem'
import { CatalogFixedHeader } from '@/components/CatalogFixedHeader'

import { featuredCoffees, coffees, CoffeeDTO } from '@/constants/coffees'

import themeColors from '@/theme/colors'

import { sectionListFormatted } from '@/utils/arrayUtils'

import SearchIcon from '@/assets/icons/magnifying-glass.svg'
import CoffeeBeansImg from '@/assets/images/coffee-beans-img.png'

export default function Catalog() {
  const safeAreaInsets = useSafeAreaInsets()

  const headerTranslateY = useSharedValue(-500)
  const featuredTranslateX = useSharedValue(500)
  const coffeeSectionTranslateY = useSharedValue(500)
  const scrollY = useSharedValue(0)

  const scrollHandler = useAnimatedScrollHandler({
    onScroll: (event) => {
      scrollY.value = event.contentOffset.y
    },
  })

  const headerStyle = useAnimatedStyle(() => ({
    paddingTop: safeAreaInsets.top,
    transform: [{ translateY: headerTranslateY.value }],
  }))

  const headerFixedStyle = useAnimatedStyle(() => ({
    position: 'absolute',
    zIndex: 1,
    width: '100%',
    paddingTop: safeAreaInsets.top,
    backgroundColor: themeColors.neutral[100],
    opacity: interpolate(
      scrollY.value,
      [400, 436],
      [0, 1],
      Extrapolation.CLAMP,
    ),
    transform: [
      {
        translateY: interpolate(
          scrollY.value,
          [400, 436],
          [-40, 0],
          Extrapolation.CLAMP,
        ),
      },
    ],
  }))

  const featuredStyle = useAnimatedStyle(() => ({
    transform: [{ translateX: featuredTranslateX.value }],
  }))

  const coffeeSectionStyle = useAnimatedStyle(() => ({
    transform: [{ translateY: coffeeSectionTranslateY.value }],
  }))

  const coffeeSectionData = sectionListFormatted(coffees, 'type')

  function handleCoffeeDetails(data: CoffeeDTO) {
    router.push({
      pathname: '/product',
      params: {
        productData: JSON.stringify(data),
      },
    })
  }

  function onStartAnimations() {
    headerTranslateY.value = withDelay(
      500,
      withTiming(0, {
        duration: 800,
        easing: Easing.out(Easing.ease),
      }),
    )

    featuredTranslateX.value = withDelay(
      1000,
      withTiming(0, {
        duration: 500,
        easing: Easing.out(Easing.ease),
      }),
    )

    coffeeSectionTranslateY.value = withDelay(
      1000,
      withTiming(0, {
        duration: 500,
        easing: Easing.out(Easing.ease),
      }),
    )
  }

  useEffect(() => {
    onStartAnimations()
  }, [])

  return (
    <View className="flex-1 bg-neutral-100">
      <Animated.View
        style={headerFixedStyle}
        className="shadow shadow-black/10 bg-neutral-100"
      >
        <CatalogFixedHeader />
      </Animated.View>

      <Animated.ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 74 }}
        onScroll={scrollHandler}
        scrollEventThrottle={16}
      >
        <Animated.View style={headerStyle} className="bg-neutral-900">
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

              <View>
                <Image
                  alt="Grãos de café"
                  source={CoffeeBeansImg}
                  className="w-32 h-32"
                />
              </View>
            </View>
          </View>
        </Animated.View>

        <Animated.View style={featuredStyle} className="-mt-36">
          <FlatList
            data={featuredCoffees}
            keyExtractor={(item, index) => item.id + index}
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{
              paddingTop: 64,
            }}
            renderItem={({ item }) => (
              <CoffeeCarouselItem
                data={item}
                onPress={() => handleCoffeeDetails(item)}
              />
            )}
          />
        </Animated.View>

        <Animated.View
          style={coffeeSectionStyle}
          className="py-4 px-8 mt-4 gap-y-3"
        >
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
        </Animated.View>

        <Animated.View style={coffeeSectionStyle} className="px-8 pt-8">
          {coffeeSectionData.map((section, sectionIndex) => (
            <View key={sectionIndex}>
              <Text className="font-heading text-base mb-6 text-neutral-600">
                {section.title === 'traditional' && 'Tradicionais'}
                {section.title === 'sweet' && 'Doces'}
                {section.title === 'specialty' && 'Especiais'}
              </Text>

              {section.data.map((item, index) => (
                <CoffeeCardItem
                  key={index}
                  data={item}
                  onPress={() => handleCoffeeDetails(item)}
                />
              ))}
            </View>
          ))}
        </Animated.View>
      </Animated.ScrollView>
    </View>
  )
}
