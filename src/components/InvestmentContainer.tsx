import { Divider, HStack, Heading, Icon, Text, VStack } from "native-base";
import { AntDesign } from "@expo/vector-icons";

import { InvestmentCard } from "./InvestmentCard";

type Props = {
  showValues: boolean;
};

export function InvestmentContainer({ showValues }: Props) {
  return (
    <VStack
      borderRadius='lg'
      borderWidth={1}
      borderColor='gray.900:alpha.40'
      p={2}
    >
      <HStack justifyContent='space-between' alignItems='center'>
        <Heading size='xs'>Investimentos</Heading>
        <Icon color='gray.900' as={<AntDesign name='linechart' size={24} />} />
      </HStack>

      <Divider color='gray.900' my={2} />

      <VStack space={2}>
        {/* FlatList */}
        <InvestmentCard showValues={showValues} />
      </VStack>
      {/* <HStack py={4} justifyContent='center' alignItems='center' >
        <Text color='gray.500' fontSize='sm' textAlign='center'>
          Nenhum investimento cadastrado.{'\n'}
          Invista e veja seu dinheiro render! 💸
        </Text>
      </HStack> */}
    </VStack>
  );
}
