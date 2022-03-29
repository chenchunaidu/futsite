import { SelectItem } from "@mantine/core";
import { PropInput } from "../../../types/editor.types";

export const sizeOptions: SelectItem[] = [
  { label: "Extra small", value: "xs" },
  { label: "Small", value: "sm" },
  { label: "Medium", value: "md" },
  { label: "Large", value: "lg" },
  { label: "Extra Large", value: "xl" },
];

export const SizeSelect: PropInput = {
  label: "Size",
  name: "size",
  component: "select",
  options: sizeOptions,
};
