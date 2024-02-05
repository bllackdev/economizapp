import { useRef, useState } from "react";
import {
  Avatar,
  HStack,
  Heading,
  Icon,
  IconButton,
  Text,
  VStack,
  Image,
  useToast,
} from "native-base";
import { FontAwesome5 } from "@expo/vector-icons";
import { GoogleSignin } from "@react-native-google-signin/google-signin";
import auth from "@react-native-firebase/auth";

import { useUserData } from "../hooks/useUserData";

import { AlertModal } from "./AlertModal";

import HiIcon from "../assets/hi.gif";

export function Header() {
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
          bgColor: "emerald.500",
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
    <HStack bg='gray.900' justifyContent='space-between' alignItems='center'>
      <HStack flex={1} space={2}>
        <Avatar source={{ uri: photoURL }} bgColor='blueGray.600'>
          RR
        </Avatar>
        <VStack flex={1} ml='2' justifyContent='center'>
          <HStack space={2} alignItems='center'>
            <Image source={HiIcon} alt='gif de olá' w={5} h={5} />
            <Text color='white'>Olá, </Text>
          </HStack>
          <Heading color='white' size='sm'>
            {displayName}
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
            onPress={() => setIsOpen(!isOpen)}
          />
        }
        borderRadius='full'
      />
      <AlertModal
        text='Tem certeza que deseja desconectar da sua conta?'
        isOpen={isOpen}
        onPressPrimary={handleSignOut}
        onPressSecondary={onClose}
        cancelRef={cancelRef}
        isLogging={isLogging}
      />
    </HStack>
  );
}
