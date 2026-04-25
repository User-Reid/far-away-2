import Item from "./Item";

import type { ListProps } from "../App";

export default function PackingList({ itemsList, setItemsList }: ListProps) {
  function handleDeleteItem(id: number): void {
    setItemsList((itemList) => itemList.filter((item) => item.id !== id));
  }

  function handlePackedItemValue(id: number): void {
    setItemsList((items) =>
      items.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item,
      ),
    );
  }

  return (
    <div className="list">
      <ul>
        {itemsList.map((item) => (
          <Item
            key={item.id}
            {...item}
            handleDeleteItem={handleDeleteItem}
            itemsList={itemsList}
            handlePackedItemValue={handlePackedItemValue}
          />
        ))}
      </ul>
    </div>
  );
}
