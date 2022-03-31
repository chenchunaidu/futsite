import { useState } from "react";
import { Button, Group, Modal } from "@mantine/core";
import CodeContainer from "./CodeContainer";

export default function CodeDrawer() {
  const [opened, setOpened] = useState(false);

  return (
    <>
      <Modal
        opened={opened}
        onClose={() => setOpened(false)}
        title="Code"
        padding="md"
        size="full"
        shadow="lg"
      >
        <CodeContainer />
      </Modal>

      <Group position="center">
        <Button variant="light" onClick={() => setOpened(true)}>
          Open code
        </Button>
      </Group>
    </>
  );
}
