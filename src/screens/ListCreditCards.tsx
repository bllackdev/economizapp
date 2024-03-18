import { useRef } from "react";
import {
  HStack,
  Heading,
  Icon,
  IconButton,
  ScrollView,
  Text,
  VStack,
} from "native-base";
import BottomSheet from "@gorhom/bottom-sheet";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import { CreditCardProgress } from "../components/CreditCardProgress";
import { MenuCreditCards } from "../components/MenuCreditCards";
import { Button } from "../components/Button";

export function ListCreditCards() {
  const bottomSheetRef = useRef<BottomSheet>(null);

  const handleMenuBottomSheetOpen = () => bottomSheetRef.current?.expand();
  const handleMenuBottomSheetClose = () =>
    bottomSheetRef.current?.snapToIndex(0);

  return (
    <VStack flex={1} bg="gray.800">
      <VStack
        w="full"
        px={8}
        py={4}
        justifyContent="center"
        alignItems="center"
        borderRadius="3xl"
      >
        <Text color="white" fontSize="sm">
          Consulte e faça ajustes em seus
        </Text>
        <Heading color="white" fontSize="lg">
          Cartões
        </Heading>
      </VStack>
      <VStack flex={1} p={6} pt={3} bg="white" borderTopRadius="3xl">
        <HStack justifyContent="flex-end" mb={4}>
          <IconButton
            borderRadius={12}
            backgroundColor="purple.500"
            icon={
              <Icon
                as={MaterialCommunityIcons}
                name={"credit-card-plus-outline"}
                color="white"
                size={5}
              />
            }
            _pressed={{
              backgroundColor: "purple.700",
            }}
            onPress={() => {}}
          />
        </HStack>
        <ScrollView flex={1} showsVerticalScrollIndicator={false}>
          {Array.from({ length: 5 }).map((_, index) => (
            <CreditCardProgress
              key={index}
              onOpen={() => handleMenuBottomSheetOpen()}
            />
          ))}
        </ScrollView>
      </VStack>
      <MenuCreditCards
        ref={bottomSheetRef}
        onClose={handleMenuBottomSheetClose}
      />
    </VStack>
  );
}
