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
    <VStack flex={1} bg='gray.800'>
      <VStack
        w='full'
        px={6}
        py={2}
        justifyContent='center'
        alignItems='center'
      >
        <Header showValues={showBalance} setShowValues={setShowBalance} />
        <Summary showValues={showBalance} />
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
