import { Menu } from "lucide-react-native";
import { Text, TouchableOpacity, View } from "react-native";

import { useAuth } from "@/contexts/auth";
import { colors } from "@/styles/colors";

import { Avatar, AvatarFallback, AvatarImage } from "./Avatar";

export default function Header() {
  const { user } = useAuth();

  return (
    <View className=" mb-2 flex w-full flex-row items-center justify-between">
      <View className="flex flex-row gap-3">
        <Avatar>
          <AvatarImage
            source={{ uri: "https://www.github.com/rapharenatoo.png" }}
          />
          <AvatarFallback>RR</AvatarFallback>
        </Avatar>
        <View className="justify-center">
          <Text className="font-body text-gray-200">Boas vindas,</Text>
          <Text className="font-body text-gray-200">Raphael Renato</Text>
        </View>
      </View>
      <TouchableOpacity onPress={() => {}}>
        <Menu color={colors.gray[200]} />
      </TouchableOpacity>
    </View>
  );
}
