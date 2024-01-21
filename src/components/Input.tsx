import { Input as NBInput, IInputProps } from "native-base";

type Props = IInputProps & {
  width?: string;
  placeholder: string;
  value?: string;
  isReadOnly?: boolean;
  isDisabled?: boolean;
  isInvalid?: boolean;
  keyboardType?:
    | "default"
    | "numeric"
    | "email-address"
    | "ascii-capable"
    | "numbers-and-punctuation"
    | "url"
    | "number-pad"
    | "phone-pad"
    | "name-phone-pad"
    | "decimal-pad"
    | "twitter"
    | "web-search"
    | "visible-password";
};

export function Input({
  width,
  placeholder,
  value,
  isReadOnly = false,
  isDisabled = false,
  isInvalid = false,
  keyboardType = "default",
  ...rest
}: Props) {
  return (
    <NBInput
      w={width}
      placeholder={placeholder}
      value={value}
      isReadOnly={isReadOnly}
      isDisabled={isDisabled}
      bgColor='violet.400:alpha.10'
      placeholderTextColor='violet.500'
      borderColor='violet.500'
      isInvalid={isInvalid}
      borderRadius='lg'
      keyboardType={keyboardType}
      _invalid={{
        borderWidth: 1,
        borderColor: "red.500",
      }}
      _focus={{
        bg: null,
        borderWidth: 1,
        borderColor: "green.600",
      }}
      {...rest}
    />
  );
}
