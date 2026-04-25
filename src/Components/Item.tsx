import type { ItemProps } from "../App";

export default function Item({
  id,
  description,
  quantity,
  packed,
  handleDeleteItem,
  handlePackedItemValue,
}: ItemProps) {
  return (
    <li>
      <input
        type="checkbox"
        value={packed}
        onChange={() => handlePackedItemValue(id)}
      />
      <span style={packed ? { textDecoration: "line-through" } : {}}>
        {quantity} {description}
      </span>
      <button onClick={() => handleDeleteItem(id)}>❌</button>
    </li>
  );
}
