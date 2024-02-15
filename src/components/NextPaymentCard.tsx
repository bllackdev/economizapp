import { HStack, Heading, Icon, Image, Text, VStack } from "native-base";
import { MaterialCommunityIcons } from "@expo/vector-icons";

type Props = {
  name?: string;
  category?: string;
  iconCategory?: string;
  date?: string;
  price?: string;
  showValues: boolean;
};

export function NextPaymentCard({
  name,
  category,
  iconCategory,
  date,
  price,
  showValues,
}: Props) {
  return (
    <HStack justifyContent='space-between' alignItems='center' px={2} mb={2}>
      <HStack space={1} alignItems='center' justifyContent='center'>
        <Icon
          as={<MaterialCommunityIcons name='food' />}
          size='xl'
          color='violet.500'
        />
        <VStack>
          <Heading size='xs'>Mercado</Heading>
          <Text color='gray.500' fontSize='xs'>
            Alimentação
          </Text>
        </VStack>
      </HStack>
      <VStack justifyContent='space-between' alignItems='flex-end'>
        <Text color='gray.500' fontSize='xs'>
          20/02/2024
        </Text>
        <Text color='gray.500' fontSize='xs' fontWeight='bold'>
          R$ {showValues ? "2.000,00" : "--"}
        </Text>
      </VStack>
    </HStack>
  );
}
