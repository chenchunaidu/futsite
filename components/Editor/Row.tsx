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
  const { children, props } = currentBlock;
  // const { background } = props;
  const { background, spacing, margin, padding = "10px", ...styles } = props;

  return (
    <div
      style={{
        background: background as string,
        display: "grid",
        gridTemplateColumns: `repeat(${children.length}, minmax(0, 1fr))`,
        gap: spacing as string,
        margin: margin as string,
        padding: padding as string,
        ...styles,
      }}
    >
      {children.map((child) => (
        <BlockStateWrapper blockId={child} key={child} />
      ))}
    </div>
  );
};

export default Row;
