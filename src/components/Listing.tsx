import { useState } from "react";
import { Heading, VStack, Button, Icon, FlatList, HStack } from "native-base";
import { useNavigation } from "@react-navigation/native";
import { AntDesign } from "@expo/vector-icons";
import { getLabelMonth } from "../functions/getLabelMonth";
import { EXPENSES } from "../utils/expenses";
import { CardProps } from "../domains/CardProps";

import { AppUserRoutesParamListProps } from "../routes/tab.user.routes";

import { Card } from "./Card";
import { Empty } from "./Empty";

export function Listing() {
  const navigation = useNavigation<AppUserRoutesParamListProps>();

  const [month, setMonth] = useState(
    getLabelMonth(new Date().getMonth().toString())
  );

  function handleGoExtractScreen() {
    navigation.navigate("extract");
  }

  return (
    <VStack flex={1}>
      <HStack w='full' justifyContent='space-between' alignItems='center'>
        <Heading color='gray.800' fontSize='md'>
          Últimos lançamentos
        </Heading>

        <Button
          variant='link'
          size={12}
          h='8'
          w='16'
          rightIcon={
            <Icon as={AntDesign} name='arrowright' size={4} color='gray.400' />
          }
          _pressed={{
            color: "green.500",
          }}
          _text={{
            fontSize: "xs",
            color: "gray.400",
          }}
          onPress={() => handleGoExtractScreen()}
        >
          Ver mais
        </Button>
      </HStack>
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
    </VStack>
  );
}
