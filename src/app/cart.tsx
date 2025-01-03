import { FlatList, Text, View } from 'react-native'
import { router } from 'expo-router'
import { SafeAreaView } from 'react-native-safe-area-context'

import { Header } from '@/components/Header'
import { Button } from '@/components/Button'
import { CartItem } from '@/components/CartItem'
import { ListEmpty } from '@/components/ListEmpty'

import { CartItemProps } from '@/contexts/CartContext'

import { useCart } from '@/hooks/useCart'

export default function Cart() {
  const { cart, total, onUpdateCartItem, onRemoveCartItem } = useCart()

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

  function handleRemoveCartItem(cartItem: CartItemProps) {
    onRemoveCartItem(cartItem)
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
                  justifyContent: 'center',
                  alignItems: 'center',
                  paddingHorizontal: 32,
                }
              : undefined
          }
          renderItem={({ item }) => (
            <CartItem
              data={item}
              onPlusItem={() => handleAddAmountCart(item)}
              onMinusItem={() => handleRemoveAmountCart(item)}
              onRemove={() => handleRemoveCartItem(item)}
            />
          )}
          ListEmptyComponent={
            <ListEmpty message="Carrinho vazio! Adicione seu café favorito para continuar" />
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
