import { VStack } from "native-base";
import { Header } from "../components/Header";
import { Summary } from "../components/Summary";
import { Listing } from "../components/Listing";

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
      <VStack flex={1} px={8} pt={6} pb={0} borderTopRadius='24' bg='white'>
        <Listing />
      </VStack>
    </VStack>
  );
}
