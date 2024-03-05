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
import { FontAwesome5, FontAwesome } from "@expo/vector-icons";
import { GoogleSignin } from "@react-native-google-signin/google-signin";
import auth from "@react-native-firebase/auth";

import { useUserData } from "../hooks/useUserData";

import { AlertModal } from "./AlertModal";

import HiIcon from "../assets/hi.gif";

type Props = {
  showValues: boolean;
  setShowValues: (value: boolean) => void;
};

export function Header({ showValues, setShowValues }: Props) {
  const toast = useToast();
  const { displayName } = useUserData();

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
    <HStack bg="gray.800" justifyContent="space-between" alignItems="center">
      <HStack flex={1} space={2} alignItems="center">
        <VStack flex={1} ml="2" justifyContent="center">
          <HStack space={1} alignItems="center">
            <Image source={HiIcon} alt="gif de olá" w={3} h={3} />
            <Text color="white" fontSize="xs">
              Olá,
            </Text>
            <Heading color="white" fontSize="xs" numberOfLines={1}>
              {displayName}
            </Heading>
          </HStack>
        </VStack>
      </HStack>
      <IconButton
        icon={
          <Icon
            as={FontAwesome}
            name={`${showValues ? "eye" : "eye-slash"}`}
            color="white"
            size={5}
          />
        }
        borderRadius="full"
        onPress={() => setShowValues(!showValues)}
      />
      <IconButton
        icon={
          <Icon
            as={FontAwesome5}
            name="power-off"
            color="green.500"
            size={4}
          />
        }
        onPress={() => setIsOpen(!isOpen)}
        borderRadius="full"
      />
      <AlertModal
        text="Tem certeza que deseja desconectar da sua conta?"
        isOpen={isOpen}
        onPressPrimary={handleSignOut}
        onPressSecondary={onClose}
        cancelRef={cancelRef}
        isLogging={isLogging}
      />
    </HStack>
  );
}
