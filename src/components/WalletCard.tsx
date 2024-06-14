import { Text, TouchableOpacity, View } from "react-native";

import { cn } from "@/lib/utils";

import { Card, CardContent, CardHeader } from "./Card";

type Props = {
  icon: any;
  title: string;
  description: string;
  className?: string;
  border?: string;
  onPress: () => void;
};

export default function WalletCard({
  icon,
  title,
  description,
  className,
  border,
  onPress,
}: Props) {
  return (
    <TouchableOpacity onPress={onPress}>
      <Card
        className={cn(
          "min-w-[290px] max-w-[300px] items-center justify-center rounded-3xl border border-gray-200 bg-gray-50",
          border,
        )}
      >
        <CardHeader>
          <View className="flex flex-row items-center justify-center gap-3">
            {icon}
            <Text className={cn("font-heading text-2xl", className)}>
              {title}
            </Text>
          </View>
        </CardHeader>
        <CardContent>
          <Text className="text-center font-body text-lg text-gray-300">
            {description}
          </Text>
        </CardContent>
      </Card>
    </TouchableOpacity>
  );
}
