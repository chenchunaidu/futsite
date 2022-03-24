import React from "react";
import AddBlockSelect from "./AddBlockSelect";

import BlockWrapper from "./BlockWrapper";

export default function Editor() {
  return (
    <>
      <AddBlockSelect />
      <BlockWrapper blockId="root" />
    </>
  );
}
