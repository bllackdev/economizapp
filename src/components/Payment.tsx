import { CircleDollarSign } from "lucide-react-native";
import { Text, View } from "react-native";

import { colors } from "@/styles/colors";

type Props = {
  label: string;
  dueDate: string;
  value: number;
  category: string;
  isVisible: boolean;
};

export default function Payment({
  label,
  value,
  dueDate,
  category,
  isVisible,
}: Props) {
  return (
    <View className="items-center gap-3 rounded-2xl border border-gray-200/50 p-3">
      <View className="flex w-full flex-row items-center justify-between gap-2">
        <View className="items-center justify-center gap-3">
          <CircleDollarSign
            color={colors.red[700]}
            size={28}
            strokeWidth={1.5}
          />
        </View>
        <View className=" flex-1 items-center">
          <View className="flex w-full flex-row items-center justify-between">
            <Text className="font-subtitle text-lg text-gray-300">{label}</Text>
            <Text className="font-body text-sm text-gray-300">
              pagar até {dueDate}
            </Text>
          </View>
          <View className="flex w-full flex-row items-center justify-between">
            <Text className="font-body text-sm text-gray-300">{category}</Text>
            <Text className="font-subtitle text-base text-gray-300">
              R$ {isVisible ? `${value},00` : "****"}
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
}
