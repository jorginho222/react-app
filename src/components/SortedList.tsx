import {useMemo} from "react";
interface SortedListProps {
  list: [],
  sortFunc: () => number
}

export function SortedList({list, sortFunc}: SortedListProps) {
  const sortedList = useMemo(
    () => {
      return [...list].sort(sortFunc)
    },
    [list]
  )

  return (
    <>
      {sortedList.join(', ')}
    </>
  );
}