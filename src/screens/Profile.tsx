import { Avatar, HStack, Heading, Image, Text, VStack } from "native-base";

import { useUserData } from "../hooks/useUserData";

import HiIcon from "../assets/hi.gif";

export function Profile() {
  const { displayName, photoURL } = useUserData();

  return (
    <VStack flex={1} bg='gray.800'>
      <VStack
        w='full'
        px={8}
        py={5}
        justifyContent='center'
        alignItems='center'
      >
        <Text color='white' fontWeight='bold' fontSize='2xl'>
          Perfil
        </Text>
      </VStack>
      <VStack flex={1} px={8} bg='white' borderTopRadius='3xl'>
        <VStack space={2} py={4} alignItems='center'>
          <Avatar source={{ uri: photoURL }} bgColor='blueGray.600' size='xl'>
            RR
          </Avatar>

          <Heading color='gray.800' fontSize='xs' numberOfLines={1}>
            {displayName}
          </Heading>
        </VStack>
        <VStack flex={1} alignItems='center' pt={32}>
          <Text color='gray.500' fontSize='xl'>
            Em breve...
          </Text>
        </VStack>
      </VStack>
    </VStack>
  );
}
