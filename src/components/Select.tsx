import React from "react";
import { CheckIcon, Icon, Select as NBSelect } from "native-base";
import { MaterialCommunityIcons } from "@expo/vector-icons";

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
  icon?: string;
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
      placeholderTextColor='violet.200'
      selectedValue={selectedValue}
      onValueChange={(itemValue: any) => onValueChange(itemValue)}
      borderRadius='lg'
      borderColor='violet.500'
      w='full'
      mb={2}
      color={textColor}
      fontSize='sm'
      _selectedItem={{
        bg: "violet.700:alpha.30",
        endIcon: <CheckIcon size='5' />,
        borderRadius: "xl",
      }}
      _actionSheetContent={{
        bgColor: "gray.700",
      }}
      _item={{
        justifyContent: "center",
        bgColor: "gray.700",
        py: 3,
        _text: { color: "white", fontSize: "sm", fontWeight: "700" },
        _icon: { color: "white", size: "5" },
      }}
    >
      {items.map((item) => (
        <NBSelect.Item
          label={item.label}
          value={item.label}
          key={item.label}
          leftIcon={<Icon as={MaterialCommunityIcons} name={item.icon} />}
          borderRadius='lg'
          borderWidth={1}
          borderColor='violet.500'
          mb={2}
        />
      ))}
    </NBSelect>
  );
}
