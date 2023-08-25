import {useMemo} from "react";

export function SortedList({list, sortFunc}) {
  console.log('SortedList render')
  const sortedList = useMemo(
    () => {
      console.log('Running sort')
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