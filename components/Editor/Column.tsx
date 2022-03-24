import { SimpleGrid } from "@mantine/core";
import React from "react";
import { BlockComponentProps } from "../../types/editor.types";
import { useRecoilState } from "recoil";
import { editorStateAtom } from "../../atoms/editor.atom";
import BlockStateWrapper from "./BlockStateWrapper";
export interface ColumnProps {
  children?: React.ReactNode;
}

const Column: React.FC<BlockComponentProps> = ({ blockId }) => {
  const [block] = useRecoilState(editorStateAtom);
  const currentBlock = block[blockId];
  const { children } = currentBlock;

  return (
    <SimpleGrid cols={children.length} py="md">
      {children.map((child) => (
        <BlockStateWrapper blockId={child} key={child} />
      ))}
    </SimpleGrid>
  );
};

export default Column;
