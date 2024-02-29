import { Image, ImageProps } from "react-native";
import { useToken } from "native-base";

type Props = ImageProps & {
  selected: boolean;
};

export function Avatar({ selected, ...rest }: Props) {
  const emerald500 = useToken("colors", "emerald.500");
  
  return (
    <Image
      style={{
        width: 30,
        height: 30,
        borderRadius: 25,
        borderWidth: selected ? 3 : 0,
        borderColor: selected && emerald500,
      }}
      {...rest}
    />
  );
}
