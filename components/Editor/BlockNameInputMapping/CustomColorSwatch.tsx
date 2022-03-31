import React from "react";
import {
  Group,
  InputWrapper,
  DEFAULT_THEME,
  useMantineTheme,
  ColorSwatch,
  ColorPicker,
} from "@mantine/core";
import { upperFirst } from "@mantine/hooks";
import { AiOutlineCheck } from "react-icons/ai";

interface ColorControlProps {
  value: string;
  label: string;
  onChange: (value: string) => void;
}

// const MARKS = [
//   { value: 0, label: "0" },
//   { value: 1, label: "1" },
//   { value: 2, label: "2" },
//   { value: 3, label: "3" },
//   { value: 4, label: "4" },
//   { value: 5, label: "5" },
//   { value: 6, label: "6" },
//   { value: 7, label: "7" },
//   { value: 8, label: "8" },
//   { value: 9, label: "9" },
// ];

const allColors = [
  ...Object.values(DEFAULT_THEME.colors).map((color) => color[5]),
  "None",
];

export function ColorControl({
  value,
  label,
  onChange,
  ...others
}: ColorControlProps) {
  const theme = useMantineTheme();

  return (
    <ColorPicker
      format="hex"
      value={value}
      onChange={onChange}
      swatches={allColors}
    />
  );
}

ColorControl.initialValue = "blue";
