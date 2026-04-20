import type { ItemProps } from "./PackingList";

export default function Item({
  id,
  description,
  quantity,
  packed,
  handleDeleteItem,
}: ItemProps) {
  return (
    <li>
      <span style={packed ? { textDecoration: "line-through" } : {}}>
        {quantity} {description}
      </span>
      <button onClick={() => handleDeleteItem(id)}>❌</button>
    </li>
  );
}
