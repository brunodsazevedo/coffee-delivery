/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useRef, useState } from 'react'
import { View, Text, Image, ViewToken, FlatList } from 'react-native'
import { router } from 'expo-router'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  useAnimatedScrollHandler,
  Extrapolation,
  interpolate,
  SlideInUp,
  FadeInDown,
  SlideInRight,
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
import { coffeeTypeTranslation } from '@/utils/coffeeTypeTranslation'

type ChangeCoffeeSectionListProps = {
  viewableItems: ViewToken[]
  changed: ViewToken[]
}

export default function Catalog() {
  const [indexCoffeeSectionList, setIndexCoffeeSectionList] = useState(0)
  const [isScrolling, setIsScrolling] = useState(true)

  const flatListRef = useRef<FlatList>(null)

  const indexCoffeeSectionChanged = useRef(
    (info: ChangeCoffeeSectionListProps) => {
      const index = info.viewableItems[0].index!
      setIndexCoffeeSectionList(index)
    },
  )

  const safeAreaInsets = useSafeAreaInsets()

  const coffeeSectionData = sectionListFormatted(coffees, 'type')

  const scrollY = useSharedValue(0)

  const flatListStyle = useAnimatedStyle(() => ({
    paddingTop: interpolate(
      scrollY.value,
      [590, 620],
      [0, safeAreaInsets.top + 150],
      Extrapolation.CLAMP,
    ),
  }))

  const headerFixedStyle = useAnimatedStyle(() => ({
    position: 'absolute',
    zIndex: 1,
    width: '100%',
    paddingTop: safeAreaInsets.top,
    backgroundColor: themeColors.neutral[100],
    opacity: interpolate(
      scrollY.value,
      [590, 620],
      [0, 1],
      Extrapolation.CLAMP,
    ),
    transform: [
      {
        translateY: interpolate(
          scrollY.value,
          [590, 620],
          [-40, 0],
          Extrapolation.CLAMP,
        ),
      },
    ],
  }))

  const headerStyle = useAnimatedStyle(() => ({
    marginBottom: 40,
    opacity: interpolate(
      scrollY.value,
      [590, 620],
      [1, 0],
      Extrapolation.CLAMP,
    ),
    transform: [
      {
        translateY: interpolate(
          scrollY.value,
          [590, 620],
          [0, -500],
          Extrapolation.CLAMP,
        ),
      },
    ],
  }))

  const scrollHandler = useAnimatedScrollHandler({
    onScroll: (event) => {
      scrollY.value = event.contentOffset.y
    },
  })

  function handleCoffeeDetails(data: CoffeeDTO) {
    router.push({
      pathname: '/product',
      params: {
        productData: JSON.stringify(data),
      },
    })
  }

  function handleScrollToSection(sectionIndex: number) {
    setIndexCoffeeSectionList(sectionIndex)
    setIsScrolling(false)
  }

  useEffect(() => {
    if (!isScrolling) {
      flatListRef.current?.scrollToIndex({
        index: indexCoffeeSectionList,
        animated: true,
      })

      setIsScrolling(true)
    }
  }, [isScrolling])

  return (
    <View className="flex-1 bg-neutral-100">
      <Animated.View
        style={headerFixedStyle}
        className="shadow shadow-black/10 bg-neutral-100"
      >
        <CatalogFixedHeader
          sectionData={coffeeSectionData}
          indexSectionFocused={indexCoffeeSectionList}
          onScrollToSection={handleScrollToSection}
        />
      </Animated.View>

      <Animated.FlatList
        ref={flatListRef}
        data={coffeeSectionData}
        keyExtractor={(item, index) => item.title + index}
        showsVerticalScrollIndicator={false}
        style={flatListStyle}
        contentContainerStyle={{
          paddingBottom: 90,
        }}
        onScroll={scrollHandler}
        onViewableItemsChanged={indexCoffeeSectionChanged.current}
        renderItem={({ item: section }) => (
          <Animated.View
            entering={FadeInDown.delay(1300).duration(800)}
            className="mx-8 py-4"
          >
            <Text className="font-heading text-base mb-6 text-neutral-600">
              {section.title === 'traditional' && 'Tradicionais'}
              {section.title === 'sweet' && 'Doces'}
              {section.title === 'specialty' && 'Especiais'}
            </Text>

            {section.data.map((item, index) => (
              <CoffeeCardItem
                key={index}
                index={index}
                data={item}
                onPress={() => handleCoffeeDetails(item)}
              />
            ))}
          </Animated.View>
        )}
        ListHeaderComponent={
          <Animated.View style={headerStyle}>
            <Animated.View
              entering={SlideInUp.duration(800).delay(500)}
              style={{
                paddingTop: safeAreaInsets.top,
              }}
              className="bg-neutral-900"
            >
              <CatalogHeader />

              <Animated.View
                entering={FadeInDown.delay(1100)}
                className="px-8 pt-10 gap-y-4"
              >
                <Text className="font-heading text-xl leading-[130%] text-white">
                  Encontre o café perfeito para{'\n'}
                  qualquer hora do dia
                </Text>

                <View className="items-end">
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
              </Animated.View>
            </Animated.View>

            <View className="-mt-32">
              <Animated.FlatList
                entering={SlideInRight.delay(1300).duration(800)}
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
            </View>

            <Animated.View
              entering={FadeInDown.delay(1300).duration(800)}
              className="py-4 px-8 mt-8 gap-y-3"
            >
              <Text className="font-heading text-base text-neutral-700">
                Nossos cafés
              </Text>

              <View className="flex-row items-center gap-x-2">
                {coffeeSectionData.map((section, sectionIndex) => (
                  <View key={sectionIndex}>
                    <SelectButton
                      title={coffeeTypeTranslation(section.title)}
                      selected={sectionIndex === indexCoffeeSectionList}
                      onPress={() => handleScrollToSection(sectionIndex)}
                    />
                  </View>
                ))}
              </View>
            </Animated.View>
          </Animated.View>
        }
      />
    </View>
  )
}
