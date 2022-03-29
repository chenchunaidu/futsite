import { Select } from "@mantine/core";
import { nanoid } from "nanoid";
import { Block, BlockNames, PropInput } from "../../types/editor.types";
import CustomButton from "./Button";

import Column from "./Column";
import { ColorControl } from "./CustomColorSwatch";
import CustomTextInput from "./CustomTextInput";
import CustomImage from "./Image";
import CustomList from "./List";
import Row from "./Row";
import CustomText from "./Text";
import { Heading1, Heading2, Heading3 } from "./Title";

export const blockNameComponentMapping = {
  Rows: { component: Row, props: {} },
  Text: { component: CustomText, props: { content: "Text" } },
  Columns: {
    component: Column,
    props: {},
  },
  "Heading 1": {
    component: Heading1,
    props: { content: "Heading 1", order: 1 },
  },
  "Heading 2": {
    component: Heading2,
    props: { content: "Heading 2", order: 2 },
  },
  "Heading 3": {
    component: Heading3,
    props: { content: "Heading 3", order: 3 },
  },
  Image: {
    component: CustomImage,
    props: { width: "100px", height: "100px" },
  },
  Button: { component: CustomButton, children: [], props: { label: "Submit" } },
  List: {
    component: CustomList,
    props: {
      listItems: [
        { id: nanoid(), data: "Item 1" },
        { id: nanoid(), data: "Item 1" },
      ],
    },
  },
};

export const SampleEditorState: Block = {
  root: {
    id: "root",
    blockName: "Rows",
    children: [],
    props: {},
    parentId: "",
  },
};

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

export const defaultInputs: PropInput[] = [
  { label: "Margin", name: "m", component: "text" },
  { label: "Padding", name: "p", component: "text" },
];

export const blockNameInputComponentMapping: BlockNameInputComponentMapping = {
  Button: [
    { label: "Color", name: "color", component: "color" },
    { label: "Size", name: "size", component: "text" },
  ],
  Text: [
    { label: "Align", name: "align", component: "text" },
    { label: "Color", name: "color", component: "color" },
    { label: "Size", name: "size", component: "text" },
    { label: "Transform", name: "transform", component: "text" },
    { label: "Weight", name: "weight", component: "text" },
  ],
  Columns: [],
  Image: [
    { label: "Image url", name: "src", component: "text" },
    { label: "Alt", name: "alt", component: "text" },
    { label: "Caption", name: "caption", component: "text" },
    { label: "Fit", name: "fit", component: "text" },
    { label: "Width", name: "width", component: "text" },
    { label: "Height", name: "height", component: "text" },
  ],
  "Heading 1": [{ label: "Align", name: "align", component: "text" }],
  "Heading 2": [{ label: "Align", name: "align", component: "text" }],
  "Heading 3": [{ label: "Align", name: "align", component: "text" }],
  List: [],
  Rows: [{ label: "Align", name: "align", component: "text" }],
};
