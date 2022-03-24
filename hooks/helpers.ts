import { nanoid } from "nanoid";
import { blockNameComponentMapping } from "../components/Editor/data";
import { BlockItem } from "../types/editor.types";
import { GetDefaultBlockData } from "./types";
import cloneDeep from "lodash.clonedeep";

export const getDefaultBlockData: GetDefaultBlockData = (blockName) => {
  const { props } = blockNameComponentMapping[blockName];
  let children: string[] = [];
  const allBlocks: BlockItem[] = [];
  if (blockName !== "Rows" && blockName !== "Columns") {
    children = [];
  }
  const mainBlock = cloneDeep({
    props,
    children: children,
    blockName,
    id: nanoid(),
  });
  allBlocks.push(mainBlock);
  return { newBlocks: allBlocks, mainBlockId: mainBlock.id };
};
