import { Select } from "@mantine/core";
import { BlockNames, PropInput } from "../../../types/editor.types";

import CustomTextInput from "./CustomTextInput";
import { AlignSelect } from "./alignSelect";
import { ImageFitSelect } from "./imageFitSelect";
import { SizeSelect } from "./sizeSelect";
import { TransformSelect } from "./transformSelect";
import { FontWeightSelect } from "./weightSelect";

export const inputComponentMapping = {
  text: CustomTextInput,
  select: Select,
};

type BlockNameInputComponentMapping = Record<BlockNames, PropInput[]>;

export const blockNameInputComponentMapping: BlockNameInputComponentMapping = {
  Button: [
    { label: "Border", name: "border", component: "text" },
    { label: "Color", name: "color", component: "text" },
    { label: "Border radius", name: "borderRadius", component: "text" },
    { label: "Background", name: "background", component: "text" },
  ],
  Text: [
    AlignSelect,
    SizeSelect,
    { label: "Color", name: "color", component: "text" },
    TransformSelect,
    FontWeightSelect,
  ],
  Columns: [
    { label: "Width", name: "width", component: "text" },
    { label: "Height", name: "height", component: "text" },
    { label: "Justify", name: "justifyContent", component: "text" },
    { label: "Align items", name: "alignItems", component: "text" },
    { label: "Background color", name: "background", component: "text" },
  ],
  Image: [
    { label: "Image url", name: "src", component: "text" },
    { label: "Alt", name: "alt", component: "text" },
    // { label: "Caption", name: "caption", component: "text" },
    ImageFitSelect,
    { label: "Width", name: "width", component: "text" },
    { label: "Border radius", name: "borderRadius", component: "text" },
    { label: "Height", name: "height", component: "text" },
  ],
  Heading1: [
    AlignSelect,
    { label: "Color", name: "color", component: "text" },
    TransformSelect,
    FontWeightSelect,
  ],
  Heading2: [
    AlignSelect,
    { label: "Color", name: "color", component: "text" },
    TransformSelect,
    FontWeightSelect,
  ],
  Heading3: [
    AlignSelect,
    { label: "Color", name: "color", component: "text" },
    TransformSelect,
    FontWeightSelect,
  ],
  List: [],
  Rows: [
    { label: "Width", name: "width", component: "text" },
    { label: "Height", name: "height", component: "text" },
    { label: "Align", name: "alignItems", component: "text" },
    { label: "Justify", name: "justifyItems", component: "text" },
    { label: "Spacing", name: "spacing", component: "text" },
    { label: "Background color", name: "background", component: "text" },
  ],
};
