import { SelectItem } from "@mantine/core";
import { PropInput } from "../../../types/editor.types";

export const sizeOptions: SelectItem[] = [
  { label: "Small", value: "14px" },
  { label: "Base", value: "16px" },
  { label: "Large", value: "18px" },
  { label: "Extra Large", value: "20px" },
  { label: "2xl", value: "24px" },
  { label: "3xl", value: "30px" },
  { label: "4xl", value: "36px" },
  { label: "5xl", value: "48px" },
  { label: "6xl", value: "60px" },
  { label: "7xl", value: "72px" },
  { label: "8xl", value: "96px" },
  { label: "9xl", value: "128px" },
];

export const SizeSelect: PropInput = {
  label: "Font size",
  name: "fontSize",
  component: "select",
  options: sizeOptions,
};
