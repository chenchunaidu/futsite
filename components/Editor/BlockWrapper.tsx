import React from "react";
import { useRecoilState } from "recoil";
import { Box } from "@mantine/core";
import {
  editorStateAtom,
  hoveredBlockIdAtom,
  selectedBlockIdAtom,
} from "../../atoms/editor.atom";
import { blockNameComponentMapping } from "./data";

interface BlockWrapperProps {
  blockId: string;
}

const BlockWrapper: React.FC<BlockWrapperProps> = ({ blockId }) => {
  const [block] = useRecoilState(editorStateAtom);
  const [selectedBlockId, setSelectedBlockId] =
    useRecoilState(selectedBlockIdAtom);
  const [hoveredBlockId, setHoveredBlockId] =
    useRecoilState(hoveredBlockIdAtom);
  if (block[blockId]) {
    const { blockName } = block[blockId];

    const Component = blockNameComponentMapping[blockName]?.component;
    const boxStyles = {
      border: selectedBlockId === blockId ? "1px dashed gray" : "none",
      outline:
        selectedBlockId !== blockId && hoveredBlockId === blockId
          ? "Violet solid 2px"
          : "none",
    };

    return Component ? (
      <Box
        sx={boxStyles}
        onClick={(e: React.MouseEvent<HTMLDivElement>) => {
          setSelectedBlockId(selectedBlockId === blockId ? null : blockId);
          e.stopPropagation();
        }}
        onMouseEnter={(e: React.MouseEvent<HTMLDivElement>) => {
          setHoveredBlockId(blockId);
          e.stopPropagation();
        }}
        onMouseLeave={(e: React.MouseEvent<HTMLDivElement>) => {
          if (hoveredBlockId === blockId) {
            setHoveredBlockId(null);
          }
          e.stopPropagation();
        }}
      >
        <Component blockId={blockId} />{" "}
      </Box>
    ) : null;
  }
  return null;
};

export default BlockWrapper;
