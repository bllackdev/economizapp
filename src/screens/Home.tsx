import { useState } from "react";
import { Text, VStack } from "native-base";

import { Header } from "../components/Header";
import { Listing } from "../components/Listing";
import { Summary } from "../components/Summary";
import { CreditCardsContainer } from "../components/CreditCardsContainer";
import { InvestmentContainer } from "../components/InvestmentContainer";

export function Home() {
  const [showBalance, setShowBalance] = useState(true);

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
        <Summary showValues={showBalance} setShowValues={setShowBalance} />
      </VStack>
      <VStack
        flex={1}
        px={6}
        pt={6}
        pb={0}
        borderTopRadius='24'
        bg='white'
        space={3}
      >
        <CreditCardsContainer showValues={showBalance} />
        <InvestmentContainer showValues={showBalance} />
        {/* <Listing /> */}
      </VStack>
    </VStack>
  );
}
