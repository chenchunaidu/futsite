import React, { memo } from "react";
import { Box, Text, Button } from "@mantine/core";
import { blockNameComponentMapping } from "./data";
import { Block } from "../../types/editor.types";

interface BlockWrapperProps {
  blockId: string;
  block: Block;
  selectedBlockId: string[] | null;
  hoveredBlockId: string | null;
  setSelectedBlockId: (input: string[]) => void;
  setHoveredBlockId: (input: string | null) => void;
}

const BlockWrapper: React.FC<BlockWrapperProps> = ({
  blockId,
  block,
  selectedBlockId = [],
  hoveredBlockId,
  setSelectedBlockId,
  setHoveredBlockId,
}) => {
  const handleBlockSelected = (e: React.MouseEvent<HTMLDivElement>) => {
    if (selectedBlockId?.includes(blockId)) {
      setSelectedBlockId(selectedBlockId.filter((id) => blockId !== id));
    } else {
      if (e.metaKey) {
        setSelectedBlockId([...(selectedBlockId || []), blockId]);
      } else {
        setSelectedBlockId([blockId]);
      }
    }
    e.stopPropagation();
  };

  if (block[blockId]) {
    const { blockName } = block[blockId];

    const Component = blockNameComponentMapping[blockName]?.component;
    const isBlockSelected = selectedBlockId?.includes(blockId);
    const isBlockHovered = hoveredBlockId === blockId;
    const boxStyles = {
      border: isBlockSelected ? "1px dashed gray" : "none",
      outline: !isBlockSelected && isBlockHovered ? "Violet solid 2px" : "none",
      position: (isBlockSelected || isBlockHovered
        ? "relative"
        : "static") as React.CSSProperties["position"],
    };

    return Component ? (
      <Box
        key={blockId}
        sx={boxStyles}
        onClick={handleBlockSelected}
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
        {isBlockSelected || isBlockHovered ? (
          <Box
            sx={{
              position: "absolute",
              top: "-20px",
              right: "0px",
              zIndex: "10",
              background: "Violet",
              color: "white",
            }}
          >
            {blockName}
          </Box>
        ) : null}
        <Component blockId={blockId} key={blockId} />
      </Box>
    ) : null;
  }
  return null;
};

export default memo(BlockWrapper);
