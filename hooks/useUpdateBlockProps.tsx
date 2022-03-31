import React from "react";
import { useRecoilState } from "recoil";
import { editorStateAtom } from "../atoms/editor.atom";
import produce from "immer";
import { Block } from "../types/editor.types";

interface UpdateEditorPropsInput {
  blockId: string;
  propName: string;
  value: string | number | null;
}

interface SwapBlocks {
  blockId1: string;
  blockId2: string;
}

export default function useUpdateBlockProps() {
  const [editorState, setEditorState] = useRecoilState(editorStateAtom);
  function updateEditorProps({
    blockId,
    propName,
    value,
  }: UpdateEditorPropsInput) {
    setEditorState(
      produce(editorState, (draft) => {
        draft[blockId].props[propName] = value;
      })
    );
  }

  function swapBlocks({ blockId1, blockId2 }: SwapBlocks) {
    const block1ParentId = editorState[blockId1].parentId;
    const block2ParentId = editorState[blockId2].parentId;

    setEditorState(
      produce(editorState, (draft) => {
        const blockIndex1 = draft[block1ParentId].children.findIndex(
          (id) => id === blockId1
        );
        const blockIndex2 = draft[block2ParentId].children.findIndex(
          (id) => id === blockId2
        );

        draft[block1ParentId].children[blockIndex1] = blockId2;
        draft[block2ParentId].children[blockIndex2] = blockId1;
        draft[blockId1].parentId = block2ParentId;
        draft[blockId2].parentId = block1ParentId;
      })
    );
  }

  return [updateEditorProps, swapBlocks] as const;
}
