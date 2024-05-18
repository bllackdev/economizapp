import { forwardRef } from "react";

import { Text, TextInput, View } from "react-native";

import { colors } from "@/styles/colors";

import { cn } from "../lib/utils";

export interface InputProps
  extends React.ComponentPropsWithoutRef<typeof TextInput> {
  label?: string;
  labelClasses?: string;
  inputClasses?: string;
}
const Input = forwardRef<React.ElementRef<typeof TextInput>, InputProps>(
  ({ className, label, labelClasses, inputClasses, ...props }, ref) => (
    <View className={cn("flex w-full flex-col gap-1.5", className)}>
      {label && <Text className={cn("text-white", labelClasses)}>{label}</Text>}
      <TextInput
        placeholderTextColor={colors.gray[300]}
        cursorColor={colors.violet[500]}
        className={cn(
          inputClasses,
          "rounded-2xl bg-gray-400 px-4 py-2.5 text-white",
        )}
        {...props}
      />
    </View>
  ),
);

export { Input };
