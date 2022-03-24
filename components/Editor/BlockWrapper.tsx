import React from "react";
import { Box } from "@mantine/core";
import { blockNameComponentMapping } from "./data";
import { Block } from "../../types/editor.types";

interface BlockWrapperProps {
  blockId: string;
  block: Block;
  selectedBlockId: string | null;
  hoveredBlockId: string | null;
  setSelectedBlockId: (input: string | null) => void;
  setHoveredBlockId: (input: string | null) => void;
}

const BlockWrapper: React.FC<BlockWrapperProps> = ({
  blockId,
  block,
  selectedBlockId,
  hoveredBlockId,
  setSelectedBlockId,
  setHoveredBlockId,
}) => {
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
