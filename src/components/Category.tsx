import { TouchableOpacity, TouchableOpacityProps } from "react-native";
import { CardProps } from "../domains/CardProps";
import { Box, HStack, Text } from "native-base";

type Props = TouchableOpacityProps & {
  selected: boolean;
  data: CardProps;
};

export function Category({ data, selected, ...rest }: Props) {
  return (
    <TouchableOpacity
      style={{
        backgroundColor: "#cfb2ff",
        borderRadius: 4,
        padding: 4,
        paddingRight: 8,
        height: 36,
        flexDirection: "row",
        alignItems: "center",
        marginBottom: 8,
        marginHorizontal: 24,
        width: "100%",
      }}
      activeOpacity={0.7}
      {...rest}
    >
      <Box bgColor={data.color} w='4' h='full' borderRadius={6} mr='2' />
      <HStack flex={1} justifyContent='space-between'>
        <Text>{data.label}</Text>

        <Text>
          {data.value.toLocaleString("pt-BR", {
            style: "currency",
            currency: "BRL",
          })}
        </Text>
      </HStack>
    </TouchableOpacity>
  );
}
