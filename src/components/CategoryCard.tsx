import { Button, HStack, Icon, Text } from "native-base";
import { MaterialCommunityIcons } from "@expo/vector-icons";

type Props = {
  label: string;
  icon: any;
  isActive: boolean;
  onPress: () => void;
};

export function CategoryCard({ label, icon, isActive, onPress }: Props) {
  return (
    <Button
      variant='outline'
      isPressed={isActive}
      onPress={onPress}
      borderRadius='3xl'
      borderColor='gray.700'
      justifyContent='center'
      alignItems='center'
      mr={2}
      px={4}
      py={1}
      _pressed={{
        bgColor: isActive ? "green.400" : "transparent",
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
    </Button>
  );
}
