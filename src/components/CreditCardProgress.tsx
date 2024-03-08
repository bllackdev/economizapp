import { Pressable } from "react-native";
import { HStack, Heading, Image, Text, VStack } from "native-base";

import { Progress } from "./Progress";

type Props = {
  bankName?: string;
  closingDay?: number;
  invoiceValue?: number;
  limit?: number;
  onOpen: () => void;
};

export function CreditCardProgress({
  bankName,
  closingDay,
  invoiceValue,
  limit,
  onOpen,
}: Props) {
  return (
    <Pressable
      onPress={() => {
        onOpen();
      }}
      style={{
        marginBottom: 18,
      }}
    >
      <VStack p={4} borderRadius="xl" bgColor="gray.100">
        <HStack justifyContent="space-between" alignItems="center" mb={2}>
          <HStack space={2} alignItems="center">
            <Image
              source={require("../assets/banks/nubank.png")}
              alt="Logo do banco"
              style={{ width: 25, height: 25, borderRadius: 50 }}
            />
            <Heading size="xs">NuBank</Heading>
          </HStack>
          <Text color="gray.500" fontSize="xs">
            fechamento dia 14
          </Text>
        </HStack>
        <HStack justifyContent="flex-start" alignItems="center" ml={0.5}>
          <Text color="gray.500" fontSize="xs" fontWeight="bold">
            R$ 2.000,00
          </Text>
          <Progress />
          <Text color="gray.500" fontSize="xs">
            R$ 8.000,00
          </Text>
        </HStack>
      </VStack>
    </Pressable>
  );
}
