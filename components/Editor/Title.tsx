import React from "react";
import { Title, TitleOrder } from "@mantine/core";
import { BlockComponentProps } from "../../types/editor.types";
import { useRecoilState } from "recoil";
import { editorStateAtom } from "../../atoms/editor.atom";
import useUpdateBlockProps from "../../hooks/useUpdateBlockProps";

export interface CustomTitleProps {
  content?: string;
  order?: TitleOrder;
}

export const CustomTitle: React.FC<BlockComponentProps> = ({ blockId }) => {
  const [block] = useRecoilState(editorStateAtom);
  const [updateEditorProps] = useUpdateBlockProps();
  const { props } = block[blockId];
  const { content = "", order = 1 } = props as CustomTitleProps;

  return (
    <Title
      contentEditable="true"
      suppressContentEditableWarning={true}
      order={order}
      onBlur={(e: React.FormEvent<HTMLDivElement>) =>
        updateEditorProps({
          blockId,
          propName: "content",
          value: e?.currentTarget?.innerText,
        })
      }
    >
      {content}
    </Title>
  );
};

export const Heading1: React.FC<BlockComponentProps> = ({ blockId }) => {
  return <CustomTitle blockId={blockId} />;
};

export const Heading2: React.FC<BlockComponentProps> = ({ blockId }) => {
  return <CustomTitle blockId={blockId} />;
};
export const Heading3: React.FC<BlockComponentProps> = ({ blockId }) => {
  return <CustomTitle blockId={blockId} />;
};
