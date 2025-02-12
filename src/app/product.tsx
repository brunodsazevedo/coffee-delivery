/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from 'react'
import { View, Text, Image } from 'react-native'
import * as Haptics from 'expo-haptics'
import { router, useLocalSearchParams } from 'expo-router'
import { SafeAreaView } from 'react-native-safe-area-context'
import toast from 'react-native-toast-message'
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withDelay,
  withSequence,
  withTiming,
} from 'react-native-reanimated'

import { Header } from '@/components/Header'
import { IconButton } from '@/components/IconButton'
import { Button } from '@/components/Button'
import { SizeCupButton } from '@/components/SizeCupButton'

import themeColors from '@/theme/colors'

import { useCart } from '@/hooks/useCart'

import { CoffeeDTO } from '@/constants/coffees'

import CupCoffeeImg from '@/assets/images/cup-of-coffee-img.png'
import SmokeIcon from '@/assets/icons/smoke.svg'
import ShoppingCartIcon from '@/assets/icons/shopping-cart.svg'
import PlusIcon from '@/assets/icons/plus.svg'
import MinusIcon from '@/assets/icons/minus.svg'

type RouteParamsProps = {
  productData: string
}

export default function Product() {
  const [isError, setIsError] = useState(false)
  const [amount, setAmount] = useState(1)
  const [sizeCupSelected, setSizeCupSelected] = useState<
    '114ml' | '140ml' | '227ml' | undefined
  >(undefined)

  const { cart, onAddCartItem } = useCart()

  const routeParams = useLocalSearchParams<RouteParamsProps>()

  const labelColor = useSharedValue(themeColors.neutral[700])

  const animatedLabelStyle = useAnimatedStyle(() => ({
    color: labelColor.value,
  }))

  const productData: CoffeeDTO = JSON.parse(routeParams.productData)

  const priceFormatted = new Intl.NumberFormat('pt-BR', {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(productData.price)

  function handleBack() {
    router.back()
  }

  function handleSelectSizeCup(sizeCup: '114ml' | '140ml' | '227ml') {
    setSizeCupSelected(sizeCup)
  }

  function handleAddCups() {
    Haptics.notificationAsync(Haptics.NotificationFeedbackType.Success)
    setAmount((prevState) => prevState + 1)
  }

  function handleRemoveCups() {
    if (amount > 1) {
      Haptics.notificationAsync(Haptics.NotificationFeedbackType.Success)
      setAmount((prevState) => prevState - 1)
    }
  }

  function handleAddCart() {
    if (!sizeCupSelected) {
      return setIsError(true)
    }

    const newCartItem = {
      ...productData,
      amount,
      size: sizeCupSelected,
    }

    onAddCartItem(newCartItem)

    toast.show({
      type: 'cartToast',
      props: { data: newCartItem },
    })

    router.back()
  }

  function handleGoCart() {
    router.push('/cart')
  }

  function handleToggleError() {
    setIsError(false)
  }

  useEffect(() => {
    if (isError) {
      withSequence(
        (labelColor.value = themeColors.feedback[700]),
        (labelColor.value = withDelay(
          400,
          withTiming(themeColors.neutral[700], { duration: 800 }),
        )),
      )

      handleToggleError()
    }
  }, [isError])

  return (
    <View className="flex-1 bg-neutral-900">
      <Header
        iconColor="white"
        rightElement={
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
        }
        onBack={handleBack}
      />

      <View className="flex-1 px-8 gap-y-6">
        <View className="items-start">
          <View className="px-3 py-1.5 rounded-full bg-neutral-800">
            <Text className="font-bold text-xs uppercase text-white">
              {productData.type}
            </Text>
          </View>
        </View>

        <View className="flex-row items-center justify-between">
          <Text className="font-heading text-2xl text-white">
            {productData.name}
          </Text>

          <View className="flex-row items-center">
            <Text className="font-body text-sm text-secondary-500">R$ </Text>

            <Text className="font-heading text-4xl leading-snug text-secondary-500">
              {priceFormatted}
            </Text>
          </View>
        </View>

        <Text className="font-body text-xl text-neutral-500">
          {productData.description}
        </Text>
      </View>

      <SafeAreaView
        edges={['bottom']}
        className="px-8 pt-16 pb-3 gap-y-6 bg-neutral-100"
      >
        <View className="absolute left-0 -top-72 right-0 items-center justify-end">
          <View className="absolute -top-12">
            <SmokeIcon />
          </View>

          <Image
            source={CupCoffeeImg}
            alt="Imagem de uma xícara de café"
            resizeMode="contain"
            className="h-96 w-96"
          />
        </View>

        <View className="gap-y-2">
          <Animated.Text
            style={animatedLabelStyle}
            className="font-body text-base"
          >
            Selecione o tamanho:
          </Animated.Text>

          <View className="flex-row items-center justify-between gap-x-2">
            <View className="flex-1">
              <SizeCupButton
                title="114ml"
                isSelected={sizeCupSelected === '114ml'}
                isError={isError}
                onPress={() => handleSelectSizeCup('114ml')}
              />
            </View>

            <View className="flex-1">
              <SizeCupButton
                title="140ml"
                isSelected={sizeCupSelected === '140ml'}
                isError={isError}
                onPress={() => handleSelectSizeCup('140ml')}
              />
            </View>

            <View className="flex-1">
              <SizeCupButton
                title="227ml"
                isSelected={sizeCupSelected === '227ml'}
                isError={isError}
                onPress={() => handleSelectSizeCup('227ml')}
              />
            </View>
          </View>
        </View>

        <View className="flex-row items-center p-2 rounded-md gap-x-4 bg-neutral-300">
          <IconButton
            icon={MinusIcon}
            iconColor={themeColors.primary[500]}
            onPress={handleRemoveCups}
          />

          <View>
            <Text className="font-body text-base text-neutral-900">
              {amount}
            </Text>
          </View>

          <IconButton
            icon={PlusIcon}
            iconColor={themeColors.primary[500]}
            onPress={handleAddCups}
          />

          <View className="flex-1">
            <Button title="Adicionar" onPress={handleAddCart} />
          </View>
        </View>
      </SafeAreaView>
    </View>
  )
}
