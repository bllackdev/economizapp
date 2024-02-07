import { Text, VStack } from "native-base";

import { Header } from "../components/Header";
import { Listing } from "../components/Listing";
import { Summary } from "../components/Summary";
import { CreditCardsContainer } from "../components/CreditCardsContainer";

export function Home() {
  return (
    <VStack flex={1} bg='gray.900'>
      <VStack
        w='full'
        px={8}
        py={5}
        justifyContent='center'
        alignItems='center'
      >
        <Header />
        <Summary />
      </VStack>
      <VStack flex={1} px={6} pt={6} pb={0} borderTopRadius='24' bg='white'>
        <CreditCardsContainer />
        {/* <Listing /> */}
      </VStack>
    </VStack>
  );
}
