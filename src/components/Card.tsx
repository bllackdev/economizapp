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
      p='3'
      mt='3'
      borderRadius='xl'
      shadow='1'
      borderWidth={1}
      borderColor='violet.700'
      style={{
        shadowRadius: 8,
      }}
    >
      <HStack justifyContent='space-between' alignItems='center'>
        <VStack>
          <Heading color='violet.700' fontSize='sm' mb='1'>
            {label}
          </Heading>
          <Text color={type === "up" ? "emerald.500" : "red.500"} fontSize='sm' fontWeight='semibold'>
            R$ {value}
          </Text>
        </VStack>
        <VStack justifyContent='space-between' alignItems='flex-end' >
          <Text color='violet.700:alpha.60' fontSize='xs' mb='1'>
            {date}
          </Text>
          {type === "up" ? (
            <Icon
              as={<FontAwesome name='dollar' />}
              color='violet.700:alpha.60'
              size={3}
            />
          ) : (
            <Icon
              as={<MaterialIcons name='money-off' />}
              color='violet.700:alpha.60'
              size={4}
              mr={1}
            />
          )}
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
