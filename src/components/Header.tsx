import { HStack, Icon, IconButton, Image, Text, VStack } from "native-base";
import { FontAwesome } from "@expo/vector-icons";

import LogoImg from "../assets/logo.png";

type Props = {
  showValues: boolean;
  setShowValues: (value: boolean) => void;
};

export function Header({ showValues, setShowValues }: Props) {
  const currentDate = new Date();
  const formattedDate = currentDate.toLocaleDateString("pt-BR", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <HStack
      bg="gray.800"
      alignItems="center"
      justifyContent="space-around"
      space={8}
    >
      <Image source={LogoImg} alt="gif de olá" w={10} h={10} />

      <Text color="white">{formattedDate}</Text>
      <IconButton
        borderRadius={12}
        backgroundColor="gray.700"
        icon={
          <Icon
            as={FontAwesome}
            name={`${showValues ? "eye" : "eye-slash"}`}
            color="white"
            size={5}
          />
        }
        _pressed={{
          backgroundColor: "purple.500",
        }}
        onPress={() => setShowValues(!showValues)}
      />
    </HStack>
  );
}
