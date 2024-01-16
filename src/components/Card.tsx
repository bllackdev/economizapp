import { HStack, Heading, Icon, Text, VStack } from "native-base";
import { FontAwesome, MaterialIcons } from "@expo/vector-icons";
import { CardProps } from "../domains/CardProps";

export function Card({
  id,
  label,
  type,
  value,
  color,
  percent,
  date,
}: CardProps) {
  return (
    <VStack
      w='full'
      bg='white'
      p='4'
      mt='3'
      borderRadius='xl'
      shadow='1'
      borderWidth={2}
      borderColor='violet.700'
      style={{
        shadowRadius: 8,
      }}
    >
      <HStack justifyContent='space-between' alignItems='center'>
        <VStack>
          <Heading color='gray.900' fontSize='md'>
            {label}
          </Heading>
          <Text color={type === "up" ? "emerald.500" : "red.500"} fontSize='md'>
            R$ {value}
          </Text>
        </VStack>
        <VStack h='full' >
          <Text color='gray.700' fontSize='xs'>
            {date}
          </Text>
        </VStack>
      </HStack>
      {/* <HStack justifyContent='space-between' mt='2'>
        <HStack justifyContent='center' alignItems='center'>
          {type === "up" ? (
            <Icon
              as={<FontAwesome name='dollar' />}
              color='gray.700'
              size={3}
            />
          ) : (
            <Icon
              as={<MaterialIcons name='money-off' />}
              color='gray.700'
              size={3}
              mr={1}
            />
          )}
          <Text color='gray.700' fontSize='xs'>
            {type === "up" ? "Receita" : "Despesa"}
          </Text>
        </HStack>
        <Text color='gray.700' fontSize='xs'>
          {date}
        </Text>
      </HStack> */}
    </VStack>
  );
}
