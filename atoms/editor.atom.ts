/* eslint-disable @typescript-eslint/no-unsafe-call */
import { atom } from "recoil";
import { Block } from "../types/editor.types";
import { SampleEditorState } from "../components/Editor/data";
import { recoilPersist } from "recoil-persist";

// eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
const { persistAtom } = recoilPersist();

export const editorStateAtom = atom<Block>({
  key: "editorState",
  default: SampleEditorState,
  effects: [persistAtom],
});

export const selectedBlockIdAtom = atom<string | null>({
  key: "selectedBlockId",
  default: null,
  effects: [persistAtom],
});

export const hoveredBlockIdAtom = atom<string | null>({
  key: "hoveredBlockId",
  default: null,
  effects: [persistAtom],
});
