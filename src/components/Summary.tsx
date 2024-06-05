import {
  Calculator,
  CalendarDays,
  CircleDollarSign,
  Eye,
  EyeOff,
  HandCoins,
} from "lucide-react-native";
import { Text, TouchableOpacity, View } from "react-native";

import { colors } from "@/styles/colors";

type Props = {
  isVisible: boolean;
  setIsVisible: React.Dispatch<React.SetStateAction<boolean>>;
};

export default function Summary({ isVisible, setIsVisible }: Props) {
  return (
    <View className="mb-8 min-h-56 w-[330px] rounded-3xl bg-gray-100 p-6 shadow-xl shadow-violet-500 ">
      <View className="flex flex-row items-center justify-between">
        <View className="flex flex-row items-center">
          <CalendarDays color={colors.gray[300]} size={20} />
          <Text className="ml-3 font-subtitle text-lg text-gray-300">
            Resumo de{" "}
          </Text>
          <Text className="font-heading text-lg text-gray-300">Junho</Text>
        </View>
        <TouchableOpacity
          onPress={() => {
            setIsVisible((prev) => !prev);
          }}
          className="rounded-xl bg-gray-200 p-1"
        >
          {isVisible ? (
            <EyeOff color={colors.gray[300]} size={24} strokeWidth={1.5} />
          ) : (
            <Eye color={colors.gray[300]} size={24} strokeWidth={1.5} />
          )}
        </TouchableOpacity>
      </View>
      <View className=" mb-4 mt-2 h-[1px] rounded-full bg-gray-200" />
      <View className="gap-4">
        <View className="flex flex-row items-center justify-between">
          <View className="min-w-36 max-w-40 items-center justify-center gap-3 rounded-2xl bg-red-300 px-4 py-3">
            <View className="flex flex-row items-center gap-3">
              <CircleDollarSign
                color={colors.red[700]}
                size={24}
                strokeWidth={1.5}
              />
              <Text className="font-body text-red-700">Despesas</Text>
            </View>
            <Text className="line-clamp-1 font-subtitle text-red-700">
              R$ {isVisible ? "2.000,24" : "****"}
            </Text>
          </View>
          <View className="min-w-36 max-w-40 items-center justify-center gap-3 rounded-2xl bg-green-300 px-4 py-3">
            <View className="flex flex-row items-center gap-3">
              <HandCoins
                color={colors.green[700]}
                size={24}
                strokeWidth={1.5}
              />
              <Text className="font-body text-green-700">Receitas</Text>
            </View>
            <Text className="line-clamp-1 font-subtitle text-green-700">
              R$ {isVisible ? "3.000,48" : "****"}
            </Text>
          </View>
        </View>
        <View className="items-center justify-center">
          <View className="min-w-36 max-w-80 items-center justify-center gap-3 rounded-2xl bg-violet-300 px-4 py-3">
            <View className="flex flex-row items-center gap-3">
              <Calculator
                color={colors.violet[500]}
                size={20}
                strokeWidth={1.5}
              />
              <Text className="font-body text-violet-500">SALDO</Text>
            </View>
            <Text className=" line-clamp-1 font-subtitle text-violet-500">
              R$ {isVisible ? "600,24" : "****"}
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
}
