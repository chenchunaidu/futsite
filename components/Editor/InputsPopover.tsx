import { useState } from "react";
import { Popover, Text, Button, Image } from "@mantine/core";

interface InputsPopoverProps {
  opened: boolean;
}

const InputsPopover: React.FC<InputsPopoverProps> = () => {
  const [opened, setOpened] = useState(false);
  return (
    <Popover
      opened={opened}
      onClose={() => setOpened(false)}
      target={
        <Button onClick={() => setOpened((o) => !o)}>Toggle popover</Button>
      }
      width={260}
      position="bottom"
      withArrow
    >
      <div style={{ display: "flex" }}>
        <Image
          src="./logo.svg"
          width={30}
          height={30}
          sx={{ minWidth: 30 }}
          mr="md"
        />
        <Text size="sm">
          Thanks for stopping by and checking Mantine, you are awesome!
        </Text>
      </div>
    </Popover>
  );
};
