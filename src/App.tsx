import React, { useState } from "react";

import Form from "./Components/Form";
import Logo from "./Components/Logo";
import PackingList from "./Components/PackingList";
import Stats from "./Components/Stats";

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

export type ListProps = {
  itemsList: ItemType[];
  setItemsList: React.Dispatch<React.SetStateAction<ItemType[]>>;
};

export default function App() {
  const [itemsList, setItemsList] = useState<ItemType[]>(initialItems);

  return (
    <div className="app">
      <Logo />
      <Form itemsList={itemsList} setItemsList={setItemsList} />
      <PackingList itemsList={itemsList} setItemsList={setItemsList} />
      <Stats />
    </div>
  );
}
