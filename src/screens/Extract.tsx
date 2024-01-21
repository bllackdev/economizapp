import { useState } from "react";
import { Center, FlatList, HStack, Heading, Text, VStack } from "native-base";
import { CardProps } from "../domains/CardProps";

import { getLabelMonth } from "../functions/getLabelMonth";

import { Select } from "../components/Select";
import { Card } from "../components/Card";
import { Empty } from "../components/Empty";

import { MONTHS } from "../utils/months";
import { YEARS } from "../utils/years";
import { EXPENSES } from "../utils/expenses";

export function Extract() {
  const [year, setYear] = useState(new Date().getFullYear().toString());
  const [month, setMonth] = useState(
    getLabelMonth(new Date().getMonth().toString())
  );

  return (
    <VStack flex={1} bg='gray.900'>
      <Center w='full' p={8} pb={4}>
        <Heading color='violet.700' fontSize='xl' mb={6}>
          Extrato
        </Heading>
        <Select
          textColor='white'
          items={YEARS}
          placeholder='Ano'
          selectedValue={year}
          onValueChange={setYear}
        />
        <Select
          textColor='white'
          items={MONTHS}
          placeholder='Mês'
          selectedValue={month}
          onValueChange={setMonth}
        />
      </Center>
      <VStack flex={1} px={8} pt={4} bg='white' borderTopRadius='3xl'>
        <HStack justifyContent='space-between' alignItems='center' pb={2}>
          <Text color='emerald.500'>R$ 530,00</Text>
          <Text color='gray.900'>R$ 130,00</Text>
          <Text color='red.500'>R$ - 400,00</Text>
        </HStack>
        <FlatList
          data={EXPENSES[month]}
          initialNumToRender={2}
          maxToRenderPerBatch={2}
          keyExtractor={(item: CardProps) => item.id}
          showsVerticalScrollIndicator={false}
          renderItem={({ item }) => (
            <Card
              id={item.id}
              label={item.label}
              type={item.type}
              value={item.value}
              color={item.color}
              percent={item.percent}
              date={item.date}
            />
          )}
          ListEmptyComponent={<Empty />}
        />
      </VStack>
    </VStack>
  );
}
