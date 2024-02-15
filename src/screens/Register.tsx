import { useState } from "react";
import { Platform } from "react-native";
import {
  HStack,
  Heading,
  Icon,
  IconButton,
  ScrollView,
  Stack,
  Switch,
  Text,
  VStack,
} from "native-base";
import { FontAwesome } from "@expo/vector-icons";
import DateTimePicker from "@react-native-community/datetimepicker";
import { CATEGORIES } from "../utils/categories";

import { Input } from "../components/Input";
import { ButtonTransition } from "../components/ButtonTransition";
import { Button } from "../components/Button";
import { Select } from "../components/Select";

export function Register() {
  const [transactionType, setTransactionType] = useState("down");
  const [category, setCategory] = useState("");
  const [date, setDate] = useState(new Date());
  const [show, setShow] = useState(false);
  const [isInstallment, setIsInstallment] = useState(false);
  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate;
    setShow(Platform.OS === "ios");
    setDate(currentDate);
  };

  function handleTransactionTypeSelect(type: "up" | "down" | "invest") {
    setTransactionType(type);
  }

  return (
    <VStack flex={1} bg='gray.900'>
      <VStack
        w='full'
        px={8}
        py={4}
        justifyContent='center'
        alignItems='center'
      >
        <Text color='violet.700' fontSize='sm'>
          Cadastre seus
        </Text>
        <Heading color='violet.700' fontSize='lg'>
          Lançamentos
        </Heading>
      </VStack>

      <ScrollView
        flex={1}
        contentContainerStyle={{ flexGrow: 1, justifyContent: "space-between" }}
        showsVerticalScrollIndicator={false}
        borderTopRadius='3xl'
        bg='white'
      >
        <VStack flex={1} p={8} space='4'>
          <VStack>
            <HStack justifyContent='space-between' space={2}>
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
              <ButtonTransition
                label='Investimento'
                type='invest'
                isActive={transactionType === "invest"}
                onPress={() => handleTransactionTypeSelect("invest")}
              />
            </HStack>
            {transactionType === "invest" && (
              <HStack space={1} alignItems='center' mt={1} px={1}>
                <Icon
                  as={FontAwesome}
                  name='info-circle'
                  color='violet.700'
                  size={3}
                />
                <Text color='violet.700' fontSize='2xs'>
                  Investimento não é despesa e nem receita
                </Text>
              </HStack>
            )}
          </VStack>
          <Input placeholder='Nome' />
          <Input placeholder='Preço' keyboardType='numeric' />
          <HStack alignItems='center' space={4} px={2}>
            <Text color='violet.700'>Parcelado</Text>
            <Switch
              size='sm'
              mr={4}
              onTrackColor='violet.500'
              onThumbColor='violet.300'
              offThumbColor='violet.300'
              value={isInstallment}
              onToggle={() => {
                setIsInstallment(!isInstallment);
              }}
            />
            {isInstallment && (
              <Input placeholder='Parcelas' keyboardType='numeric' width='32' />
            )}
          </HStack>

          <Select
            items={CATEGORIES}
            placeholder='Categoria'
            selectedValue={category}
            onValueChange={setCategory}
            textColor='violet.700'
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
