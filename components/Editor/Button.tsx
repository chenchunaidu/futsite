import { Button } from "@mantine/core";
import { BlockComponentProps } from "../../types/editor.types";
import { useRecoilState } from "recoil";
import { editorStateAtom } from "../../atoms/editor.atom";
import useUpdateBlockProps from "../../hooks/useUpdateBlockProps";

export interface CustomButtonProps {
  label?: string;
}

const CustomButton: React.FC<BlockComponentProps> = ({ blockId }) => {
  const [block] = useRecoilState(editorStateAtom);
  const [updateEditorProps] = useUpdateBlockProps();
  const { props } = block[blockId];
  const { label } = props as CustomButtonProps;

  const handleSpaceEnter = (e: React.KeyboardEvent<HTMLButtonElement>) => {
    if (e.code !== "Space") {
      return;
    }
    e.preventDefault();
    document.execCommand("insertText", false, " ");
  };

  return (
    <Button
      contentEditable="true"
      suppressContentEditableWarning={true}
      onBlur={(e: React.FocusEvent<HTMLButtonElement>) =>
        updateEditorProps({
          blockId,
          propName: "label",
          value: e?.currentTarget?.innerText,
        })
      }
      onKeyDown={handleSpaceEnter}
    >
      {label}
    </Button>
  );
};

export default CustomButton;
