import { Block } from "../../types/editor.types";

interface GetPropsInput {
  [x: string]: string;
}

type GetProps = (input: GetPropsInput) => string;
const getProps: GetProps = (input) => {
  const keys = Object.keys(input);
  let props = "";
  keys.forEach((key) => {
    const propValue = input[key];

    if (typeof propValue === "string" && propValue !== "")
      props += ` ${key} = {"${input[key]?.replace(/"/g, "'")}"}`;
    else if (typeof propValue === "number")
      props += ` ${key} = {${input[key]}}`;
  });
  return props;
};

export const formatCode = async (code: string) => {
  let formattedCode = code;

  const prettier = await import("prettier/standalone");
  const babylonParser = await import("prettier/parser-babel");

  try {
    formattedCode = prettier.format(code, {
      parser: "babel",
      plugins: [babylonParser],
      semi: false,
      singleQuote: true,
    });
  } catch (e) {
    console.log(e);
  }

  return formattedCode;
};

export function getCode(blocks: Block) {
  let code = "";
  const components: string[] = [];
  function addCode(key: string) {
    const { blockName, children, props } = blocks[key];
    components.push(blockName);
    code += `<${blockName} ${getProps(props as GetPropsInput)}>`;
    children.map((child) => addCode(child));
    code += `</${blockName}>`;
  }

  addCode("root");
  const uniqueComponents = Array.from(new Set(components));

  code = `
  import { ${uniqueComponents.join(", ")} } from '@mantine/core'; 

  export default function Component(){
    return(
      ${code}
    )
  }
 `;

  return formatCode(code);
}
