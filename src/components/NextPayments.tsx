import { ChevronRight, CircleDollarSign, Ellipsis } from "lucide-react-native";
import { Text, TouchableOpacity, View } from "react-native";

import { colors } from "@/styles/colors";

import Payment from "./Payment";

type Props = {
  isVisible: boolean;
};

export default function NextPayments({ isVisible }: Props) {
  return (
    <View className="mb-8 h-auto min-h-56 w-[330px] rounded-3xl bg-gray-50 p-6 shadow-xl shadow-violet-500">
      <View className="flex flex-row items-center justify-between">
        <View className="flex flex-row items-center">
          <CircleDollarSign color={colors.gray[300]} size={20} />
          <Text className="ml-3 font-subtitle text-lg text-gray-300">
            Próximos pagamentos
          </Text>
        </View>
        <TouchableOpacity
          onPress={() => {}}
          className="rounded-xl bg-gray-100 p-2"
        >
          <ChevronRight color={colors.gray[300]} size={18} strokeWidth={1.5} />
        </TouchableOpacity>
      </View>
      <View className="mb-4 mt-2 h-[1px] rounded-full bg-gray-200" />
      <View className="gap-3">
        <Payment
          label="Energia Elétrica"
          dueDate="10/07"
          value={134}
          category="Moradia"
          isVisible={isVisible}
        />

        <Payment
          label="Depilação Laser"
          dueDate="22/08"
          value={85}
          category="Lazer"
          isVisible={isVisible}
        />
        <View className="w-full items-center justify-center">
          <Ellipsis color={colors.gray[200]} size={28} strokeWidth={1.5} />
        </View>
      </View>
    </View>
  );
}
