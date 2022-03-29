import { Alert, Button, Text } from "@mantine/core";
import React from "react";
import { useRecoilState } from "recoil";
import { editorStateAtom, selectedBlockIdAtom } from "../../atoms/editor.atom";
import useUpdateBlockProps from "../../hooks/useUpdateBlockProps";
import { blockNameInputComponentMapping, inputComponentMapping } from "./data";
import { IoMdSwap } from "react-icons/io";
import { AlertCircle } from "tabler-icons-react";

const PropsInputWrapper = () => {
  const [updateEditorProps, swapBlocks] = useUpdateBlockProps();

  const [blocks] = useRecoilState(editorStateAtom);
  const [selectedBlockId, setSelectedBlockId] =
    useRecoilState(selectedBlockIdAtom);

  if (selectedBlockId?.length === 1) {
    const selectedBlock = blocks[selectedBlockId[0]];
    const inputs = blockNameInputComponentMapping[selectedBlock?.blockName];
    const blockId = selectedBlock?.id;
    return (
      <>
        {inputs?.map(({ label, name, component }, index) => {
          const Component = inputComponentMapping[component];
          if (!Component) {
            return null;
          }
          return (
            <Component
              value={selectedBlock?.props[name] as string}
              name={name}
              label={label}
              onChange={(e) => {
                updateEditorProps({
                  blockId: blockId,
                  propName: name,
                  value: e,
                });
              }}
              key={`${blockId}${index}`}
            />
          );
        })}
      </>
    );
  }

  if (selectedBlockId?.length === 2) {
    const [blockId1, blockId2] = selectedBlockId;
    // const block1Parent = blocks[blockId1].parentId;
    // const block2Parent = blocks[blockId2].parentId;

    return (
      <Button
        variant="light"
        leftIcon={<IoMdSwap size="18"></IoMdSwap>}
        onClick={() => swapBlocks({ blockId1, blockId2 })}
      >
        Swap blocks
      </Button>
    );
  }

  return null;
};

export default PropsInputWrapper;
