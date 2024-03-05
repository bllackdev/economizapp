import { HStack, Icon, IconButton, Text, VStack } from "native-base";
import {
  AntDesign,
  MaterialCommunityIcons,
  MaterialIcons,
  FontAwesome,
} from "@expo/vector-icons";

type Props = {
  showValues: boolean;
};

export function Summary({ showValues }: Props) {
  const currentMonth = new Date().toLocaleString("pt-BR", { month: "long" });

  return (
    <VStack mt={2} justifyContent='center' alignItems='center' w='xs'>
      <HStack justifyContent='center' alignItems='center' w='xs' >
        <HStack justifyContent='center' alignItems='flex-end'>
          <Text color='white' fontSize='xs' textAlign='center' mr={1}>
            resumo de
          </Text>
          <Text
            color='white'
            fontSize='sm'
            fontWeight='bold'
            textTransform='capitalize'
            mr={2}
          >
            {currentMonth}
          </Text>
        </HStack>
      </HStack>
      <HStack p={2} justifyContent='center' alignItems='flex-start'>
        <VStack space={4} alignItems='center' justifyContent='center' mr={8}>
          <VStack>
            <HStack space={2} justifyContent='center' alignItems='center'>
              <Icon
                color='white'
                as={<MaterialCommunityIcons name='bank-outline' size={24} />}
              />
              <Text color='white' textAlign='center' fontSize='xs'>
                Saldo
              </Text>
            </HStack>
            <Text color='white' fontWeight='bold'>
              R$ {showValues ? "16.141,00" : "--"}
            </Text>
          </VStack>
          <VStack>
            <HStack space={2} justifyContent='center' alignItems='center'>
              <Icon
                color='purple.500'
                as={<MaterialCommunityIcons name='party-popper' size={24} />}
              />
              <Text color='purple.500' textAlign='center' fontSize='xs'>
                Desp. pagas
              </Text>
            </HStack>
            <Text color='purple.500' fontWeight='bold' textAlign='center'>
              R$ {showValues ? "2.500,00" : "--"}
            </Text>
          </VStack>
        </VStack>
        <VStack space={4} alignItems='center' justifyContent='center'>
          <VStack alignItems='center' justifyContent='center'>
            <HStack space={2} justifyContent='center' alignItems='center'>
              <Icon
                color='green.500'
                as={<MaterialCommunityIcons name='cash-multiple' size={24} />}
              />
              <Text color='green.500' textAlign='center' fontSize='xs'>
                Receita
              </Text>
            </HStack>
            <Text color='green.500' fontWeight='bold'>
              R$ {showValues ? "2.500,00" : "--"}
            </Text>
          </VStack>
          <VStack alignItems='center' justifyContent='center'>
            <HStack space={2} justifyContent='center' alignItems='center'>
              <Icon
                color='red.500'
                as={<MaterialIcons name='money-off' size={24} />}
              />
              <Text color='red.500' textAlign='center' fontSize='xs'>
                Despesas
              </Text>
            </HStack>
            <Text color='red.500' fontWeight='bold'>
              R$ {showValues ? "- 2.500,00" : "--"}
            </Text>
          </VStack>
        </VStack>
      </HStack>
    </VStack>
  );
}
