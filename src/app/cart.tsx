import { useRef } from 'react'
import { Alert, FlatList, Text, View } from 'react-native'
import { router } from 'expo-router'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Swipeable } from 'react-native-gesture-handler'
import Animated, {
  FadeIn,
  FadeOut,
  LinearTransition,
} from 'react-native-reanimated'

import { Header } from '@/components/Header'
import { Button } from '@/components/Button'
import { CartItem } from '@/components/CartItem'

import { CartItemProps } from '@/contexts/CartContext'

import { useCart } from '@/hooks/useCart'

import themeColors from '@/theme/colors'

import TrashIcon from '@/assets/icons/trash.svg'
import CartIcon from '@/assets/icons/shopping-cart.svg'

export default function Cart() {
  const { cart, total, onUpdateCartItem, onRemoveCartItem } = useCart()

  const swipeableRefs = useRef<Swipeable[]>([])

  const totalFormatted = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(total)

  function handleBack() {
    router.back()
  }

  function handleAddAmountCart(cartItem: CartItemProps) {
    const cartItemUpdated = cart.find(
      (item) => item.id === cartItem.id && item.size === cartItem.size,
    )
    if (!cartItemUpdated) {
      return
    }

    cartItemUpdated.amount = cartItem.amount + 1

    onUpdateCartItem(cartItemUpdated)
  }

  function handleRemoveAmountCart(cartItem: CartItemProps) {
    if (cartItem.amount > 1) {
      const cartItemUpdated = cart.find(
        (item) => item.id === cartItem.id && item.size === cartItem.size,
      )
      if (!cartItemUpdated) {
        return
      }

      cartItemUpdated.amount = cartItem.amount - 1

      onUpdateCartItem(cartItemUpdated)
    }
  }

  function handleRemoveCartItem(cartItem: CartItemProps, index: number) {
    Alert.alert('Remover', `Deseja remover ${cartItem.name} de seu carrinho?`, [
      {
        text: 'Sim',
        onPress: () => onRemoveCartItem(cartItem),
      },
      {
        text: 'Não',
        style: 'cancel',
        onPress: () => {
          swipeableRefs.current?.[index].close()
        },
      },
    ])
  }

  function handleFinish() {
    router.push('/finish')
  }

  return (
    <View className="flex-1 bg-neutral-100">
      <Header title="Carrinho" onBack={handleBack} />

      <View className="flex-1">
        <FlatList
          data={cart}
          keyExtractor={(item, index) => item.id + index}
          contentContainerStyle={
            cart.length === 0
              ? {
                  flex: 1,
                  paddingHorizontal: 32,
                }
              : undefined
          }
          renderItem={({ item, index }) => (
            <Animated.View
              entering={FadeIn}
              exiting={FadeOut}
              layout={LinearTransition.springify()}
            >
              <Swipeable
                ref={(ref) => {
                  if (ref) {
                    swipeableRefs.current.push(ref)
                  }
                }}
                leftThreshold={100}
                onSwipeableOpen={() => handleRemoveCartItem(item, index)}
                renderRightActions={() => null}
                renderLeftActions={() => (
                  <View className="w-full">
                    <View className="h-full w-24 items-center justify-center bg-feedback-300">
                      <TrashIcon
                        height={32}
                        color={themeColors.feedback[700]}
                      />
                    </View>
                  </View>
                )}
                containerStyle={{
                  backgroundColor: themeColors.feedback[300],
                }}
              >
                <CartItem
                  data={item}
                  onPlusItem={() => handleAddAmountCart(item)}
                  onMinusItem={() => handleRemoveAmountCart(item)}
                  onRemove={() => handleRemoveCartItem(item, index)}
                />
              </Swipeable>
            </Animated.View>
          )}
          ListEmptyComponent={
            <View className="items-center justify-center gap-y-6 mt-16">
              <View className="items-center justify-center gap-y-3">
                <CartIcon height={32} color={themeColors.neutral[500]} />

                <Text className="font-body text-base text-center text-neutral-600">
                  Seu carrinho está vazio
                </Text>
              </View>

              <View className="w-3/5">
                <Button title="Ver catálogo" onPress={handleBack} />
              </View>
            </View>
          }
        />
      </View>

      {cart.length > 0 && (
        <SafeAreaView
          edges={['bottom']}
          className="px-8 pt-7 pb-4 gap-y-6 shadow shadow-black/20 bg-white"
        >
          <View className="flex-row items-center justify-between">
            <Text className="font-body text-base text-neutral-800">
              Valor total
            </Text>

            <Text className="font-heading text-xl text-neutral-800">
              {totalFormatted}
            </Text>
          </View>

          <Button
            title="Confirmar pedido"
            className="bg-secondary-700"
            onPress={handleFinish}
          />
        </SafeAreaView>
      )}
    </View>
  )
}
