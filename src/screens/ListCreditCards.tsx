import { useRef } from "react";
import { Heading, ScrollView, Text, VStack } from "native-base";
import BottomSheet from "@gorhom/bottom-sheet";

import { CreditCardProgress } from "../components/CreditCardProgress";
import { MenuCreditCards } from "../components/MenuCreditCards";

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
      <VStack flex={1} p={6} bg="white" borderTopRadius="3xl">
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
