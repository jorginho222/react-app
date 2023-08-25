import {useEffect, useState} from "react";

export function App() {
  const [names, setNames] = useState([])

  useEffect(() => {
    fetch('/names.json')
      .then(res => res.json())
      .then(data => setNames(data))
  }, [])

  const [selectedNameData, setSelectedNameData] = useState()

  const onSelectedNameChange = (name: string) => {
    fetch(`/${name}.json`)
      .then(response => response.json())
      .then(data => setSelectedNameData(data))
  }

  return (
    <div>
      <div>
        {names.map((name, index) =>(
          <button key={index} onClick={() => onSelectedNameChange(name)}>{name}</button>
        ))}
      </div>
      <div>
        {JSON.stringify(selectedNameData)}
      </div>
    </div>
  )
}