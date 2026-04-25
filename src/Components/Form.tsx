import type React from "react";
import type { ItemType, ListProps } from "../App";
import { useState } from "react";

const numericSelectOptionRange: number[] = Array.from(
  { length: 20 },
  (_, x) => x + 1,
);

export default function Form({ setItemsList }: ListProps) {
  const [description, setDescription] = useState<string>("");
  const [quantity, setQuantity] = useState<number>(1);

  function handleTripFormSubmit(e: React.FormEvent<HTMLFormElement>): void {
    e.preventDefault();

    if (!description) return;

    const newItem: ItemType = {
      description,
      quantity,
      packed: false,
      id: Date.now(),
    };

    setItemsList((prev) => [...prev, newItem]);

    setDescription("");
    setQuantity(1);
  }

  return (
    <form onSubmit={handleTripFormSubmit} className="add-form">
      <h3>What do you need for your trip</h3>
      <select
        value={quantity}
        onChange={(e) => setQuantity(Number(e.target.value))}
      >
        {numericSelectOptionRange.map((number) => (
          <option key={number} value={number}>
            {number}
          </option>
        ))}
      </select>
      <input
        type="text"
        placeholder="Item..."
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <button>Add</button>
    </form>
  );
}
