import { View } from "react-native";

import { Button } from "@/components/Button";
import IconButton from "@/components/IconButton";
import PlusIcon from '@/assets/icons/plus.svg'

export default function Page() {
  return (
    <View className="flex-1 items-center justify-center space-y-4">
      <View className="w-full p-10">
        <Button title="Button" />
      </View>

      <View className="w-full p-10">
        <IconButton icon={PlusIcon} iconSize={24} iconColor="red" />
      </View>
    </View>
  );
}
