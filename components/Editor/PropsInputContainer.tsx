import { ActionIcon, Group, TextInput } from "@mantine/core";
import React from "react";
import { AiFillDelete } from "react-icons/ai";
import { useRecoilState } from "recoil";
import { editorStateAtom, selectedBlockIdAtom } from "../../atoms/editor.atom";
import useDeleteBlock from "../../hooks/useDeleteNewBlock";
import { blockNameInputComponentMapping } from "./data";
import PropsInputWrapper from "./PropsInputWrapper";

export default function PropsInputContainer() {
  const [block] = useRecoilState(editorStateAtom);
  const [selectedBlockId, setSelectedBlockId] =
    useRecoilState(selectedBlockIdAtom);
  const [deleteBlock] = useDeleteBlock();
  if (selectedBlockId) {
    const selectedBlock = block[selectedBlockId];
    const inputs = blockNameInputComponentMapping[selectedBlock?.blockName];

    return (
      <div>
        <Group position="apart">
          <div></div>
          <ActionIcon size="xl" onClick={deleteBlock}>
            <AiFillDelete size={24} />
          </ActionIcon>
        </Group>
        <PropsInputWrapper inputs={inputs} block={selectedBlock} />
      </div>
    );
  }
  return null;
}
