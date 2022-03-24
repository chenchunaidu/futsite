import { Menu, Button, Group } from "@mantine/core";
import useAddNewBlock from "../../hooks/useAddNewBlock";
import { blockNameComponentMapping } from "./data";
import { BlockNames } from "../../types/editor.types";

export default function AddBlockSelect() {
  const [addNewBlock] = useAddNewBlock();
  const allBlockNames = Object.keys(blockNameComponentMapping) as BlockNames[];
  return (
    <Group my="md" position="apart" mx="xl">
      <div />
      <Menu control={<Button variant="light">Add block</Button>}>
        {allBlockNames.map((blockName) => (
          <Menu.Item
            key={blockName}
            onClick={() => {
              addNewBlock({ blockName });
            }}
          >
            {blockName}
          </Menu.Item>
        ))}
      </Menu>
    </Group>
  );
}
