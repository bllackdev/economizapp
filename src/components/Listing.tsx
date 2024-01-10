import { Heading, ScrollView, VStack, Button, Icon } from "native-base";
import { AntDesign } from "@expo/vector-icons";

import { Card } from "./Card";

export function Listing() {
  return (
    <VStack flex={1}>
      <Heading color='gray.900' fontSize='lg'>
        Últimos lançamentos
      </Heading>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Button
          variant='link'
          size={12}
          w='full'
          rightIcon={
            <Icon as={AntDesign} name='arrowright' size={4} color='gray.400' />
          }
          _pressed={{
            color: "emerald.500",
          }}
          _text={{
            fontSize: "xs",
            color: "gray.400",
          }}
        >
          Ver mais
        </Button>
      </ScrollView>
    </VStack>
  );
}
