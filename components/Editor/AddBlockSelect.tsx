import { Menu, Button, Group, Switch } from "@mantine/core";
import { outlineAtom } from "../../atoms/editor.atom";
import useAddNewBlock from "../../hooks/useAddNewBlock";
import { blockNameComponentMapping } from "./data";
import { BlockNames } from "../../types/editor.types";
import CodeDrawer from "./CodeDrawer";
import { useRecoilState } from "recoil";

export default function AddBlockSelect() {
  const [addNewBlock] = useAddNewBlock();
  const [outline, setOutline] = useRecoilState(outlineAtom);
  const allBlockNames = Object.keys(blockNameComponentMapping) as BlockNames[];
  return (
    <Group my="md" position="apart" mx="xl">
      <div></div>
      <Group>
        <Switch
          label="Outline"
          checked={outline}
          onChange={() => setOutline(!outline)}
        />
        <CodeDrawer />
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
    </Group>
  );
}
