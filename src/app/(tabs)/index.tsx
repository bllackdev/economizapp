import { Text, View } from "react-native";

import Header from "@/components/Header";

export default function Home() {
  return (
    <View className="flex-1 items-center bg-gray-600 px-8 pt-12">
      <Header />
      <Text className="text-center font-heading text-3xl text-violet-500">
        Home
      </Text>
    </View>
  );
}
