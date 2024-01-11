import { Platform } from "react-native";
import {
  Box,
  Button as NBButton,
  Heading,
  Image,
  Text,
  VStack,
} from "native-base";
import { FontAwesome } from "@expo/vector-icons";

import AppIcon from "../assets/icon.png";

import { Button } from "../components/Button";

export function SignIn() {
  return (
    <VStack
      flex={1}
      alignItems='center'
      justifyContent='space-around'
      bg='gray.900'
      p={12}
    >
      <Image source={AppIcon} alt='Logo do App' mb='12' w='48' h='32' />

      <VStack h='55%' justifyContent='space-around'>
        <Heading color='gray.200' textAlign='center'>
          Suas finanças em um só lugar
        </Heading>

        <Box>
          <Text color='gray.200' textAlign='center' mb='10'>
            Faça seu login com {`\n`}a opção abaixo
          </Text>

          <VStack space='4'>
            <Button
              label='Entrar com Google'
              icon={<FontAwesome name='google' size={24} color='white' />}
              bgColor='violet.700'
              pressedBgColor='violet.800'
            />
            {Platform.OS === "ios" ? (
              <Button
                label='Entrar com Apple'
                icon={<FontAwesome name='apple' size={24} color='white' />}
                bgColor='violet.700'
                pressedBgColor='violet.800'
              />
            ) : null}
          </VStack>
        </Box>
      </VStack>
    </VStack>
  );
}
