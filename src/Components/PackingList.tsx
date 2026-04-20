import Item from "./Item";

import type { ListProps } from "../App";

export default function PackingList({ itemsList, setItemsList }: ListProps) {
  function handleDeleteItem(id: number): void {
    setItemsList((itemList) => itemList.filter((item) => item.id !== id));
  }

  return (
    <div className="list">
      <ul>
        {itemsList.map((item) => (
          <Item key={item.id} {...item} handleDeleteItem={handleDeleteItem} />
        ))}
      </ul>
    </div>
  );
}
