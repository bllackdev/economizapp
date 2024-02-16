import { useState } from "react";
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
import { CATEGORIES } from "../utils/categories";
import { DateType } from "react-native-ui-datepicker";

import { Input } from "../components/Input";
import { ButtonTransition } from "../components/ButtonTransition";
import { Button } from "../components/Button";
import { Select } from "../components/Select";
import { Modal } from "../components/Modal";
import { DatePicker } from "../components/DatePicker";
import dayjs from "dayjs";

export function Register() {
  const [transactionType, setTransactionType] = useState("down");
  const [category, setCategory] = useState("");
  const [date, setDate] = useState<DateType | undefined>();
  const [isOpenDatePicker, setIsOpenDatePicker] = useState(false);
  const [isInstallment, setIsInstallment] = useState(false);
  const [isPaid, setIsPaid] = useState(false);

  function handleTransactionTypeSelect(type: "up" | "down" | "invest") {
    setTransactionType(type);
  }
 console.log('date', date)
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
          Cadastre seus
        </Text>
        <Heading color='white' fontSize='lg'>
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
              justifyContent='center'
              alignItems='center'
              w={16}
              borderWidth={1}
              borderRadius='lg'
              borderColor="violet.700"
              onPress={() => setIsOpenDatePicker((prev) => !prev)}
            />
            <Input
              placeholder='Data'
              width='56'
              value={dayjs(date).format("DD/MM/YYYY")}
              isReadOnly
              isDisabled
            />
          </HStack>

          {transactionType === "down" && (
            <>
              <HStack alignItems='center' space={2} px={2}>
                <Text color='violet.700'>Parcelado</Text>
                <Switch
                  size='sm'
                  mr={4}
                  onTrackColor='violet.500'
                  onThumbColor='violet.300'
                  offThumbColor='violet.300'
                  value={isInstallment}
                  onToggle={() => {
                    setIsInstallment((prev) => !prev);
                  }}
                />
                {isInstallment && (
                  <Input
                    placeholder='Parcelas'
                    keyboardType='numeric'
                    width='146px'
                  />
                )}
              </HStack>
              <HStack alignItems='center' space={2} px={2}>
                <Text color='violet.700'>Pago</Text>
                <Switch
                  size='sm'
                  mr={4}
                  onTrackColor='violet.500'
                  onThumbColor='violet.300'
                  offThumbColor='violet.300'
                  value={isPaid}
                  onToggle={() => {
                    setIsPaid((prev) => !prev);
                  }}
                />
              </HStack>
            </>
          )}
          {isOpenDatePicker && (
            <Modal
              showModal={isOpenDatePicker}
              setShowModal={setIsOpenDatePicker}
              children={<DatePicker date={date} setDate={setDate} />}
            />
          )}
        </VStack>

        <Stack px={8} pb={8}>
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
