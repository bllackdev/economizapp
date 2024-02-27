import { HStack, Heading, Text, VStack } from "native-base";

type Props = {
  month: string;
  income: number;
  expense: number;
};

export function Totalizer({ month, income, expense }: Props) {
  return (
    <HStack flex={1} justifyContent='space-between'>
      <Heading size='sm' w={20} color="gray.900">{month}: </Heading>
      <Text color='emerald.500'>R$ {income},00</Text>
      <Text color='red.500'>R$ {expense},00</Text>
    </HStack>
  );
}
