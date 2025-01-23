import { useEffect } from 'react'
import { SplashScreen, Stack } from 'expo-router'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import { GestureHandlerRootView } from 'react-native-gesture-handler'
import {
  useFonts,
  Roboto_400Regular,
  Roboto_700Bold,
} from '@expo-google-fonts/roboto'
import { Baloo2_700Bold } from '@expo-google-fonts/baloo-2'
import Toast from 'react-native-toast-message'

import { CartProvider } from '@/contexts/CartContext'

import { toastConfig } from '@/components/Toast'

import '@/theme/global.css'

SplashScreen.preventAutoHideAsync()

export default function RootLayout() {
  const [loaded, error] = useFonts({
    Roboto_400Regular,
    Roboto_700Bold,
    Baloo2_700Bold,
  })

  useEffect(() => {
    if (loaded || error) {
      SplashScreen.hideAsync()
    }
  }, [loaded, error])

  if (!loaded && !error) {
    return null
  }

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <SafeAreaProvider>
        <CartProvider>
          <Stack
            screenOptions={{
              headerShown: false,
            }}
          />

          <Toast
            config={toastConfig}
            bottomOffset={0}
            position="bottom"
            visibilityTime={3000}
          />
        </CartProvider>
      </SafeAreaProvider>
    </GestureHandlerRootView>
  )
}
