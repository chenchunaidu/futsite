import { PropInput } from "../../../types/editor.types";

export const imageFitOptions = [
  { label: "Contain", value: "contain" },
  { label: "Cover", value: "cover" },
  { label: "Fill", value: "fill" },
  { label: "Scale down", value: "scale-down" },
];

export const ImageFitSelect: PropInput = {
  label: "Fit",
  name: "objectFit",
  component: "select",
  options: imageFitOptions,
};
