import { PropInput } from "../../../types/editor.types";

export const fontWeightOptions = [
  {
    label: "Thin",
    value: "100",
  },
  {
    label: "Extra light",
    value: "200",
  },
  {
    label: "Light",
    value: "300",
  },
  {
    label: "Normal",
    value: "400",
  },
  {
    label: "Medium",
    value: "500",
  },
  {
    label: "Semi bold",
    value: "600",
  },
  {
    label: "Bold",
    value: "700",
  },
  {
    label: "Extra bold",
    value: "800",
  },
  {
    label: "Black",
    value: "900",
  },
];

export const FontWeightSelect: PropInput = {
  label: "Font weight",
  name: "fontWeight",
  component: "select",
  options: fontWeightOptions,
};
