import { Divider, HStack, Heading, Icon, VStack } from "native-base";
import { AntDesign } from "@expo/vector-icons";
import { CreditCard } from "./CreditCard";

export function CreditCardsContainer() {
  return (
    <VStack
      borderRadius='lg'
      borderWidth={1}
      borderColor='gray.900:alpha.40'
      p={2}
    >
      <HStack justifyContent='space-between' alignItems='center'>
        <Heading size='xs'>Cartões de crédito</Heading>
        <Icon color='gray.900' as={<AntDesign name='creditcard' size={24} />} />
      </HStack>

      <Divider color='gray.900' my={2} />

      <VStack space={2}>
        {/* FlatList */}
        <CreditCard />
      </VStack>
    </VStack>
  );
}
