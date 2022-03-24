import React from "react";
import AddBlockSelect from "./AddBlockSelect";
import BlockStateWrapper from "./BlockStateWrapper";

export default function Editor() {
  return (
    <>
      <AddBlockSelect />
      <BlockStateWrapper blockId="root" />
    </>
  );
}
