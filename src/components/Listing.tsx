import { useState } from "react";
import {
  Heading,
  VStack,
  Button,
  Icon,
  FlatList,
} from "native-base";
import { AntDesign } from "@expo/vector-icons";
import { getLabelMonth } from "../functions/getLabelMonth";
import { EXPENSES } from "../utils/expenses";
import { CardProps } from "../domains/CardProps";

import { Card } from "./Card";
import { Empty } from "./Empty";

export function Listing() {
  const [month, setMonth] = useState(
    getLabelMonth(new Date().getMonth().toString())
  );

  return (
    <VStack flex={1}>
      <Heading color='gray.900' fontSize='lg'>
        Últimos lançamentos
      </Heading>
        <FlatList
          data={EXPENSES[month]}
          initialNumToRender={5}
          maxToRenderPerBatch={5}
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
        <Button
          variant='link'
          size={12}
          w='full'
          h='8'
          rightIcon={
            <Icon as={AntDesign} name='arrowright' size={4} color='gray.400' />
          }
          _pressed={{
            color: "emerald.500",
          }}
          _text={{
            fontSize: "xs",
            color: "gray.400",
          }}
        >
          Ver mais
        </Button>
    </VStack>
  );
}
