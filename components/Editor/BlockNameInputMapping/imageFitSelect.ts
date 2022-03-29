import { PropInput } from "../../../types/editor.types";

export const imageFitOptions = [
  { label: "Contain", value: "contain" },
  { label: "Cover", value: "cover" },
];

export const ImageFitSelect: PropInput = {
  label: "Fit",
  name: "fit",
  component: "select",
  options: imageFitOptions,
};
