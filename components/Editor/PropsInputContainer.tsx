import { ActionIcon, Group } from "@mantine/core";
import React from "react";
import { AiFillDelete } from "react-icons/ai";
import useDeleteBlock from "../../hooks/useDeleteNewBlock";
import PropsInputWrapper from "./PropsInputWrapper";

export default function PropsInputContainer() {
  const [deleteBlock] = useDeleteBlock();
  return (
    <Group grow direction="column" spacing="xs">
      <Group position="apart">
        <div></div>
        <ActionIcon size="xl" onClick={deleteBlock}>
          <AiFillDelete size={24} />
        </ActionIcon>
      </Group>
      <PropsInputWrapper />
    </Group>
  );
}
