import { CircleDollarSign, CreditCard, HandCoins } from "lucide-react-native";
import { Text, TouchableOpacity, View } from "react-native";

import { colors } from "@/styles/colors";

export default function QuickMenu() {
  return (
    <View className="-mt-12 mb-3 flex w-[330px] flex-row items-center justify-around rounded-3xl bg-gray-50 px-6 py-3 shadow-xl shadow-violet-500">
      <View className="items-center justify-center">
        <TouchableOpacity
          onPress={() => {}}
          className="rounded-xl bg-red-300 p-2"
        >
          <CircleDollarSign
            color={colors.red[600]}
            size={24}
            strokeWidth={1.5}
          />
        </TouchableOpacity>
        <Text className="font-body text-sm text-gray-300">Despesa</Text>
      </View>
      <View className="h-10 w-[1px] rounded-full bg-gray-200" />
      <View className="items-center justify-center">
        <TouchableOpacity
          onPress={() => {}}
          className="rounded-xl bg-green-300 p-2"
        >
          <HandCoins color={colors.green[700]} size={24} strokeWidth={1.5} />
        </TouchableOpacity>
        <Text className="font-body text-sm text-gray-300">Receita</Text>
      </View>
      <View className="h-10 w-[1px] rounded-full bg-gray-200" />
      <View className="items-center justify-center">
        <TouchableOpacity
          onPress={() => {}}
          className="rounded-xl bg-violet-300 p-2"
        >
          <CreditCard color={colors.violet[500]} size={24} strokeWidth={1.5} />
        </TouchableOpacity>
        <Text className="font-body text-sm text-gray-300">Cartão</Text>
      </View>
    </View>
  );
}
