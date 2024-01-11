import { Button, Icon } from "native-base";
import { Feather } from "@expo/vector-icons";

type Props = {
  label: string;
  type: "up" | "down";
  isActive: boolean;
  onPress: () => void;
};

export function ButtonTransition({ label, type, isActive, onPress }: Props) {
  return (
    <Button
      variant='outline'
      w='32'
      isPressed={isActive}
      onPress={onPress}
      borderRadius='lg'
      borderColor={type === "up" ? "emerald.500" : "red.500"}
      bgColor={
        isActive ? (type === "up" ? "emerald.500:alpha.20" : "red.500:alpha.20") : "transparent"
      }
      _hover={{
        bgColor: type === "up" ? "emerald.500" : "red.500",
      }}
      _text={{
        color: type === "up" ? "emerald.500" : "red.500",
      }}
      leftIcon={
        <Icon
          as={Feather}
          name={type === "up" ? "arrow-up-circle" : "arrow-down-circle"}
          size={6}
          color={type === "up" ? "emerald.500" : "red.500"}
        />
      }
    >{label}</Button>
  );
}
