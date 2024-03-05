import { Pressable } from "react-native";
import { Text, VStack, useToken } from "native-base";
import { MaterialCommunityIcons } from "@expo/vector-icons";

type Props = {
  title: string;
  icon: keyof typeof MaterialCommunityIcons.glyphMap;
  color: string;
};

export function MenuButton({ title, icon, color }: Props) {
  const gray700 = useToken("colors", "gray.700");
  const green400 = useToken("colors", "green.500");

  return (
    <Pressable
      onPress={() => {}}
      style={{
        width: 100,
      }}
    >
      <VStack space={2} justifyContent="center" alignItems="center">
        <MaterialCommunityIcons
          name={icon}
          size={36}
          color={color}
          style={{
            padding: 20,
            borderRadius: 12,
            backgroundColor: gray700,
          }}
        />
        <Text color="white" fontSize="xs">
          {title}
        </Text>
      </VStack>
    </Pressable>
  );
}
