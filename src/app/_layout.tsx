import { Stack } from 'expo-router'

import '@/theme/global.css'

export default function RootLayout() {
  return (
    <Stack
      screenOptions={{
        headerShown: false,
      }}
    />
  )
}
