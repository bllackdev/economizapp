import { Pressable } from "react-native";
import { IconButton, IIconButtonProps, Text, VStack } from "native-base";
import { MaterialCommunityIcons } from "@expo/vector-icons";

type Props = IIconButtonProps & {
  title: string;
  iconName: keyof typeof MaterialCommunityIcons.glyphMap;
  color: string;
};

export function MenuButton({ title, iconName, color, ...rest }: Props) {
  return (
    <Pressable
      style={{
        width: 100,
      }}
    >
      <VStack space={2} justifyContent="center" alignItems="center">
        <IconButton
          icon={<MaterialCommunityIcons name={iconName} size={36} color={color} />}
          padding={5}
          borderRadius={12}
          backgroundColor="gray.700"
          _pressed={{
            backgroundColor: "purple.500:alpha.40",
          }}
          {...rest}
        />
        <Text color="white" fontSize="xs" textAlign="center">
          {title}
        </Text>
      </VStack>
    </Pressable>
  );
}
