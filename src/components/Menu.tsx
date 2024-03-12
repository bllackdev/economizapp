import { forwardRef } from "react";
import { HStack, Heading, Icon, VStack, useToken } from "native-base";
import { useNavigation } from "@react-navigation/native";
import BottomSheet from "@gorhom/bottom-sheet";
import { AntDesign } from "@expo/vector-icons";

import { StackProps } from "../routes/stack.user.routes";

import { MenuButton } from "./MenuButton";

type Props = {
  onClose: () => void;
};

export const Menu = forwardRef<BottomSheet, Props>(({ onClose }, ref) => {
  const navigation = useNavigation<StackProps>();

  const red500 = useToken("colors", "red.500");
  const green500 = useToken("colors", "green.500");
  const purple500 = useToken("colors", "purple.500");

  function handleGoExpense() {
    navigation.navigate("expense");
  }

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
          Selecione para adicionar
        </Heading>
      </HStack>
      <VStack flex={1} space={5} alignItems="center">
        <HStack w="full" alignItems="center" justifyContent="center" space={1}>
          <MenuButton
            title="Despesa"
            iconName="cash-minus"
            color={red500}
            onPress={() => {
              handleGoExpense();
            }}
          />
          <MenuButton
            title="Receita"
            iconName="cash-multiple"
            color={green500}
          />
          <MenuButton
            title="Cartão"
            iconName="credit-card-edit-outline"
            color={purple500}
          />
        </HStack>
        <HStack w="full" alignItems="center" justifyContent="center" space={4}>
          <MenuButton
            title="Investimento"
            iconName="chart-line"
            color={green500}
          />
        </HStack>
      </VStack>
    </BottomSheet>
  );
});
