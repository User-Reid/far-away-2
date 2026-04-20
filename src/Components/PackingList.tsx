import { useState } from "react";
import Item from "./Item";

const initialItems: ItemType[] = [
  { id: 1, description: "Passports", quantity: 2, packed: false },
  { id: 2, description: "Socks", quantity: 12, packed: false },
  { id: 3, description: "Banana", quantity: 42, packed: true },
];

export type ItemType = {
  id: number;
  description: string;
  quantity: number;
  packed: boolean;
};

export type ItemProps = ItemType & {
  handleDeleteItem: (id: number) => void;
};

export default function PackingList() {
  const [itemsList, setItemsList] = useState<ItemType[]>(initialItems);

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
