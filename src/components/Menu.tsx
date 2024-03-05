import { forwardRef } from "react";
import {
  Box,
  Center,
  HStack,
  Heading,
  Icon,
  IconButton,
  Stack,
  Text,
  VStack,
  useToken,
} from "native-base";
import BottomSheet from "@gorhom/bottom-sheet";
import { AntDesign } from "@expo/vector-icons";
import { MenuButton } from "./MenuButton";

type Props = {
  onClose: () => void;
};

export const Menu = forwardRef<BottomSheet, Props>(({ onClose }, ref) => {
  const red500 = useToken("colors", "red.500");
  const green500 = useToken("colors", "green.500");
  const purple500 = useToken("colors", "purple.500");

  return (
    <BottomSheet
      ref={ref}
      index={0}
      snapPoints={[0.01, 320]}
      backgroundStyle={{
        backgroundColor: "#252525",
      }}
      style={{ padding: 16 }}
      handleComponent={() => null}
    >
      <HStack justifyContent="center" alignItems="center" mb={6}>
        <Icon
          as={<AntDesign name="close" />}
          color="white"
          onPress={() => onClose()}
        />
        <Heading flex={1} fontSize="md" color="white" textAlign="center">
          Selecione uma opção
        </Heading>
      </HStack>
      <VStack flex={1} space={5} alignItems="center">
        <HStack w="full" alignItems="center" justifyContent="center" space={1}>
          <MenuButton title="Despesa" icon="cash-minus" color={red500} />
          <MenuButton title="Receita" icon="cash-multiple" color={green500} />
          <MenuButton
            title="Cartão"
            icon="credit-card-edit-outline"
            color={purple500}
          />
        </HStack>
        <HStack w="full" alignItems="center" justifyContent="center" space={4}>
          <MenuButton title="Investimento" icon="chart-line" color={green500} />
        </HStack>
      </VStack>
    </BottomSheet>
  );
});
