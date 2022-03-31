import { CSSObject, Group, useMantineTheme } from "@mantine/core";
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
  const theme = useMantineTheme();
  const currentBlock = block[blockId];
  const { children, props } = currentBlock;
  const { background = theme.colors.gray[1] } = props;

  return (
    <Group
      direction="column"
      spacing={0}
      grow
      p="md"
      {...props}
      sx={{ background: background as string, height: "100%" }}
    >
      {children.map((child) => (
        <BlockStateWrapper blockId={child} key={child} />
      ))}
    </Group>
  );
};

export default Row;
