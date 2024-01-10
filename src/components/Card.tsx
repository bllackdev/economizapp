import { HStack, Heading, Icon, Text, VStack } from "native-base";
import { FontAwesome } from "@expo/vector-icons";

export function Card() {
  return (
    <VStack w='full' bg='white' p='4' mt='3' borderRadius='xl' shadow='1' style={{
        shadowRadius: 8,
        
    }}>
      <VStack>
        <Heading color='gray.900' fontSize='md'>Desenvolvimento de site</Heading>
        <Text color='emerald.500' fontSize='md'>R$ 12.000,00</Text>
      </VStack>
      <HStack justifyContent='space-between' mt='2'>
        <HStack justifyContent='center' alignItems='center'>
          <Icon
            as={<FontAwesome name='dollar' size={16} color='black' />}
            color='gray.700'
          />
          <Text color='gray.700' fontSize='xs'>Vendas</Text>
        </HStack>
        <Text color='gray.700' fontSize='xs'>13/04/2020</Text>
      </HStack>
    </VStack>
  );
}
