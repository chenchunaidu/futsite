import { SelectItem } from "@mantine/core";
import { PropInput } from "../../../types/editor.types";

export const transformOptions: SelectItem[] = [
  { label: "None", value: "none" },
  { label: "Capitalize", value: "capitalize" },
  { label: "Uppercase", value: "uppercase" },
  { label: "Lowercase", value: "lowercase" },
];

export const TransformSelect: PropInput = {
  label: "Transform",
  name: "textTransform",
  component: "select",
  options: transformOptions,
};
