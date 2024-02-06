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

export function Summary2() {
  const [showBalance, setShowBalance] = useState(true);

  return (
    <Center
      bgColor='violet.800'
      borderRadius='xl'
      py={4}
      px={2}
      pt={2}
      w='90%'
      mt='8'
    >
      <HStack alignItems='center' justifyContent='center' w='full'>
        <Text
          color='white'
          fontWeight='bold'
          w='80%'
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
              size={5}
              onPress={() => setShowBalance(!showBalance)}
            />
          }
        />
      </HStack>

      <Heading color='white' size='md'>R$ {showBalance ? "16.141,00" : "--"}</Heading>

      <HStack w='full' justifyContent='space-around' alignItems='center' mt='2'>
        <VStack justifyContent='center' alignItems='center'>
          <Text color='emerald.400'>Receita</Text>
          <Text color='emerald.400' fontWeight='bold'>
            R$ {showBalance ? "2.500,00" : "--"}
          </Text>
        </VStack>
        <VStack justifyContent='center' alignItems='center'>
          <Text color='red.500'>Despesa</Text>
          <Text color='red.500' fontWeight='bold'>
            R$ {showBalance ? "- 1.250,00" : "--"}
          </Text>
        </VStack>
      </HStack>
    </Center>
  );
}
