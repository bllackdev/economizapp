import { Button } from "native-base";

type Props = {
  label: string;
  isActive: boolean;
  onPress: () => void;
};

export function MonthCard({
  label,
  isActive,
  onPress,
}: Props) {
  return (
    <Button
      variant='outline'
      isPressed={isActive}
      onPress={onPress}
      borderRadius='3xl'
      borderColor= {isActive ? 'violet.500' : "gray.300"}
      mr={2}
      px={4}
      py={1}
      _text={{
        fontSize: "xs",
        color: isActive ? 'gray.900' : "gray.300",
        fontWeight: isActive ? "semibold" : "normal"
      }}
      _pressed={{
        bgColor: isActive ? "violet.500" : "transparent"
      }}
    >
      {label}
    </Button>
  );
}
