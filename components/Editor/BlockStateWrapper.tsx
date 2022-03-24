import React from "react";
import { useRecoilState } from "recoil";
import { Box } from "@mantine/core";
import {
  editorStateAtom,
  hoveredBlockIdAtom,
  selectedBlockIdAtom,
} from "../../atoms/editor.atom";
import { blockNameComponentMapping } from "./data";
import BlockWrapper from "./BlockWrapper";

interface BlockStateWrapperProps {
  blockId: string;
}

const BlockStateWrapper: React.FC<BlockStateWrapperProps> = ({ blockId }) => {
  const [block] = useRecoilState(editorStateAtom);
  const [selectedBlockId, setSelectedBlockId] =
    useRecoilState(selectedBlockIdAtom);
  const [hoveredBlockId, setHoveredBlockId] =
    useRecoilState(hoveredBlockIdAtom);
  return (
    <BlockWrapper
      block={block}
      selectedBlockId={selectedBlockId}
      hoveredBlockId={hoveredBlockId}
      setHoveredBlockId={setHoveredBlockId}
      setSelectedBlockId={setSelectedBlockId}
      blockId={blockId}
    />
  );
};

export default BlockStateWrapper;
