import { Divider, HStack, Heading, Icon, Text, VStack } from "native-base";
import { MaterialIcons } from "@expo/vector-icons";

import { NextPaymentCard } from "./NextPaymentCard";

type Props = {
  showValues: boolean;
};

export function NextPayments({ showValues }: Props) {
  return (
    <VStack
      borderRadius='lg'
      borderWidth={1}
      borderColor='gray.900:alpha.40'
      p={2}
      mb={8}
    >
      <HStack justifyContent='space-between' alignItems='center'>
        <Heading size='xs'>Próximos pagamentos</Heading>
        <Icon color='gray.900' as={<MaterialIcons name='payments' size={24} />} />
      </HStack>

      <Divider color='gray.900' my={2} />

      <VStack space={2} mt={1}>
        <NextPaymentCard showValues={showValues} />
      </VStack>
      {/* <HStack pt={3} justifyContent='center' alignItems='center' >
        <Text color='gray.500' fontSize='sm' textAlign='center'>
          Nenhum pagamento cadastrado.{'\n'}
        </Text>
      </HStack> */}
    </VStack>
  );
}
