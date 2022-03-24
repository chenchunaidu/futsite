import { BlockItem, BlockNames } from "../types/editor.types";

interface GetDefaultBlockDataOutput {
  newBlocks: BlockItem[];
  mainBlockId: string;
}

export type GetDefaultBlockData = (
  input: BlockNames
) => GetDefaultBlockDataOutput;
