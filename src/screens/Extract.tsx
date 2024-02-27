import { useState } from "react";
import {
  Center,
  Divider,
  FlatList,
  HStack,
  Heading,
  ScrollView,
  Stack,
  Text,
  VStack,
} from "native-base";
import { CardProps } from "../domains/CardProps";

import { getLabelMonth } from "../functions/getLabelMonth";

import { Select } from "../components/Select";
import { Card } from "../components/Card";
import { Empty } from "../components/Empty";

import { MONTHS, MONTHS_ENUM, MonthsProps } from "../utils/months";
import { YEARS } from "../utils/years";
import { EXPENSES } from "../utils/expenses";
import { MonthCard } from "../components/MonthCard";
import { CATEGORIES, CATEGORIES_ENUM } from "../utils/categories";
import { Category } from "../components/Category";
import { CategoryCard } from "../components/CategoryCard";

type MonthProps = {
  label: string;
  value: string;
};

type CategoryProps = {
  label: string;
  value: string;
  icon?: string;
};

export function Extract() {
  const [year, setYear] = useState(new Date().getFullYear().toString());

  const [selectedMonth, setSelectedMonth] = useState(
    getLabelMonth(new Date().getMonth().toString())
  );
  const [selectedCategory, setSelectedCategory] = useState("Todos");

  function handleSelectedMonth(month: string) {
    setSelectedMonth(month);
  }

  function handleSelectedCategory(category: string) {
    setSelectedCategory(category);
  }

  return (
    <VStack flex={1} bg='gray.900'>
      <VStack
        w='full'
        px={8}
        py={4}
        justifyContent='center'
        alignItems='center'
        borderRadius='3xl'
      >
        <Text color='white' fontSize='sm'>
          Consulte os extratos dos seus
        </Text>
        <Heading color='white' fontSize='lg'>
          Lançamentos
        </Heading>
      </VStack>
      <HStack
        justifyContent='center'
        alignItems='center'
        px={8}
        py={4}
        bg='gray.900'
      >
        <FlatList
          data={MONTHS}
          keyExtractor={(item: MonthProps) => item.value}
          horizontal
          showsHorizontalScrollIndicator={false}
          renderItem={({ item }) => (
            <MonthCard
              label={item.label}
              isActive={selectedMonth === item.label}
              onPress={() => handleSelectedMonth(item.label)}
            />
          )}
        />
      </HStack>

      <VStack flex={1} bg='white' borderTopRadius='3xl'>
        <HStack justifyContent='center' alignItems='center' px={8} py={6}>
          <FlatList
            data={CATEGORIES}
            keyExtractor={(item: CategoryProps) => item.value}
            horizontal
            showsHorizontalScrollIndicator={false}
            renderItem={({ item }) => (
              <CategoryCard
                label={item.label}
                icon={item.icon}
                isActive={selectedCategory === item.label}
                onPress={() => handleSelectedCategory(item.label)}
              />
            )}
          />
        </HStack>
        <ScrollView flex={1} px={5} pb={8} showsVerticalScrollIndicator={false}>
          <Card
            id='1'
            label='Mercado'
            type='down'
            category={CATEGORIES_ENUM.ALIMENTAÇÃO}
            value={2000.0}
            date='20/02/2024'
          />
          <Divider mb={2} w='72' />
          <Card
            id='2'
            label='Investimento CDB'
            type='invest'
            category={CATEGORIES_ENUM.OUTROS}
            value={2000.0}
            date='20/02/2024'
          />
          <Divider mb={2} w='72' />
          <Card
            id='3'
            label='Salário'
            type='up'
            category={CATEGORIES_ENUM.OUTROS}
            value={2000.0}
            date='20/02/2024'
          />
          <Divider mb={2} w='72' />
          <Card
            id='1'
            label='Mercado'
            type='down'
            category={CATEGORIES_ENUM.ALIMENTAÇÃO}
            value={2000.0}
            date='20/02/2024'
          />
          <Divider mb={2} w='72' />
          <Card
            id='2'
            label='Investimento CDB'
            type='invest'
            category={CATEGORIES_ENUM.OUTROS}
            value={2000.0}
            date='20/02/2024'
          />
          <Divider mb={2} w='72' />
          <Card
            id='3'
            label='Salário'
            type='up'
            category={CATEGORIES_ENUM.OUTROS}
            value={2000.0}
            date='20/02/2024'
          />
          <Divider mb={2} w='72' />
          <Card
            id='1'
            label='Mercado'
            type='down'
            category={CATEGORIES_ENUM.ALIMENTAÇÃO}
            value={2000.0}
            date='20/02/2024'
          />
          <Divider mb={2} w='72' />
          <Card
            id='2'
            label='Investimento CDB'
            type='invest'
            category={CATEGORIES_ENUM.OUTROS}
            value={2000.0}
            date='20/02/2024'
          />
          <Divider mb={2} w='72' />
          <Card
            id='3'
            label='Salário'
            type='up'
            category={CATEGORIES_ENUM.OUTROS}
            value={2000.0}
            date='20/02/2024'
          />
          <Divider mb={2} w='72' />
          <Card
            id='1'
            label='Mercado'
            type='down'
            category={CATEGORIES_ENUM.ALIMENTAÇÃO}
            value={2000.0}
            date='20/02/2024'
          />
          <Divider mb={2} w='72' />
          <Card
            id='2'
            label='Investimento CDB'
            type='invest'
            category={CATEGORIES_ENUM.OUTROS}
            value={2000.0}
            date='20/02/2024'
          />
          <Divider mb={2} w='72' />
          <Card
            id='3'
            label='Salário'
            type='up'
            category={CATEGORIES_ENUM.OUTROS}
            value={2000.0}
            date='20/02/2024'
          />
        </ScrollView>
      </VStack>
    </VStack>
  );
}
