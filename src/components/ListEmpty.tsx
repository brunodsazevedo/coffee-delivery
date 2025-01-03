import { ReactNode } from 'react'
import { Text, View } from 'react-native'

type Props = {
  message?: string
  children?: ReactNode
}

export function ListEmpty({ message, children }: Props) {
  return (
    <View className="flex-1 items-center justify-center">
      {message && (
        <Text className="font-bold text-center text-neutral-600">
          {message}
        </Text>
      )}

      {children}
    </View>
  )
}
