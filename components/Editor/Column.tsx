import React from "react";
import { BlockComponentProps } from "../../types/editor.types";
import { useRecoilState } from "recoil";
import { editorStateAtom } from "../../atoms/editor.atom";
import BlockStateWrapper from "./BlockStateWrapper";
import { Group } from "@mantine/core";
export interface ColumnProps {
  children?: React.ReactNode;
}

const Column: React.FC<BlockComponentProps> = ({ blockId }) => {
  const [block] = useRecoilState(editorStateAtom);
  const currentBlock = block[blockId];
  const { children, props } = currentBlock;
  const {
    background,
    margin,
    padding = "10px",
    alignItems,
    justifyContent,
    flexGrow = 1,
  } = props;

  return (
    <div
      style={{
        background: background as string,
        display: "flex",
        flexDirection: "column",
        margin: margin as string,
        padding: padding as string,
        flexGrow: flexGrow as number,
        justifyContent: justifyContent as string,
        alignItems: alignItems as string,
      }}
      {...props}
    >
      {children.map((child) => (
        <BlockStateWrapper blockId={child} key={child} />
      ))}
    </div>
  );
};

export default Column;
