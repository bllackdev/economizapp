import { Divider, HStack, Heading, Image, Text, VStack } from "native-base";

type Props = {
  bankName?: string;
  closingDay?: number;
  invoiceValue?: number;
  limit?: number;
};

export function CreditCard({
  bankName,
  closingDay,
  invoiceValue,
  limit,
}: Props) {
  return (
    <VStack space={1} mb={2}>
      <HStack justifyContent='space-between' alignItems='center'>
        <HStack space={2} alignItems='center'>
          <Image
            source={require("../assets/banks/nubank.png")}
            alt='Logo do banco'
            style={{ width: 25, height: 25, borderRadius: 50 }}
          />
          <Heading size='xs'>NuBank</Heading>
        </HStack>
        <Text color='gray.500' fontSize='xs'>
          fechamento dia 14
        </Text>
      </HStack>
      <HStack justifyContent='space-between' alignItems='center' ml={0.5}>
        <Text color='gray.500' fontSize='xs' fontWeight='bold'>
          Fatura: R$ 2.000,00
        </Text>
        <Text color='gray.500' fontSize='xs'>
          Limite: R$ 8.000,00
        </Text>
      </HStack>
    </VStack>
  );
}
