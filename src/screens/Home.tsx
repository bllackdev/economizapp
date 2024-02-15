import { useState } from "react";
import { ScrollView, VStack } from "native-base";

import { Header } from "../components/Header";
import { Summary } from "../components/Summary";
import { CreditCardsContainer } from "../components/CreditCardsContainer";
import { InvestmentContainer } from "../components/InvestmentContainer";
import { NextPayments } from "../components/NextPayments";

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
      <ScrollView
        flex={1}
        px={6}
        pt={6}
        pb={6}
        borderTopRadius='24'
        bg='white'
        showsVerticalScrollIndicator={false}
        
      >
        <CreditCardsContainer showValues={showBalance} />
        <InvestmentContainer showValues={showBalance} />
        <NextPayments showValues={showBalance} />
      </ScrollView>
    </VStack>
  );
}
