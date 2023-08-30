import {useEffect, useState} from "react";

export function Stopwatch() {
  const [time, setTime] = useState(0)
    useEffect(() => {
    const interval = setInterval(() => {
      setTime((time) => {
        console.log(time)
        return time + 1
      })
    }, 1000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div>
      Time: {time}
    </div>
  );
}