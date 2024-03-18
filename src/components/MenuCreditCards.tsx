import { forwardRef } from "react";
import { HStack, Heading, Icon, useToken } from "native-base";
import BottomSheet from "@gorhom/bottom-sheet";
import { AntDesign } from "@expo/vector-icons";
import { Portal, PortalHost } from "@gorhom/portal";

import { MenuButton } from "./MenuButton";

type Props = {
  onClose: () => void;
};

export const MenuCreditCards = forwardRef<BottomSheet, Props>(
  ({ onClose }, ref) => {
    const green500 = useToken("colors", "green.500");
    const purple500 = useToken("colors", "purple.500");
    const red500 = useToken("colors", "red.500");

    return (
      <>
        <Portal>
          <BottomSheet
            ref={ref}
            index={-1}
            snapPoints={[0.01, 230]}
            backgroundStyle={{
              backgroundColor: "#252525",
            }}
            style={{ padding: 16 }}
            handleComponent={() => null}
          >
            <HStack justifyContent="center" alignItems="center" mb={8}>
              <Icon
                as={<AntDesign name="close" />}
                color="white"
                onPress={() => onClose()}
              />
              <Heading flex={1} fontSize="md" color="white" textAlign="center">
                Selecione alguma das opções
              </Heading>
            </HStack>
            <HStack w="full" justifyContent="center" space={6}>
              <MenuButton
                title="Editar"
                iconName="file-edit-outline"
                color={purple500}
              />
              <MenuButton
                title="Fatura"
                iconName="newspaper-variant-multiple-outline"
                color={green500}
              />
              <MenuButton
                title="Deletar"
                iconName="delete-forever-outline"
                color={red500}
              />
            </HStack>
          </BottomSheet>
        </Portal>
        <PortalHost name="menu-credit-cards" />
      </>
    );
  }
);
