import { useRecoilState } from "recoil";
import { editorStateAtom, selectedBlockIdAtom } from "../atoms/editor.atom";
import produce from "immer";
import { BlockNames } from "../types/editor.types";
import { getDefaultBlockData } from "./helpers";

interface AddNewBlockInput {
  blockName: BlockNames;
  // parentBlockId: string;
}

export default function useAddNewBlock() {
  const [editorState, setEditorState] = useRecoilState(editorStateAtom);
  const [selectedBlockId] = useRecoilState(selectedBlockIdAtom);
  function addNewBlock({ blockName }: AddNewBlockInput) {
    const { mainBlockId, newBlocks } = getDefaultBlockData(blockName);

    setEditorState(
      produce(editorState, (draft) => {
        draft[selectedBlockId || "root"].children.push(mainBlockId);
        newBlocks.map((newBlock) => {
          draft[newBlock.id] = newBlock;
        });
      })
    );
  }
  return [addNewBlock];
}
