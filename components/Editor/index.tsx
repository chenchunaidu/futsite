import React from "react";
import AddBlockSelect from "./AddBlockSelect";
import BlockStateWrapper from "./BlockStateWrapper";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

export default function Editor() {
  return (
    <>
      <AddBlockSelect />
      <DndProvider backend={HTML5Backend}>
        <BlockStateWrapper blockId="root" />
      </DndProvider>
    </>
  );
}
