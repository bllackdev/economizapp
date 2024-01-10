import { VStack } from "native-base";
import { Header } from "../components/Header";
import { Summary } from "../components/Summary";
import { Listing } from "../components/Listing";

export function Home() {
  return (
    <VStack flex={1} bg='gray.200'>
      <VStack
        bg='gray.900'
        w='full'
        p={8}
        justifyContent='center'
        alignItems='center'
      >
        <Header />
        <Summary />
      </VStack>
      <VStack flex={1} p={8}>
        <Listing />
      </VStack>
    </VStack>
  );
}
