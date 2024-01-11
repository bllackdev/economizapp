import { useState } from "react";
import { Platform } from "react-native";
import {
  HStack,
  Heading,
  Icon,
  IconButton,
  ScrollView,
  Stack,
  VStack,
} from "native-base";
import { FontAwesome } from "@expo/vector-icons";
import DateTimePicker from "@react-native-community/datetimepicker";

import { Input } from "../components/Input";
import { ButtonTransition } from "../components/ButtonTransition";
import { Button } from "../components/Button";
import { Select } from "../components/Select";

const items = [
  { label: "Item 1", value: "item-1" },
  { label: "Item 2", value: "item-2" },
  { label: "Item 3", value: "item-3" },
  { label: "Item 4", value: "item-4" },
  { label: "Item 5", value: "item-5" },
  { label: "Item 6", value: "item-3" },
];

export function Register() {
  const [transactionType, setTransactionType] = useState("down");
  const [category, setCategory] = useState("");
  const [date, setDate] = useState(new Date());
  const [show, setShow] = useState(false);

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate;
    setShow(Platform.OS === 'ios');
    setDate(currentDate);
  };

  function handleTransactionTypeSelect(type: "up" | "down") {
    setTransactionType(type);
  }

  return (
    <VStack flex={1} bg='gray.200'>
      <VStack
        bg='gray.900'
        w='full'
        p={8}
        justifyContent='center'
        alignItems='center'
      >
        <Heading color='green.700' fontSize='xl'>
          Lançamento
        </Heading>
      </VStack>

      <ScrollView
        flex={1}
        contentContainerStyle={{ flexGrow: 1, justifyContent: "space-between" }}
        showsVerticalScrollIndicator={false}
      >
        <VStack flex={1} p={8} space='4'>
          <Input placeholder='Nome' />
          <Input placeholder='Preço' keyboardType="numeric"/>
          <Input placeholder='Parcelas' keyboardType="numeric" />
          <HStack justifyContent='space-between'>
            <ButtonTransition
              label='Receita'
              type='up'
              isActive={transactionType === "up"}
              onPress={() => handleTransactionTypeSelect("up")}
            />
            <ButtonTransition
              label='Despesa'
              type='down'
              isActive={transactionType === "down"}
              onPress={() => handleTransactionTypeSelect("down")}
            />
          </HStack>
          <Select
            items={items}
            placeholder='Categoria'
            selectedValue={category}
            onValueChange={setCategory}
          />
          <HStack w='full' space={2}>
            <IconButton
              icon={
                <Icon as={FontAwesome} name='calendar' color='violet.700' />
              }
              borderRadius='full'
              onPress={() => setShow((prev) => !prev)}
            />
            <Input
              placeholder='Data'
              width='84%'
              value={date.toLocaleDateString("pt-BR")}
              isReadOnly
            />
          </HStack>
          {show && (
            <DateTimePicker
              testID='dateTimePicker'
              value={date}
              mode='date'
              display='spinner'
              minimumDate={new Date(2020, 0, 1)}
              onChange={onChange}
              
            />
          )}
        </VStack>

        <Stack p={8}>
          <Button
            label='Salvar'
            icon={<FontAwesome name='save' size={24} color='white' />}
            bgColor='violet.700'
            pressedBgColor='violet.800'
          />
        </Stack>
      </ScrollView>
    </VStack>
  );
}
