import { useEffect, useState } from "react";
import { Center, FlatList, Heading, SectionList, VStack } from "native-base";
import { CardProps } from "../domains/CardProps";

import { Select } from "../components/Select";
import { Card } from "../components/Card";
import { Empty } from "../components/Empty";

import { MONTHS, MonthsProps } from "../utils/months";
import { YEARS } from "../utils/years";
import { EXPENSES, EXPENSES1 } from "../utils/expenses";
import { getLabelMonth } from "../functions/getLabelMonth";

export function Extract() {
  const [year, setYear] = useState(new Date().getFullYear().toString());
  const [month, setMonth] = useState(getLabelMonth(new Date().getMonth().toString()));
  const [data, setData] = useState<CardProps[]>([]);


  return (
    <VStack flex={1} bg='gray.200'>
      <Center bg='gray.900' w='full' p={8} pb={4}>
        <Heading color='green.700' fontSize='xl' mb={6}>
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
      <VStack flex={1} px={8} py={4}>
        <FlatList
          data={EXPENSES[month]}
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
