import { Group } from "@mantine/core";
import React from "react";
import { BlockComponentProps } from "../../types/editor.types";
import { useRecoilState } from "recoil";
import { editorStateAtom } from "../../atoms/editor.atom";
import BlockStateWrapper from "./BlockStateWrapper";
export interface RowProps {
  children?: React.ReactNode;
}

const Row: React.FC<BlockComponentProps> = ({ blockId }) => {
  const [block] = useRecoilState(editorStateAtom);
  const currentBlock = block[blockId];
  const { children } = currentBlock;
  return (
    <Group direction="column" spacing={0} grow p="md">
      {children.map((child) => (
        <BlockStateWrapper blockId={child} key={child} />
      ))}
    </Group>
  );
};

export default Row;
