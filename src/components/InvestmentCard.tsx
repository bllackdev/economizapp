import { HStack, Heading, Icon, Text, VStack } from "native-base";
import { Entypo } from "@expo/vector-icons";

type Props = {
  showValues: boolean;
};

export function InvestmentCard({ showValues }: Props) {
  return (
    <VStack space={1} mb={2} px={2}>
      <HStack justifyContent='space-between' alignItems='center'>
        <HStack space={1} alignItems='center' justifyContent='center'>
          <Icon
            color='emerald.500'
            size='md'
            as={<Entypo name='bar-graph' />}
          />
          <Heading size='xs'>CDBs</Heading>
        </HStack>
        <Text color='gray.500' fontSize='xs'>
          R$ {showValues ? "2.000,00" : "--"}
        </Text>
      </HStack>
      {/* <HStack justifyContent='space-between' alignItems='center' ml={0.5}>
        <Text color='gray.500' fontSize='xs' fontWeight='bold'>
          Valor atual: R$ 8.000,00
        </Text>
      </HStack> */}
    </VStack>
  );
}
