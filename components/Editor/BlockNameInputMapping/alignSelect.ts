import { SelectItem } from "@mantine/core";
import { PropInput } from "../../../types/editor.types";

export const alignOptions: SelectItem[] = [
  { label: "Left", value: "left" },
  { label: "Right", value: "right" },
  { label: "Center", value: "center" },
  { label: "Justify", value: "justify" },
];

export const AlignSelect: PropInput = {
  label: "Align",
  name: "textAlign",
  component: "select",
  options: alignOptions,
};
