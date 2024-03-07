import { Pressable } from "react-native";
import { IconButton, Text, VStack } from "native-base";
import { MaterialCommunityIcons } from "@expo/vector-icons";

type Props = {
  title: string;
  icon: keyof typeof MaterialCommunityIcons.glyphMap;
  color: string;
};

export function MenuButton({ title, icon, color }: Props) {

  return (
    <Pressable
      onPress={() => {}}
      style={{
        width: 100,
      }}
    >
      <VStack space={2} justifyContent="center" alignItems="center">
        <IconButton
          icon={<MaterialCommunityIcons name={icon} size={36} color={color} />}
          padding={5}
          borderRadius={12}
          backgroundColor="gray.700"
          _pressed={{
            backgroundColor: "purple.500:alpha.40",
          }}
        />
        <Text color="white" fontSize="xs" textAlign='center'>
          {title}
        </Text>
      </VStack>
    </Pressable>
  );
}
