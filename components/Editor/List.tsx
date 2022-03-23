import { List } from "@mantine/core";
import { getHotkeyHandler } from "@mantine/hooks";
import cloneDeep from "lodash.clonedeep";
import { nanoid } from "nanoid";
import { useRecoilState } from "recoil";
import { editorStateAtom } from "../../atoms/editor.atom";
import { BlockComponentProps, ListItem } from "../../types/editor.types";

export interface CustomListProps {
  listItems?: ListItem[];
  variant?: "ordered" | "unordered";
}

const CustomList: React.FC<BlockComponentProps> = ({ blockId }) => {
  const [block, setBlock] = useRecoilState(editorStateAtom);
  const currentBlock = block[blockId];
  const { props } = currentBlock;
  const { listItems = [], variant } = props as CustomListProps;

  const handleAddListItem = () => {
    const newBlock = cloneDeep(currentBlock);
    newBlock.props["listItems"] = [
      ...listItems,
      { id: nanoid(), data: "New item" },
    ];
    setBlock({ ...block, [blockId]: newBlock });
  };

  const handleDeleteListItem = (listItemToDelete: string) => {
    const newBlock = cloneDeep(currentBlock);
    newBlock.props["listItems"] = listItems.filter(
      (listItem) => listItem.id !== listItemToDelete
    );
    setBlock({ ...block, [blockId]: newBlock });
  };

  const handleListItemChange = (index: number, value: string) => {
    const newProps = cloneDeep(props) as CustomListProps;
    if (newProps.listItems) newProps.listItems[index].data = value;
    const newBlock = { ...currentBlock };
    newBlock.props = newProps as Record<string, unknown>;
    setBlock({ ...block, [blockId]: newBlock });
  };

  return (
    <List type={variant}>
      {listItems.map((listItem, index) => (
        <List.Item
          contentEditable="true"
          suppressContentEditableWarning={true}
          key={listItem.id}
          onKeyDown={getHotkeyHandler([
            ["Enter", handleAddListItem],
            ["Delete", () => handleDeleteListItem(listItem.id)],
          ])}
          onBlur={(e: React.FocusEvent<HTMLLIElement>) =>
            handleListItemChange(index, e?.currentTarget?.innerText)
          }
        >
          {listItem.data}
        </List.Item>
      ))}
    </List>
  );
};

export default CustomList;
