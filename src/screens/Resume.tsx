import { Heading, VStack } from "native-base";

export function Resume() {
  return (
    <VStack flex={1} bg='gray.900'>
      <VStack w='full' p={8} justifyContent='center' alignItems='center'>
        <Heading color='violet.700' fontSize='xl'>
          Resumo
        </Heading>
      </VStack>
      <VStack flex={1} px={8} py={4} bg='white' borderTopRadius='3xl'></VStack>
    </VStack>
  );
}
