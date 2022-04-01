import React from "react";
import { DEFAULT_THEME, ColorPicker } from "@mantine/core";

interface ColorControlProps {
  value: string;
  label: string;
  onChange: (value: string) => void;
}

const allColors = [
  ...Object.values(DEFAULT_THEME.colors).map((color) => color[5]),
];

export function ColorControl({ value, onChange }: ColorControlProps) {
  return (
    <ColorPicker
      format="hsla"
      value={value}
      onChange={onChange}
      swatches={allColors}
    />
  );
}

ColorControl.initialValue = "blue";
