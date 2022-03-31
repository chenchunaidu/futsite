import { Prism } from "@mantine/prism";
import { useEffect, useState } from "react";

import { useRecoilState } from "recoil";
import { editorStateAtom } from "../../atoms/editor.atom";
import { getCode } from "./utils";

export default function CodeContainer() {
  const [blocks] = useRecoilState(editorStateAtom);
  const [code, setCode] = useState("");

  useEffect(() => {
    getCode(blocks)
      .then((data) => {
        setCode(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <Prism colorScheme="dark" language="jsx" trim={false}>
      {code}
    </Prism>
  );
}
