import type { StatsProps } from "../App";

export default function Stats({ itemsList }: StatsProps) {
  const totalPackedItems = itemsList.filter(
    (item) => item.packed === true,
  ).length;

  const percent: string = Number(
    (totalPackedItems / itemsList.length) * 100,
  ).toFixed(2);

  return (
    <footer className={Number(percent) === 100 ? "fully-packed" : ""}>
      {Number(percent) === 100 ? (
        <em>🎊🎊Congrats! You have finished packing!✈️✈️</em>
      ) : (
        <em>
          💼You have {itemsList.length} items on your list, and you already
          packed {totalPackedItems} ({percent}%)
        </em>
      )}
    </footer>
  );
}
