import { nanoid } from "nanoid";
import { Block } from "../../types/editor.types";
import CustomButton from "./Button";

import Column from "./Column";
import CustomImage from "./Image";
import CustomList from "./List";
import Row from "./Row";
import CustomText from "./Text";
import { Heading1, Heading2, Heading3 } from "./Title";

export const blockNameComponentMapping = {
  Rows: { component: Row, props: { p: "md" } },
  Text: { component: CustomText, props: { content: "Text" } },
  Columns: {
    component: Column,
    props: { p: "md" },
  },
  Heading1: {
    component: Heading1,
    props: { content: "Heading 1", order: 1 },
  },
  Heading2: {
    component: Heading2,
    props: { content: "Heading 2", order: 2 },
  },
  Heading3: {
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
    props: { p: "md" },
    parentId: "",
  },
};
