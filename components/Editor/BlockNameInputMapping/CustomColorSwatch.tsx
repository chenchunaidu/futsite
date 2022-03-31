import React from "react";
import { DEFAULT_THEME, ColorPicker } from "@mantine/core";

interface ColorControlProps {
  value: string;
  label: string;
  onChange: (value: string) => void;
}

const allColors = [
  ...Object.values(DEFAULT_THEME.colors).map((color) => color[5]),
  "None",
];

export function ColorControl({ value, onChange }: ColorControlProps) {
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
