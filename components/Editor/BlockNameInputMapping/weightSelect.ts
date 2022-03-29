import { PropInput } from "../../../types/editor.types";

export const fontWeightOptions = [
  {
    label: "Lighter",
    value: "lighter",
  },
  {
    label: "Normal",
    value: "normal",
  },
  {
    label: "Semi bold",
    value: "500",
  },
  {
    label: "Bold",
    value: "bold",
  },
  {
    label: "Bolder",
    value: "bolder",
  },
];

export const FontWeightSelect: PropInput = {
  label: "Font weight",
  name: "weight",
  component: "select",
  options: fontWeightOptions,
};
