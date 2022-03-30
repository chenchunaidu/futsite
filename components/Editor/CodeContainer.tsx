import { Prism } from "@mantine/prism";

import { useRecoilState } from "recoil";
import { editorStateAtom } from "../../atoms/editor.atom";
import { getCode } from "./utils";

export default function CodeContainer() {
  const [blocks] = useRecoilState(editorStateAtom);
  return (
    <Prism colorScheme="dark" language="jsx" trim={false}>
      {getCode(blocks)}
    </Prism>
  );
}
