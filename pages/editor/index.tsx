import { Group, Text, Grid, Paper } from "@mantine/core";
import React from "react";
import Editor from "../../components/Editor";
import PropsInputContainer from "../../components/Editor/PropsInputContainer";

export default function EditorPage() {
  return (
    <Grid columns={14}>
      <Grid.Col span={3}>
        <Paper shadow="xl" sx={{ height: "99vh" }}>
          <Group direction="column" p="md" grow>
            <PropsInputContainer />
          </Group>
        </Paper>
      </Grid.Col>
      <Grid.Col span={11} p="lg" sx={{ overflow: "scroll", height: "99vh" }}>
        <Editor />
      </Grid.Col>
    </Grid>
  );
}
