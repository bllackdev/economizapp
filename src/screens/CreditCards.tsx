import { Text, VStack } from "native-base";

export function CreditCards() {
  return (
    <VStack flex={1} bg='gray.900'>
      <VStack
        w='full'
        px={8}
        py={5}
        justifyContent='center'
        alignItems='center'
      >
        <Text color='white' fontWeight='bold' fontSize='2xl'>
          Cartão de Crédito
        </Text>
      </VStack>
      <VStack flex={1} px={8} bg='white' borderTopRadius='3xl'>
        <VStack flex={1} justifyContent='center' alignItems='center'>
          <Text color='gray.500' fontSize='xl'>
            Em breve...
          </Text>
        </VStack>
      </VStack>
    </VStack>
  );
}
