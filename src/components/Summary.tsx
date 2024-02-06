import { useState } from "react";
import { HStack, Icon, IconButton, Text, VStack } from "native-base";
import {
  AntDesign,
  MaterialCommunityIcons,
  MaterialIcons,
  FontAwesome,
} from "@expo/vector-icons";

export function Summary() {
  const [showBalance, setShowBalance] = useState(true);
  const currentMonth = new Date().toLocaleString("pt-BR", { month: "long" });

  return (
    <VStack mt={4} justifyContent='center' alignItems='center' w='xs'>
      <HStack justifyContent='center' alignItems='center' w='xs'>
        <Text
          color='white'
          fontSize='lg'
          fontWeight='bold'
          textAlign='center'
          textTransform='capitalize'
          mr={2}
        >
          {currentMonth}
        </Text>
        <IconButton
          icon={
            <Icon
              as={FontAwesome}
              name={`${showBalance ? "eye" : "eye-slash"}`}
              color='white'
              size={5}
              onPress={() => setShowBalance(!showBalance)}
            />
          }
        />
      </HStack>
      <HStack p={2} justifyContent='center' alignItems='flex-start'>
        <VStack space={4} alignItems='center' justifyContent='center' mr={8}>
          <VStack>
            <HStack space={2} justifyContent='center' alignItems='center'>
              <Icon
                color='white'
                as={<MaterialCommunityIcons name='bank-outline' size={24} />}
              />
              <Text color='white' textAlign='center'>
                Saldo
              </Text>
            </HStack>
            <Text color='white' fontWeight='bold'>
              R$ {showBalance ? "16.141,00" : "--"}
            </Text>
          </VStack>
          <VStack>
            <HStack space={2} justifyContent='center' alignItems='center'>
              <Icon
                color='violet.500'
                as={<AntDesign name='creditcard' size={24} />}
              />
              <Text color='violet.400' textAlign='center'>
                Cartões
              </Text>
            </HStack>
            <Text color='violet.400' fontWeight='bold'>
              R$ {showBalance ? "2.500,00" : "--"}
            </Text>
          </VStack>
        </VStack>
        <VStack space={4} alignItems='center' justifyContent='center'>
          <VStack alignItems='center' justifyContent='center'>
            <HStack space={2} justifyContent='center' alignItems='center'>
              <Icon
                color='emerald.500'
                as={<MaterialCommunityIcons name='cash-multiple' size={24} />}
              />
              <Text color='emerald.500' textAlign='center'>
                Receita
              </Text>
            </HStack>
            <Text color='emerald.400' fontWeight='bold'>
              R$ {showBalance ? "2.500,00" : "--"}
            </Text>
          </VStack>
          <VStack alignItems='center' justifyContent='center'>
            <HStack space={2} justifyContent='center' alignItems='center'>
              <Icon
                color='red.500'
                as={<MaterialIcons name='money-off' size={24} />}
              />
              <Text color='red.500' textAlign='center'>
                Despesas
              </Text>
            </HStack>
            <Text color='red.500' fontWeight='bold'>
              R$ {showBalance ? "- 2.500,00" : "--"}
            </Text>
          </VStack>
        </VStack>
      </HStack>
    </VStack>
  );
}
