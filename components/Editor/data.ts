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
    props: {},
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
    children: ["Xif8H4SZBgh88xwJkeqI-", "INTiNi_lTsUmWUTMkw1Kz"],
    props: {},
    parentId: "",
  },
  "Xif8H4SZBgh88xwJkeqI-": {
    props: {},
    children: [
      "odsMvtF1IHb0evm9vWKNn",
      "n5SndkceFkR9MetvUUEAT",
      "P_fBdznZrYp_JCrJRfRxD",
    ],
    blockName: "Columns",
    id: "Xif8H4SZBgh88xwJkeqI-",
    parentId: "root",
  },
  odsMvtF1IHb0evm9vWKNn: {
    props: {},
    children: [
      "KmOBLISS6UN-4Y7wUowVj",
      "YQQaTOYDJf9NYxIxW9uzN",
      "-61nZ41RxPxtJm9tA1g5x",
    ],
    blockName: "Rows",
    id: "odsMvtF1IHb0evm9vWKNn",
    parentId: "Xif8H4SZBgh88xwJkeqI-",
  },
  n5SndkceFkR9MetvUUEAT: {
    props: {},
    children: [
      "LY-lKxbrbYncxoAsps238",
      "i2EXqKTeZZ6QjVYEu2tYY",
      "MjppJjahl374QE4cFMevb",
    ],
    blockName: "Rows",
    id: "n5SndkceFkR9MetvUUEAT",
    parentId: "Xif8H4SZBgh88xwJkeqI-",
  },
  P_fBdznZrYp_JCrJRfRxD: {
    props: {},
    children: [
      "zLf8m1xkd1LDoihfe69gf",
      "P3rBSUG47QQzW1EulGJ5G",
      "xMfgsITDNGhjPZNjIMIXe",
    ],
    blockName: "Rows",
    id: "P_fBdznZrYp_JCrJRfRxD",
    parentId: "Xif8H4SZBgh88xwJkeqI-",
  },
  "KmOBLISS6UN-4Y7wUowVj": {
    props: {
      src: "https://images.unsplash.com/photo-1647871953569-3175178a1775?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1548&q=80",
      width: "100%",
      height: "200px",
    },
    children: [],
    blockName: "Image",
    id: "KmOBLISS6UN-4Y7wUowVj",
    parentId: "odsMvtF1IHb0evm9vWKNn",
  },
  YQQaTOYDJf9NYxIxW9uzN: {
    props: {
      content: "Cable bridge",
      order: 2,
    },
    children: [],
    blockName: "Heading 2",
    id: "YQQaTOYDJf9NYxIxW9uzN",
    parentId: "odsMvtF1IHb0evm9vWKNn",
  },
  "LY-lKxbrbYncxoAsps238": {
    props: {
      src: "https://images.unsplash.com/photo-1647953913599-7822614c2209?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxMzl8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=800&q=60",
      height: "200px",
    },
    children: [],
    blockName: "Image",
    id: "LY-lKxbrbYncxoAsps238",
    parentId: "n5SndkceFkR9MetvUUEAT",
  },
  i2EXqKTeZZ6QjVYEu2tYY: {
    props: {
      content: "Lighthouse",
      order: 2,
    },
    children: [],
    blockName: "Heading 2",
    id: "i2EXqKTeZZ6QjVYEu2tYY",
    parentId: "n5SndkceFkR9MetvUUEAT",
  },
  MjppJjahl374QE4cFMevb: {
    props: {
      content: "This lighthouse has been here for a long time",
      color: "#adb5bd",
    },
    children: [],
    blockName: "Text",
    id: "MjppJjahl374QE4cFMevb",
    parentId: "n5SndkceFkR9MetvUUEAT",
  },
  zLf8m1xkd1LDoihfe69gf: {
    props: {
      src: "https://images.unsplash.com/photo-1647996179012-66b87eba3d17?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxOHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=60",
      height: "200px",
    },
    children: [],
    blockName: "Image",
    id: "zLf8m1xkd1LDoihfe69gf",
    parentId: "P_fBdznZrYp_JCrJRfRxD",
  },
  P3rBSUG47QQzW1EulGJ5G: {
    props: {
      content: "Beautiful home",
      order: 2,
    },
    children: [],
    blockName: "Heading 2",
    id: "P3rBSUG47QQzW1EulGJ5G",
    parentId: "P_fBdznZrYp_JCrJRfRxD",
  },
  xMfgsITDNGhjPZNjIMIXe: {
    props: {
      content: "Beatuiful home by by people",
      color: "#adb5bd",
    },
    children: [],
    blockName: "Text",
    id: "xMfgsITDNGhjPZNjIMIXe",
    parentId: "P_fBdznZrYp_JCrJRfRxD",
  },
  vltzzezQ9oUggORWIenaG: {
    props: {
      content: "",
    },
    children: [],
    blockName: "Text",
    id: "vltzzezQ9oUggORWIenaG",
    parentId: "odsMvtF1IHb0evm9vWKNn",
  },
  "-61nZ41RxPxtJm9tA1g5x": {
    props: {
      content: "Mary christmas",
      color: "#adb5bd",
    },
    children: [],
    blockName: "Text",
    id: "-61nZ41RxPxtJm9tA1g5x",
    parentId: "odsMvtF1IHb0evm9vWKNn",
  },
  INTiNi_lTsUmWUTMkw1Kz: {
    props: {},
    children: [
      "dpl8y8KUUB7IVWKRGtBZc",
      "OrxjdIt20uhJREJmrIfdo",
      "FbUW6DnNCyaWnpV5IKJHW",
    ],
    blockName: "Rows",
    id: "INTiNi_lTsUmWUTMkw1Kz",
    parentId: "root",
  },
  dpl8y8KUUB7IVWKRGtBZc: {
    props: {
      src: "https://images.unsplash.com/photo-1648007373565-91db44cd89ae?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyN3x8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=60",
      height: "500px",
    },
    children: [],
    blockName: "Image",
    id: "dpl8y8KUUB7IVWKRGtBZc",
    parentId: "INTiNi_lTsUmWUTMkw1Kz",
  },
  OrxjdIt20uhJREJmrIfdo: {
    props: {
      content: "Speical drive",
      order: 1,
    },
    children: [],
    blockName: "Heading 1",
    id: "OrxjdIt20uhJREJmrIfdo",
    parentId: "INTiNi_lTsUmWUTMkw1Kz",
  },
  FbUW6DnNCyaWnpV5IKJHW: {
    props: {
      content:
        "Under the special drive, students who have already taken admission in particular courses and colleges are not eligible to apply. Cancelling admission in a particular college or course and shifting to a different course or college is also not permitted under the special",
    },
    children: [],
    blockName: "Text",
    id: "FbUW6DnNCyaWnpV5IKJHW",
    parentId: "INTiNi_lTsUmWUTMkw1Kz",
  },
};

export const inputComponentMapping = {
  // text: CustomTextInput,
  text: CustomTextInput,
  // number: NumberInput,
  // select: Select,
  // switch: Switch,
  color: ColorControl,
  // textarea: Textarea,
};

type BlockNameInputComponentMapping = Record<BlockNames, PropInput[]>;

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
  Rows: [],
};
