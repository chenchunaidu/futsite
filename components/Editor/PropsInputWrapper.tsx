import { Button } from "@mantine/core";
import React from "react";
import { useRecoilState } from "recoil";
import { editorStateAtom, selectedBlockIdAtom } from "../../atoms/editor.atom";
import useUpdateBlockProps from "../../hooks/useUpdateBlockProps";
import {
  blockNameInputComponentMapping,
  defaultInputs,
  inputComponentMapping,
} from "./data";
import { IoMdSwap } from "react-icons/io";

const PropsInputWrapper = () => {
  const [updateEditorProps, swapBlocks] = useUpdateBlockProps();

  const [blocks] = useRecoilState(editorStateAtom);
  const [selectedBlockId, setSelectedBlockId] =
    useRecoilState(selectedBlockIdAtom);

  if (selectedBlockId?.length === 1) {
    const selectedBlock = blocks[selectedBlockId[0]];
    let inputs = blockNameInputComponentMapping[selectedBlock?.blockName];

    inputs = [...defaultInputs, ...inputs];
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
              data={[]}
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
