import { useRecoilState } from "recoil";
import { editorStateAtom, selectedBlockIdAtom } from "../atoms/editor.atom";
import { useClipboard } from "@mantine/hooks";
import { getAllSelectedBlocks } from "./helpers";
import { useCallback, useEffect } from "react";

export default function useSelectBlock() {
  const [editorState] = useRecoilState(editorStateAtom);
  const [selectedBlockId, setSelectedBlockId] =
    useRecoilState(selectedBlockIdAtom);
  const clipboard = useClipboard({ timeout: 500 });

  function selectAllBlocks() {
    setSelectedBlockId(Object.keys(editorState));
  }
  // selectedBlockId is not updating correctly
  const copyToClipBoard = useCallback(() => {
    const childBlockIds: string[] = [];
    console.log(selectedBlockId);
    // getAllSelectedBlocks(editorState, selectedBlockId, childBlockIds);
    clipboard.copy(JSON.stringify(editorState));
  }, [selectedBlockId, editorState, clipboard]);

  return [selectAllBlocks, copyToClipBoard] as const;
}
