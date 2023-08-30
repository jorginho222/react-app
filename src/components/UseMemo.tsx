import {useCallback, useMemo, useState} from "react";
import {SortedList} from "./SortedList";
import {NameList} from "./NameList";

export function UseMemo() {
  const [numbers] = useState([10,20,30])
  const total = useMemo(
    () => numbers.reduce((acc, number) => acc + number, 0),
    [numbers]
  ) // looking for changes in numbers array

  const [names, setNames] = useState([])
  // const sortedNames = useMemo(() => [...names].sort(), [names])
  const [count1, setCount1] = useState(0)
  const [count2, setCount2] = useState(0)
  const countTotal = useMemo(() => count1 + count2, [count1, count2])

  const sortFunc = useCallback((a,b) => a.localeCompare(b) * -1, [])

  return (
    <>
      <div className="mt-3">Total (Use effect, se carga una vez): {total}</div>
      <SortedList list={names} sortFunc={sortFunc} />
      <div className="mt-3">
        <button onClick={() => setCount1(count1 + 1)}>Count1: {count1}</button>
        <button onClick={() => setCount2(count2 + 1)}>Count2: {count2}</button>
      </div>
      <div className="mt-3">Total: {countTotal}</div>
      <NameList onNameInserted={(names) => setNames(names)} />
    </>
  );
}