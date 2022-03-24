import { TextInput, TextInputProps } from "@mantine/core";
import React from "react";

interface CustomTextInputProps extends Omit<TextInputProps, "onChange"> {
  onChange: (input: string) => void;
}

const CustomTextInput: React.FC<CustomTextInputProps> = ({
  onChange,
  ...props
}) => {
  return (
    <TextInput
      onChange={(e) => {
        onChange(e.target.value);
      }}
      {...props}
    />
  );
};

export default CustomTextInput;
