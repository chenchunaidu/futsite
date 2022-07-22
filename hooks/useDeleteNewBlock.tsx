import { useRecoilState } from "recoil";
import { editorStateAtom, selectedBlockIdAtom } from "../atoms/editor.atom";
import produce from "immer";

export default function useDeleteBlock() {
  const [editorState, setEditorState] = useRecoilState(editorStateAtom);
  const [selectedBlockIds] = useRecoilState(selectedBlockIdAtom);

  function deleteBlock() {
    setEditorState(
      produce(editorState, (draft) => {
        selectedBlockIds.forEach((selectedBlockId) => {
          const selectedBlock = editorState[selectedBlockId];
          if (selectedBlock.id != "root") {
            draft[selectedBlock.parentId].children = draft[
              selectedBlock.parentId
            ].children.filter((child) => child !== selectedBlockId);
            delete draft[selectedBlockId[0]];
          }
        });
        return draft;
      })
    );
  }
  return [deleteBlock];
}
