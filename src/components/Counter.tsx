import {useState} from "react";

export function Counter() {
  const [count, setCount] = useState(10)
  const addOne = () => setCount(count + 1)
  return <>
    <button
      onClick={addOne}
    >
      Count = {count}
    </button>
  </>
}