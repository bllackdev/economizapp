import { ImageSourcePropType, Text, View } from "react-native";

import { Avatar, AvatarImage } from "./Avatar";
import { Progress } from "./Progress";

type Props = {
  uriImage: ImageSourcePropType | undefined;
  bank: string;
  dueDate: number;
  currentValue: number;
  limitValue: number;
  isVisible: boolean;
};

export default function CreditCard({
  uriImage,
  bank,
  currentValue,
  dueDate,
  limitValue,
  isVisible,
}: Props) {
  const percentValue = (currentValue * 100) / limitValue;
  const percentValueFormatted = Number(percentValue.toFixed(0));

  return (
    <View className="items-center gap-3 rounded-2xl border border-gray-200/50 p-3">
      <View className="flex w-full flex-row items-center justify-between">
        <View className="flex flex-row items-center gap-3">
          <Avatar className="h-8 w-8">
            <AvatarImage source={uriImage} />
          </Avatar>
          <Text className="font-subtitle text-lg text-gray-300">{bank}</Text>
        </View>
        <Text className="font-body text-sm text-gray-300">
          vencimento dia {dueDate}
        </Text>
      </View>
      <View className="flex flex-row items-center justify-between gap-3">
        <Text className="font-body text-sm text-gray-300">
          R$ {isVisible ? `${currentValue},00` : "****"}
        </Text>
        <View className="flex-1">
          <Progress value={percentValueFormatted} />
        </View>
        <Text className="font-body text-sm text-gray-300">
          R$ {isVisible ? `${limitValue},00` : "****"}
        </Text>
      </View>
    </View>
  );
}
