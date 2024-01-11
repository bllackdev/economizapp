import { CheckIcon, Select as NBSelect } from "native-base";

export type MonthsProps =
  | "Janeiro"
  | "Fevereiro"
  | "Março"
  | "Abril"
  | "Maio"
  | "Junho"
  | "Julho"
  | "Agosto"
  | "Setembro"
  | "Outubro"
  | "Novembro"
  | "Dezembro";

type Item = {
  label: string;
  value: string;
};

type Props = {
  items: Item[];
  placeholder: string;
  selectedValue?: string;
  onValueChange?: (value: MonthsProps) => void;
  textColor?: string;
};

export function Select({
  items,
  placeholder,
  selectedValue,
  onValueChange,
  textColor,
}: Props) {
  return (
    <NBSelect
      accessibilityLabel='Selecione a categoria'
      placeholder={placeholder}
      placeholderTextColor='violet.500'
      selectedValue={selectedValue}
      onValueChange={(itemValue: any) => onValueChange(itemValue)}
      bgColor='violet.400:alpha.10'
      borderRadius='lg'
      borderColor='violet.500'
      w='full'
      mb={2}
      color={textColor}
      _selectedItem={{
        bg: "violet.700:alpha.30",
        endIcon: <CheckIcon size='5' />,
        borderRadius: "xl",
      }}
      _actionSheetContent={{
        bgColor: "gray.700",
      }}
      _item={{
        bgColor: "gray.700",
        py: 3,
        _text: { color: "emerald.600", fontSize: "sm" },
        _icon: { color: "emerald.600" },
      }}

    >
      {items.map((item) => (
        <NBSelect.Item label={item.label} value={item.label} key={item.label} />
      ))}
    </NBSelect>
  );
}
