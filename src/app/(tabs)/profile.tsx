import { Power } from "lucide-react-native";
import { Text, View } from "react-native";

import { Button } from "@/components/Button";
import { useAuth } from "@/contexts/auth";
import { colors } from "@/styles/colors";

export default function Profile() {
  const { signOut, user } = useAuth();

  return (
    <View className="flex-1 items-center justify-center bg-gray-600 px-8">
      <Text className="text-center font-heading text-3xl text-violet-500">
        Profile
      </Text>
      <Button
        label="Signout"
        className="m-10 bg-red-600"
        icon={<Power color={colors.white} size={18} />}
        onPress={() => {
          signOut();
        }}
      />
    </View>
  );
}
