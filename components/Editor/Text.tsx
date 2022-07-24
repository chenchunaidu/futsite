import React from "react";
import { Text } from "@mantine/core";
import { BlockComponentProps } from "../../types/editor.types";
import { useRecoilState } from "recoil";
import { editorStateAtom } from "../../atoms/editor.atom";
import useUpdateBlockProps from "../../hooks/useUpdateBlockProps";

export interface CustomTextProps {
  content?: string;
}

const CustomText: React.FC<BlockComponentProps> = ({ blockId }) => {
  const [block] = useRecoilState(editorStateAtom);
  const [updateEditorProps] = useUpdateBlockProps();
  const currentBlock = block[blockId];
  const { props } = currentBlock;
  const { content, ...styles } = props as CustomTextProps;

  return (
    <div
      contentEditable="true"
      suppressContentEditableWarning={true}
      onBlur={(e: React.FormEvent<HTMLDivElement>) =>
        updateEditorProps({
          blockId,
          propName: "content",
          value: e?.currentTarget?.innerText,
        })
      }
      style={{ ...styles }}
    >
      {content}
    </div>
  );
};

export default CustomText;
