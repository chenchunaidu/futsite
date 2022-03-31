import React, { useEffect } from "react";
import AddBlockSelect from "./AddBlockSelect";
import BlockStateWrapper from "./BlockStateWrapper";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { useWindowEvent } from "@mantine/hooks";
import useSelectBlock from "../../hooks/useSelectBlock";
export default function Editor() {
  const [selectAllBlocks, copyToClipBoard] = useSelectBlock();
  const handler = (event: KeyboardEvent) => {
    if (event.metaKey) {
      event.preventDefault();
      if (event.key === "a") selectAllBlocks();
      if (event.key === "c") copyToClipBoard();
    }
  };

  useEffect(() => {
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, []);

  useWindowEvent("keydown", handler);

  return (
    <>
      <AddBlockSelect />
      <DndProvider backend={HTML5Backend}>
        <BlockStateWrapper blockId="root" />
      </DndProvider>
    </>
  );
}
