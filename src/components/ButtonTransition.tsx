import { Button, Icon } from "native-base";
import { Feather } from "@expo/vector-icons";

type Props = {
  label: string;
  type: "up" | "down" | "invest";
  isActive: boolean;
  onPress: () => void;
};

export function ButtonTransition({ label, type, isActive, onPress }: Props) {
  return (
    <Button
      variant='outline'
      // w='32'
      isPressed={isActive}
      onPress={onPress}
      borderRadius='lg'
      borderColor={type === "up" ? "green.500" : (type === "down" ? "red.500" : "purple.500")}
      bgColor={
        isActive ? (type === "up" ? "green.500:alpha.20" : (type === "down" ? "red.500:alpha.20" : "purple.500:alpha.20")) : "transparent"
      }
      _hover={{
        bgColor: type === "up" ? "green.500" : (type === "down" ? "red.500" : "purple.500"),
      }}
      _text={{
        fontSize: "2xs",
        color: type === "up" ? "green.500" : (type === "down" ? "red.500" : "purple.500"),
      }}
      leftIcon={
        <Icon
          as={Feather}
          name={type === "up" ? "arrow-up-circle" : (type === "down" ? "arrow-down-circle" : "trending-up")}
          size={4}
          color={type === "up" ? "green.500" : (type === "down" ? "red.500" : "purple.500")}
        />
      }
    >{label}</Button>
  );
}
