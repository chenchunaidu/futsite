import React from "react";
import { BlockComponentProps } from "../../types/editor.types";
import { useRecoilState } from "recoil";
import { editorStateAtom } from "../../atoms/editor.atom";
import useUpdateBlockProps from "../../hooks/useUpdateBlockProps";

export interface CustomTitleProps {
  content?: string;
}

export interface CustomTitleCompProps extends BlockComponentProps {
  fontSize: string;
}

const CustomTitle: React.FC<CustomTitleCompProps> = ({ blockId, fontSize }) => {
  const [block] = useRecoilState(editorStateAtom);
  const [updateEditorProps] = useUpdateBlockProps();
  const currentBlock = block[blockId];
  const { props } = currentBlock;
  const { content, ...styles } = props as CustomTitleProps;

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
      style={{ ...styles, fontSize }}
    >
      {content}
    </div>
  );
};

export const Heading1: React.FC<BlockComponentProps> = (props) => (
  <CustomTitle {...props} fontSize="36px" />
);

export const Heading2: React.FC<BlockComponentProps> = (props) => (
  <CustomTitle {...props} fontSize="24px" />
);
export const Heading3: React.FC<BlockComponentProps> = (props) => (
  <CustomTitle {...props} fontSize="20px" />
);
