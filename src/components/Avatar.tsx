import { Image, ImageProps } from "react-native";
import { useToken } from "native-base";

type Props = ImageProps & {
  selected: boolean;
};

export function Avatar({ selected, ...rest }: Props) {
  const green500 = useToken("colors", "green.500");
  
  return (
    <Image
      style={{
        width: 30,
        height: 30,
        borderRadius: 25,
        borderWidth: selected ? 3 : 0,
        borderColor: selected && green500,
      }}
      {...rest}
    />
  );
}
