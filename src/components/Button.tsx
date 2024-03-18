import { Button as NBButton, IButtonProps } from "native-base";

type ButtonProps = IButtonProps & {
  label?: string;
  variant?: "solid" | "outline" | "ghost";
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
  ...rest
}: ButtonProps) {
  return (
    <NBButton
      variant={variant}
      isLoading={isLoading}
      leftIcon={icon}
      h={12}
      pr={5}
      _icon={{
        marginRight: 2,
      }}
      bgColor={bgColor}
      _pressed={{
        bgColor: `${pressedBgColor}`,
      }}
      borderRadius="2xl"
      {...rest}
    >
      {label}
    </NBButton>
  );
}
