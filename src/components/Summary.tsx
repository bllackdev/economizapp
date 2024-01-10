import { useState } from "react";
import {
  Center,
  HStack,
  Heading,
  Icon,
  IconButton,
  Text,
  VStack,
} from "native-base";
import { FontAwesome } from "@expo/vector-icons";

export function Summary() {
  const [showBalance, setShowBalance] = useState(true);

  return (
    <Center bgColor='gray.700' borderRadius='xl' py={4} w='4/5' mt='8'>
      <HStack alignItems='center' justifyContent='center' w='full'>
        <Text
          color='white'
          fontWeight='bold'
          w='80%'
          bgColor='amber.500'
          textAlign='center'
          pl='10'
        >
          Saldo
        </Text>
        <IconButton
          icon={
            <Icon
              as={FontAwesome}
              name={`${showBalance ? "eye-slash" : "eye"}`}
              color='white'
              size={4}
            />
          }
        />
      </HStack>

      <Heading color='white'>R$ {showBalance ? "16.141,00" : "-"}</Heading>

      <HStack w='full' justifyContent='space-around' alignItems='center' mt='2'>
        <VStack justifyContent='center' alignItems='center'>
          <Text color='emerald.500'>Receita</Text>
          <Text color='emerald.500' fontWeight='bold'>
            R$ {showBalance ? "2.500,00" : "-"}
          </Text>
        </VStack>
        <VStack justifyContent='center' alignItems='center'>
          <Text color='red.700'>Despesa</Text>
          <Text color='red.700' fontWeight='bold'>
            R$ {showBalance ? "- 1.250,00" : "-"}
          </Text>
        </VStack>
      </HStack>
    </Center>
  );
}
