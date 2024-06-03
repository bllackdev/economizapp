import { useState } from "react";

import {
  CalendarDays,
  CircleDollarSign,
  CreditCard,
  Eye,
  EyeOff,
  PiggyBank,
} from "lucide-react-native";
import { Text, TouchableOpacity, View } from "react-native";

import Header from "@/components/Header";
import { colors } from "@/styles/colors";

export default function Home() {
  const [isVisible, setIsVisible] = useState(false);
  return (
    <View className="flex-1 items-center bg-gray-100">
      <View className="items-center rounded-b-2xl bg-gray-600 px-8 pt-12">
        <Header />
      </View>

      <View className="w-full flex-1 items-center bg-gray-100 px-8 pt-3 ">
        <View className="-mt-12 mb-8 flex w-[330px] flex-row items-center justify-around rounded-3xl bg-gray-100 px-6 py-3 shadow-xl shadow-violet-500">
          <View className="items-center justify-center">
            <TouchableOpacity
              onPress={() => {}}
              className="rounded-xl bg-red-300 p-2"
            >
              <CircleDollarSign color={colors.red[600]} size={24} />
            </TouchableOpacity>
            <Text className="font-body text-sm text-gray-300">Despesa</Text>
          </View>
          <View className="h-10 w-[1px] rounded-full bg-gray-200" />
          <View className="items-center justify-center">
            <TouchableOpacity
              onPress={() => {}}
              className="rounded-xl bg-green-300 p-2"
            >
              <PiggyBank color={colors.green[700]} size={24} />
            </TouchableOpacity>
            <Text className="font-body text-sm text-gray-300">Receita</Text>
          </View>
          <View className="h-10 w-[1px] rounded-full bg-gray-200" />
          <View className="items-center justify-center">
            <TouchableOpacity
              onPress={() => {}}
              className="rounded-xl bg-violet-300 p-2"
            >
              <CreditCard color={colors.violet[500]} size={24} />
            </TouchableOpacity>
            <Text className="font-body text-sm text-gray-300">Cartão</Text>
          </View>
        </View>

        <View className="min-h-56 w-[330px] rounded-3xl bg-gray-100 p-6 shadow-xl shadow-violet-500 ">
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
                <EyeOff color={colors.gray[300]} size={24} />
              ) : (
                <Eye color={colors.gray[300]} size={24} />
              )}
            </TouchableOpacity>
          </View>
          <View className=" mb-4 mt-2 h-[1px] rounded-full bg-gray-200" />
          <View className="gap-4">
            <View className="flex flex-row justify-between gap-3 rounded-3xl bg-green-300 p-2">
              <Text className=" font-body text-green-700">Receitas</Text>
              <Text className=" font-subtitle text-green-700">R$ 3.000,48</Text>
            </View>
            <View className="flex flex-row justify-between gap-3 rounded-3xl bg-red-300 p-2">
              <Text className=" font-body text-red-700">Despesas</Text>
              <Text className=" font-subtitle text-red-700">R$ 2.400,24</Text>
            </View>
            <View className="flex flex-row justify-between gap-3 rounded-3xl bg-gray-200 p-2">
              <Text className=" font-body text-gray-700">Saldo</Text>
              <Text className=" font-subtitle text-gray-700">R$ 600,24</Text>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
}
