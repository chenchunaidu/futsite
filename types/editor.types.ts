import { blockNameComponentMapping } from "../components/Editor/data";

export interface BlockComponentProps {
  blockId: string;
}

export type Block = Record<string, BlockItem>;

export type BlockNames = keyof typeof blockNameComponentMapping;
export interface BlockItem {
  id: string;
  blockName: BlockNames;
  props: Record<string, unknown>;
  children: string[];
  selected?: boolean;
}

export interface ListItem {
  id: string;
  data: string;
}

export type HandleEditorStateChange = () => void;

export type HandleSetSelectedBlock = (block: Block) => void;
