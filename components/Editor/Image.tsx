import { Image, ImageProps } from "@mantine/core";
import { BlockComponentProps } from "../../types/editor.types";
import { editorStateAtom } from "../../atoms/editor.atom";
import { useRecoilState } from "recoil";

const CustomImage: React.FC<BlockComponentProps> = ({ blockId }) => {
  const [block] = useRecoilState(editorStateAtom);
  const { props } = block[blockId];

  return <Image radius="md" withPlaceholder {...props} />;
};

export default CustomImage;
