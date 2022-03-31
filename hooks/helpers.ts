import { nanoid } from "nanoid";
import { blockNameComponentMapping } from "../components/Editor/data";
import { Block, BlockItem } from "../types/editor.types";
import { GetDefaultBlockData } from "./types";
import cloneDeep from "lodash.clonedeep";

export const getDefaultBlockData: GetDefaultBlockData = (
  blockName,
  selectedBlockId
) => {
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
    parentId: selectedBlockId,
  });
  allBlocks.push(mainBlock);
  return { newBlocks: allBlocks, mainBlockId: mainBlock.id };
};

export const getAllSelectedBlocks = (
  blocks: Block,
  selectedBlockIds: string[],
  childBlockIds: string[]
) => {
  selectedBlockIds.forEach((selectedBlockId) => {
    blocks[selectedBlockId].children.forEach((child) => {
      childBlockIds.push(child);
    });
    getAllSelectedBlocks(
      blocks,
      blocks[selectedBlockId].children,
      childBlockIds
    );
  });
};
