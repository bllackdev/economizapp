import { HStack, Heading, Icon, Text, VStack } from "native-base";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { CardProps } from "../domains/CardProps";
import { CATEGORIES } from "../utils/categories";

export function Card({ id, label, type, value, category, date }: CardProps) {
  function getColorIcon() {
    if (type === "up") {
      return "green.500";
    } else if (type === "down") {
      return "red.500";
    } else {
      return "violet.500"; 
    }
  }

  function getIcon() {
    if (category === CATEGORIES[0].label) {
      return CATEGORIES[0].icon;
    }
    return "progress-pencil";
  }

  return (
    <HStack
      justifyContent='space-between'
      alignItems='center'
      px={2}
      mb={2}
      w='full'
    >
      <HStack space={1} alignItems='center' justifyContent='center'>
        <Icon
          as={
            <MaterialCommunityIcons
              name={getIcon() as keyof typeof MaterialCommunityIcons.glyphMap}
            />
          }
          size='xl'
          color={getColorIcon()}
        />
        <VStack>
          <Heading size='xs'>{label}</Heading>
          <Text color='gray.500' fontSize='xs'>
            {category}
          </Text>
        </VStack>
      </HStack>
      <VStack justifyContent='space-between' alignItems='flex-end'>
        <Text color='gray.500' fontSize='xs'>
          {date}
        </Text>
        <Text color='gray.500' fontSize='xs' fontWeight='bold'>
          R$ {value},00
        </Text>
      </VStack>
    </HStack>
  );
}
