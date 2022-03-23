import React from "react";
import { useRecoilState } from "recoil";
import { editorStateAtom } from "../atoms/editor.atom";
import produce from "immer";
import { Block } from "../types/editor.types";

interface UpdateEditorPropsInput {
  blockId: string;
  propName: string;
  value: string;
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
  return [updateEditorProps];
}
