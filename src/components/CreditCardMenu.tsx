import { CreditCard as CreditCardIcon } from "lucide-react-native";
import { Text, View } from "react-native";

import BBImg from "@/assets/banks/banco-do-brasil.png";
import BradescoImg from "@/assets/banks/bradesco.jpg";
import NubankImg from "@/assets/banks/nubank.png";
import { colors } from "@/styles/colors";

import CreditCard from "./CreditCard";

type Props = {
  isVisible: boolean;
};

export default function CreditCardMenu({ isVisible }: Props) {
  return (
    <View className="mb-8 min-h-56 w-[330px] rounded-3xl bg-gray-100 p-6 shadow-xl shadow-violet-500 ">
      <View className="flex flex-row items-center justify-between">
        <View className="flex flex-row items-center">
          <CreditCardIcon color={colors.gray[300]} size={20} />
          <Text className="ml-3 font-subtitle text-lg text-gray-300">
            Cartões
          </Text>
        </View>
      </View>
      <View className=" mb-4 mt-2 h-[1px] rounded-full bg-gray-200" />
      <View className="gap-4">
        <CreditCard
          uriImage={BradescoImg}
          bank="Bradesco"
          dueDate={10}
          currentValue={466}
          limitValue={1550}
        />
        <CreditCard
          uriImage={NubankImg}
          bank="Nubank"
          dueDate={20}
          currentValue={368}
          limitValue={1550}
        />
        <CreditCard
          uriImage={BBImg}
          bank="Banco do Brasil"
          dueDate={15}
          currentValue={948}
          limitValue={1550}
        />
      </View>
    </View>
  );
}
