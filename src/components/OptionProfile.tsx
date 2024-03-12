import { Pressable, PressableProps } from "react-native";
import { HStack, Icon, Text } from "native-base";
import { FontAwesome } from "@expo/vector-icons";

type Props = PressableProps & {
  label: string;
  icon: keyof typeof FontAwesome.glyphMap;
};

export function OptionProfile({ label, icon, ...rest }: Props) {
  return (
    <Pressable
      onPress={() => {}}
      style={{
        marginBottom: 16,
      }}
      {...rest}
    >
      <HStack space={4} alignItems="center">
        <Icon as={FontAwesome} name={icon} color="gray.800" size={6} />
        <Text fontSize="sm" color="gray.800" fontWeight="semibold">
          {label}
        </Text>
      </HStack>
    </Pressable>
  );
}
