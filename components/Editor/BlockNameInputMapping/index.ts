import { Select, SelectItem } from "@mantine/core";
import { BlockNames, PropInput } from "../../../types/editor.types";

import { ColorControl } from "../CustomColorSwatch";
import CustomTextInput from "../CustomTextInput";
import { AlignSelect } from "./alignSelect";
import { ImageFitSelect } from "./imageFitSelect";
import { SizeSelect } from "./sizeSelect";
import { TransformSelect } from "./transformSelect";
import { FontWeightSelect } from "./weightSelect";

export const inputComponentMapping = {
  // text: CustomTextInput,
  text: CustomTextInput,
  // number: NumberInput,
  select: Select,
  // switch: Switch,
  color: ColorControl,
  // textarea: Textarea,
};

type BlockNameInputComponentMapping = Record<BlockNames, PropInput[]>;

export const blockNameInputComponentMapping: BlockNameInputComponentMapping = {
  Button: [{ label: "Color", name: "color", component: "color" }, SizeSelect],
  Text: [
    AlignSelect,
    SizeSelect,
    { label: "Color", name: "color", component: "color" },
    TransformSelect,
    FontWeightSelect,
  ],
  Columns: [],
  Image: [
    { label: "Image url", name: "src", component: "text" },
    { label: "Alt", name: "alt", component: "text" },
    { label: "Caption", name: "caption", component: "text" },
    ImageFitSelect,
    { label: "Width", name: "width", component: "text" },
    { label: "Height", name: "height", component: "text" },
  ],
  "Heading 1": [{ label: "Align", name: "align", component: "text" }],
  "Heading 2": [{ label: "Align", name: "align", component: "text" }],
  "Heading 3": [{ label: "Align", name: "align", component: "text" }],
  List: [],
  Rows: [{ label: "Align", name: "align", component: "text" }],
};
