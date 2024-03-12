import { Platform } from "react-native";
import {
  Box,
  Button as NBButton,
  Heading,
  Image,
  Text,
  VStack,
  useToast,
} from "native-base";
import { FontAwesome } from "@expo/vector-icons";
import auth from "@react-native-firebase/auth";

import { Button } from "../components/Button";

import AppIcon from "../assets/icon.png";
import {
  GoogleSignin,
  statusCodes,
} from "@react-native-google-signin/google-signin";
import { useState } from "react";

export function SignIn() {
  const toast = useToast();

  const [isLogging, setIsLogging] = useState(false);

  async function onGoogle() {
    // Check if your device supports Google Play
    await GoogleSignin.hasPlayServices({ showPlayServicesUpdateDialog: true });
    // Get the users ID token
    const { idToken } = await GoogleSignin.signIn();

    // Create a Google credential with the token
    const googleCredential = auth.GoogleAuthProvider.credential(idToken);

    // Sign-in the user with the credential
    return auth().signInWithCredential(googleCredential);
  }

  async function handleSignIn() {
    setIsLogging(true);

    try {
      // Check if your device supports Google Play
      await GoogleSignin.hasPlayServices({
        showPlayServicesUpdateDialog: true,
      });
      // Get the users ID token
      const { idToken, user } = await GoogleSignin.signIn();

      // Create a Google credential with the token
      const googleCredential = auth.GoogleAuthProvider.credential(idToken);

      console.log("GOOGLE CREDENTIAL: ", googleCredential);
      // Sign-in the user with the credential
      return auth().signInWithCredential(googleCredential);
    } catch (error) {
      if (error.code === statusCodes.SIGN_IN_CANCELLED) {
        // user cancelled the login flow
        toast.show({
          title: "Login cancelado",
          placement: "top",
          bgColor: "red.500",
          duration: 6000,
        });
      } else if (error.code === statusCodes.IN_PROGRESS) {
        // operation (e.g. sign in) is in progress already
        toast.show({
          title: "Login em progresso",
          description: "Você já está logado com o Google",
          placement: "top",
          bgColor: "red.500",
          duration: 6000,
        });
      } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
        // play services not available or outdated
        toast.show({
          title: "Serviços do Google",
          description: "Os serviços do Google não estão disponíveis",
          placement: "top",
          bgColor: "red.500",
          duration: 6000,
        });
      } else {
        // some other error happened
        toast.show({
          title: "Erro ao logar",
          description: "Ocorreu um erro ao tentar fazer login",
          placement: "top",
          bgColor: "red.500",
          duration: 6000,
        });
      }
    } finally {
      setIsLogging(false);
    }
  }

  return (
    <VStack
      flex={1}
      alignItems="center"
      justifyContent="space-around"
      bg="gray.800"
      p={12}
    >
      <Image source={AppIcon} alt="Logo do App" mb="12" w="48" h="32" />

      <VStack h="55%" justifyContent="space-around">
        <Heading color="gray.200" textAlign="center">
          Suas finanças em um só lugar
        </Heading>

        <Box>
          <Text color="gray.200" textAlign="center" mb="10">
            Faça seu login com {`\n`}a opção abaixo
          </Text>

          <VStack space="4">
            <Button
              label="Entrar com Google"
              icon={<FontAwesome name="google" size={24} color="white" />}
              bgColor="purple.500"
              pressedBgColor="purple.500"
              onPress={() => handleSignIn()}
              isLoading={isLogging}
            />
            {Platform.OS === "ios" ? (
              <Button
                label="Entrar com Apple"
                icon={<FontAwesome name="apple" size={24} color="white" />}
                bgColor="purple.500"
                pressedBgColor="purple.500"
              />
            ) : null}
          </VStack>
        </Box>
      </VStack>
    </VStack>
  );
}
