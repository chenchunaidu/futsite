import React from "react";
import useUpdateBlockProps from "../../hooks/useUpdateBlockProps";
import { BlockItem, PropInput } from "../../types/editor.types";
import { inputComponentMapping } from "./data";

interface PropsInputWrapperProps {
  inputs: PropInput[];
  block: BlockItem;
}

const PropsInputWrapper: React.FC<PropsInputWrapperProps> = ({
  inputs,
  block,
}) => {
  const [updateEditorProps] = useUpdateBlockProps();
  const blockId = block?.id;
  return (
    <>
      {inputs?.map(({ label, name, component }, index) => {
        const Component = inputComponentMapping[component];
        if (!Component) {
          return null;
        }
        return (
          <Component
            value={block?.props[name] as string}
            name={name}
            label={label}
            onChange={(e) => {
              updateEditorProps({
                blockId: block.id,
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
};

export default PropsInputWrapper;
