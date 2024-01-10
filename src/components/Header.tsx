import {
  Avatar,
  HStack,
  Heading,
  Icon,
  IconButton,
  Text,
  VStack,
} from "native-base";
import { FontAwesome5 } from "@expo/vector-icons";

export function Header() {
  return (
    <HStack bg='gray.900' justifyContent='space-between' alignItems='center'>
      <HStack flex={1} space={2}>
        <Avatar
          source={{ uri: "https://www.github.com/rapharenatoo.png" }}
          bgColor='blueGray.600'
        >
          RR
        </Avatar>
        <VStack flex={1} ml='2'>
          <Text color='white'>Olá, </Text>
          <Heading color='white' size='md'>
            Raphael Renato
          </Heading>
        </VStack>
      </HStack>
      <IconButton
        icon={
          <Icon
            as={FontAwesome5}
            name='power-off'
            color='emerald.500'
            size={5}
          />
        }
        borderRadius='full'
      />
    </HStack>
  );
}
