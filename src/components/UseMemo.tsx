import {useCallback, useMemo, useState} from "react";
import {SortedList} from "./SortedList";

export function UseMemo() {
  const [numbers] = useState([10,20,30])
  const total = useMemo(
    () => numbers.reduce((acc, number) => acc + number, 0),
    [numbers]
  ) // looking for changes in numbers array

  const [names] = useState(['Gachi', 'Pachi', 'Cachi'])
  const sortedNames = useMemo(() => [...names].sort(), [names])
  const [count1, setCount1] = useState(0)
  const [count2, setCount2] = useState(0)
  const countTotal = useMemo(() => count1 + count2, [count1, count2])

  const sortFunc = useCallback((a,b) => a.localeCompare(b) * -1, [])

  return (
    <>
      <div>Total: {total}</div>
      <div>Names: {names.join(', ')}</div>
      <SortedList list={names} sortFunc={sortFunc} />
      <div>
        <button onClick={() => setCount1(count1 + 1)}>Count1: {count1}</button>
        <button onClick={() => setCount2(count2 + 1)}>Count2: {count2}</button>
      </div>
      <div>Total: {countTotal}</div>
    </>
  );
}