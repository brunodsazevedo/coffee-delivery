import { SplashScreen, Stack } from 'expo-router'
import { GestureHandlerRootView } from 'react-native-gesture-handler'
import {
  useFonts,
  Roboto_400Regular,
  Roboto_700Bold,
} from '@expo-google-fonts/roboto'
import { Baloo2_700Bold } from '@expo-google-fonts/baloo-2'

import '@/theme/global.css'
import { useEffect } from 'react'

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
      <Stack
        screenOptions={{
          headerShown: false,
        }}
      />
    </GestureHandlerRootView>
  )
}
