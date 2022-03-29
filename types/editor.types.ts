import {
  blockNameComponentMapping,
  inputComponentMapping,
} from "../components/Editor/data";

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
  parentId: string;
}

export interface ListItem {
  id: string;
  data: string;
}

export type HandleEditorStateChange = () => void;

export type HandleSetSelectedBlock = (block: Block) => void;

export type InputComponentNames = keyof typeof inputComponentMapping;

export interface PropInput {
  label: string;
  name: string;
  component: InputComponentNames;
  defaultValue?: string | number;
}
