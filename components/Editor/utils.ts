/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/restrict-template-expressions */
import { Block } from "../../types/editor.types";
import { html as beautifyHTML } from "js-beautify";

interface GetPropsInput {
  [x: string]: string;
}

type GetProps = (input: GetPropsInput) => string;
const getProps: GetProps = (input) => {
  const keys = Object.keys(input);
  let props = "";
  keys.forEach((key) => {
    props += ` ${key} = {"${input[key]}"}`;
  });
  return props;
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
      ${beautifyHTML(code)}
    )
  }
 `;
  return code;
}
