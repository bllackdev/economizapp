import { Pressable } from "react-native";
import { HStack, Icon, Text, useToken } from "native-base";
import { MaterialCommunityIcons } from "@expo/vector-icons";

type Props = {
  label: string;
  icon: any;
  isActive: boolean;
  onPress: () => void;
};

export function CategoryCard({ label, icon, isActive, onPress }: Props) {
  const gray700 = useToken("colors", "gray.700");
  const green400 = useToken("colors", "green.400");

  return (
    <Pressable
      onPress={onPress}
      style={{
        borderRadius: 50,
        borderColor: gray700,
        justifyContent: "center",
        alignItems: "center",
        marginRight: 8,
        paddingHorizontal: 12,
        paddingVertical: 6,
        backgroundColor: isActive ? green400 : "transparent",
        borderWidth: isActive ? 0 : 1,
      }}
    >
      <HStack space={1} justifyContent='center' alignContent='center'>
        <Icon
          as={<MaterialCommunityIcons name={icon} />}
          size='sm'
          color='gray.700'
        />
        <Text fontSize='2xs' color='gray.700'>
          {label}
        </Text>
      </HStack>
    </Pressable>
  );
}
