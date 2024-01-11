import { Center, Heading, Icon } from "native-base";
import { MaterialCommunityIcons } from "@expo/vector-icons";

export function Empty() {
  return (
    <Center h='300'>
      <Icon
        as={<MaterialCommunityIcons name='delete-empty' />}
        size={20}
        color='violet.700'
      />
      <Heading color='violet.700' fontSize='lg' textAlign='center'>
        Não há lançamentos {"\n"} neste período.
      </Heading>
    </Center>
  );
}
