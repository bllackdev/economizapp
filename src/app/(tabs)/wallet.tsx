import { router } from "expo-router";
import {
  CircleDollarSign,
  CreditCard,
  Goal,
  HandCoins,
  Wallet as WalletIcon,
} from "lucide-react-native";
import { ScrollView, Text, View } from "react-native";

import WalletCard from "@/components/WalletCard";
import { colors } from "@/styles/colors";

export default function Wallet() {
  return (
    <View className="flex-1 items-center bg-gray-100">
      <View className="flex w-full flex-row items-center justify-start gap-2 rounded-b-2xl bg-gray-600 px-8 pb-12 pt-14">
        <WalletIcon color={colors.violet[500]} size={40} strokeWidth={1.5} />
        <View className="items-start justify-center">
          <Text className="font-body text-base text-violet-500">minha</Text>
          <Text className="font-heading text-2xl text-violet-500">
            Carteira
          </Text>
        </View>
      </View>

      <View className="mt-8 w-full flex-1 items-center justify-center px-8">
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{
            width: "100%",
            alignItems: "center",
            justifyContent: "center",
            gap: 18,
          }}
        >
          <WalletCard
            className="text-red-600"
            border="border-red-600"
            icon={
              <CircleDollarSign
                color={colors.red[600]}
                size={28}
                strokeWidth={2}
              />
            }
            title="Despesas"
            description="Controle seus gastos e veja para onde seu dinheiro está indo."
            onPress={() => {
              router.navigate("/expenses");
            }}
          />
          <WalletCard
            className="text-green-600"
            border="border-green-600"
            icon={
              <HandCoins color={colors.green[600]} size={28} strokeWidth={2} />
            }
            title="Receitas"
            description="Acompanhe todas as suas fontes de renda em um só lugar."
            onPress={() => {
              router.navigate("/revenue");
            }}
          />
          <WalletCard
            className="text-violet-600"
            border="border-violet-600"
            icon={
              <CreditCard
                color={colors.violet[600]}
                size={28}
                strokeWidth={2}
              />
            }
            title="Cartões"
            description="Veja o saldo e as transações de todos os seus cartões rapidamente."
            onPress={() => {
              router.navigate("/credit-cards");
            }}
          />
          <WalletCard
            className="text-blue-600"
            border="border-blue-600"
            icon={<Goal color={colors.blue[600]} size={28} strokeWidth={2} />}
            title="Metas"
            description="Economize de forma eficaz definindo e alcançando suas metas."
            onPress={() => {
              router.navigate("/goals");
            }}
          />
        </ScrollView>
      </View>
    </View>
  );
}
