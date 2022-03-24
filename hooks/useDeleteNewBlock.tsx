import { useRecoilState } from "recoil";
import { editorStateAtom, selectedBlockIdAtom } from "../atoms/editor.atom";
import produce from "immer";

export default function useDeleteBlock() {
  const [editorState, setEditorState] = useRecoilState(editorStateAtom);
  const [selectedBlockId] = useRecoilState(selectedBlockIdAtom);
  function deleteBlock() {
    if (selectedBlockId) {
      const selectedBlock = editorState[selectedBlockId];
      setEditorState(
        produce(editorState, (draft) => {
          draft[selectedBlock.parentId].children = draft[
            selectedBlock.parentId
          ].children.filter((child) => child !== selectedBlockId);
          delete draft[selectedBlockId];
        })
      );
    }
  }
  return [deleteBlock];
}
