import { createContext, ReactNode, useState } from 'react'

import { CoffeeDTO } from '@/constants/coffees'

export type CartItemProps = CoffeeDTO & {
  size: '114ml' | '140ml' | '227ml'
  amount: number
}

type CartProviderProps = {
  children: ReactNode
}

type CartContextProps = {
  cart: CartItemProps[]
  total: number
  onAddCartItem: (cartItem: CartItemProps) => void
  onUpdateCartItem: (cartItem: CartItemProps) => void
  onRemoveCartItem: (cartItem: CartItemProps) => void
  onRemoveAll: () => void
}

export const CartContext = createContext({} as CartContextProps)

export function CartProvider({ children }: CartProviderProps) {
  const [cart, setCart] = useState<CartItemProps[]>([])

  const total = cart.reduce((acc, item) => acc + item.amount * item.price, 0)

  function onAddCartItem(cartItem: CartItemProps) {
    const isItemExist = cart.some(
      (item) => item.id === cartItem.id && item.size === cartItem.size,
    )
    if (isItemExist) {
      const cartsUpdated = cart.map((item) => {
        if (item.id === cartItem.id) {
          return {
            ...item,
            amount: item.amount + cartItem.amount,
          }
        }

        return item
      })

      return setCart(cartsUpdated)
    }

    const cartsUpdated = [...cart, cartItem]

    setCart(cartsUpdated)
  }

  function onUpdateCartItem(cartItem: CartItemProps) {
    const cartsUpdated = cart.map((item) => {
      if (item.id === cartItem.id && item.size === cartItem.size) {
        return cartItem
      }

      return item
    })

    setCart(cartsUpdated)
  }

  function onRemoveCartItem(cartItem: CartItemProps) {
    const cartUpdated = cart.filter(
      (item) => item.id !== cartItem.id && item.size !== cartItem.size,
    )

    setCart(cartUpdated)
  }

  function onRemoveAll() {
    setCart([])
  }

  return (
    <CartContext.Provider
      value={{
        cart,
        total,
        onAddCartItem,
        onUpdateCartItem,
        onRemoveCartItem,
        onRemoveAll,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}
