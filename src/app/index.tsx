import { Text, View } from "react-native";

export default function Page() {
  return (
    <View className="flex-1 items-center p-6">
      <View className="flex-1 justify-center">
        <Text className="font-heading text-6xl">Hello World</Text>
        <Text className="font-body text-4xl text-neutral-600">This is the first page of your app.</Text>
      </View>
    </View>
  );
}
