import type { NextPage } from "next";
import Link from "next/link";
import { Text, Title, Center, Group, Button } from "@mantine/core";

const Home: NextPage = () => {
  return (
    <Center sx={{ height: "95vh" }}>
      <Group direction="column" align="center">
        <Title sx={{ fontSize: "144px" }}>Welcome to futsite</Title>
        <Text sx={{ fontSize: "36px", color: "gray" }}>
          Convert your design into code of any UI language
        </Text>
        <Button>
          <Link href="/editor"> Go to editor </Link>
        </Button>
      </Group>
    </Center>
  );
};

export default Home;
