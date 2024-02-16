import { Divider, HStack, Heading, Icon, Text, VStack } from "native-base";
import { AntDesign } from "@expo/vector-icons";

import { CreditCard } from "./CreditCard";

type Props = {
  showValues: boolean;
};

export function CreditCardsContainer({ showValues }: Props) {
  return (
    <VStack
      borderRadius='lg'
      borderWidth={1}
      borderColor='gray.900:alpha.40'
      p={2}
      mb={3}
    >
      <HStack justifyContent='space-between' alignItems='center'>
        <Heading fontSize='xs'>Cartões de crédito</Heading>
        <Icon color='gray.900' as={<AntDesign name='creditcard' size={24} />} />
      </HStack>

      <Divider color='gray.900' my={2} />

      <VStack space={2}>
        {/* FlatList */}
        <CreditCard showValues={showValues} />
      </VStack>
      {/* <HStack py={4} justifyContent='center' alignItems='center' >
        <Text color='gray.500' fontSize='sm' textAlign='center'>
          Nenhum cartão cadastrado.{'\n'}
          Cadastre e controle suas faturas! 💳
        </Text>
      </HStack> */}
    </VStack>
  );
}
