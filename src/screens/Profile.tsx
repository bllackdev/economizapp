import { useRef, useState } from "react";
import {
  Avatar,
  Divider,
  HStack,
  Heading,
  Icon,
  Image,
  VStack,
  useToast,
} from "native-base";
import { FontAwesome5 } from "@expo/vector-icons";
import { GoogleSignin } from "@react-native-google-signin/google-signin";
import auth from "@react-native-firebase/auth";

import { useUserData } from "../hooks/useUserData";

import { AlertModal } from "../components/AlertModal";
import { Button } from "../components/Button";
import { OptionProfile } from "../components/OptionProfile";

import HiIcon from "../assets/hi.gif";

export function Profile() {
  const toast = useToast();
  const { displayName, photoURL } = useUserData();

  const [isOpen, setIsOpen] = useState(false);
  const [isLogging, setIsLogging] = useState(false);

  const onClose = () => setIsOpen(false);
  const cancelRef = useRef(null);

  function handleSignOut() {
    setIsLogging(true);
    GoogleSignin.revokeAccess();
    GoogleSignin.signOut();
    auth()
      .signOut()
      .then(() => {
        toast.show({
          title: "Desconectado com sucesso ",
          placement: "top",
          bgColor: "green.500",
          duration: 5000,
        });
      })
      .catch((error) => {
        toast.show({
          title: "Erro ao realizar logout!",
          placement: "top",
          bgColor: "red.500",
          duration: 5000,
        });
        console.error(error);
      });
  }

  return (
    <VStack flex={1} bg="gray.800">
      <VStack
        w="full"
        space={2}
        px={8}
        py={5}
        justifyContent="center"
        alignItems="center"
      >
        <Avatar
          source={{ uri: photoURL }}
          bgColor="blueGray.600"
          size="xl"
          borderColor="purple.500"
          borderWidth={2}
        >
          RR
        </Avatar>
        <HStack space={2} alignItems="center" justifyContent="center" mr={6}>
          <Image source={HiIcon} alt="gif de olá" w={6} h={6} />
          <Heading color="gray.100" fontSize="lg" numberOfLines={1}>
            {displayName}
          </Heading>
        </HStack>
      </VStack>
      <VStack flex={1} px={8} pt={10} bg="white" borderTopRadius="3xl">
        <VStack flex={1} alignItems="flex-start">
          <OptionProfile label="Investimentos (Em Breve ...)" icon="signal" />
          <Divider color="gray.800" mb={4} />
          <OptionProfile label="Metas (Em Breve ...)" icon="crosshairs" />
          <Divider color="gray.800" mb={4} />
          <OptionProfile label="Categorias (Em Breve ...)" icon="th" />
          <Divider color="gray.800" mb={4} />
          <OptionProfile label="Configurações (Em Breve ...)" icon="gear" />
        </VStack>
        <VStack alignItems="center" py={4}>
          <Button
            label="Desconectar"
            bgColor="gray.800"
            pressedBgColor="gray.700"
            isLoading={isLogging}
            icon={
              <Icon
                as={FontAwesome5}
                name="power-off"
                color="red.500"
                size={5}
              />
            }
            borderRadius="2xl"
            onPress={() => setIsOpen(!isOpen)}
          />
        </VStack>
      </VStack>

      <AlertModal
        text="Tem certeza que deseja desconectar da sua conta?"
        isOpen={isOpen}
        onPressPrimary={handleSignOut}
        onPressSecondary={onClose}
        cancelRef={cancelRef}
        isLogging={isLogging}
      />
    </VStack>
  );
}
