import { useEffect, useState } from "react";
import {
  Center,
  FlatList,
  Heading,
  Icon,
  ScrollView,
  VStack,
} from "native-base";
import {
  VictoryBar,
  VictoryChart,
  VictoryGroup,
  VictoryPie,
  VictoryTooltip,
} from "victory-native";
import { CardProps } from "../domains/CardProps";
import { FontAwesome } from "@expo/vector-icons";

import { MONTHS, MONTHS_TOTALIZER, MonthsProps } from "../utils/months";
import { EXPENSES } from "../utils/expenses";

import { Select } from "../components/Select";
import { Category } from "../components/Category";
import { Totalizer } from "../components/Totalizer";
import { TotalizerProps } from "../domains/TotalizerProps";
import { Input } from "../components/Input";
import { Button } from "../components/Button";
import { color } from "native-base/lib/typescript/theme/styled-system";

export function Resume() {
  const [selected, setSelected] = useState("");
  const [month, setMonth] = useState<MonthsProps>("Janeiro");
  const [data, setData] = useState<CardProps[]>([]);

  const colors = {
    emerald: "#10b981",
    red: "#ef4444",
    violet: "#6d28d9",
  };

  function handleCardOnPress(id: string) {
    setSelected((prev) => (prev === id ? "" : id));
  }

  useEffect(() => {
    setData(EXPENSES[month]);
  }, [month]);

  return (
    <VStack flex={1} bg='gray.900'>
      <VStack w='full' p={8} pb={5} justifyContent='center' alignItems='center'>
        <Heading color='violet.700' fontSize='xl' mb={6}>
          Resumo
        </Heading>
        <Input
          placeholder='Pesquisar pelo Ano'
          keyboardType="numeric"
          color='white'
          InputRightElement={
            <Button 
            pl={8}
            bgColor="violet.500"
            pressedBgColor="violet.700"
            borderLeftRadius="none"
            borderRightRadius="md"
            icon={<Icon as={<FontAwesome name='search' />} />} />
          }
        />
      </VStack>
      <VStack flex={1} px={8} bg='white' borderTopRadius='3xl'>
        <Center h={200} w='full' mb={12} mt={9}>
          <VictoryChart>
            <VictoryGroup
              offset={5}
              colorScale={[colors.emerald, colors.red]}
              animate={{
                duration: 2000,
                onLoad: { duration: 1000 },
              }}
              domain={{ x: [1, 12] }}
            >
              <VictoryBar
                data={[
                  { x: 1, y: 20 },
                  { x: 2, y: 20 },
                  { x: 3, y: 30 },
                  { x: 4, y: 40 },
                  { x: 5, y: 50 },
                  { x: 6, y: 60 },
                  { x: 7, y: 70 },
                  { x: 8, y: 80 },
                  { x: 9, y: 90 },
                  { x: 10, y: 100 },
                  { x: 11, y: 110 },
                  { x: 12, y: 140 },
                ]}
              />
              <VictoryBar
                data={[
                  { x: 1, y: 15 },
                  { x: 2, y: 10 },
                  { x: 3, y: 20 },
                  { x: 4, y: 30 },
                  { x: 5, y: 40 },
                  { x: 6, y: 50 },
                  { x: 7, y: 60 },
                  { x: 8, y: 70 },
                  { x: 9, y: 80 },
                  { x: 10, y: 90 },
                  { x: 11, y: 100 },
                  { x: 12, y: 120 },
                ]}
              />
            </VictoryGroup>
          </VictoryChart>
        </Center>
        <FlatList
          data={MONTHS_TOTALIZER}
          keyExtractor={(item: TotalizerProps) => item.month}
          showsVerticalScrollIndicator={false}
          ItemSeparatorComponent={() => <Center h={1} w='full' bg='gray.200' />}
          renderItem={({ item }) => (
            <Totalizer
              month={item.month}
              income={item.income}
              expense={item.expense}
            />
          )}
        />
      </VStack>
    </VStack>
  );
}
