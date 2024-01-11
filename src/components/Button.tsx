import { Button as NBButton } from "native-base";

type ButtonProps = {
  label: string;
  variant?: "solid" | "outline";
  isLoading?: boolean;
  icon?: JSX.Element[] | JSX.Element;
  bgColor?: string;
  pressedBgColor?: string;
};

export function Button({
  label,
  variant = "solid",
  isLoading,
  icon,
  bgColor,
  pressedBgColor,
}: ButtonProps) {
  return (
    <NBButton
      variant={variant}
      isLoading={isLoading}
      leftIcon={icon}
      h={12}
      _icon={{
        marginRight: 4,
      }}
      bgColor={bgColor}
      _pressed={{
        bgColor: `${pressedBgColor}`,
      }}
      borderRadius='lg'
    >
      {label}
    </NBButton>
  );
}
