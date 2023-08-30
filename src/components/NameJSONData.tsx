import {useEffect, useState} from "react";
import {Stopwatch} from "./Stopwatch";
import {Button} from "./Button";
interface NameJSONData {
  onAlertActivated: (name: string) => void
}

export function NameJSONData({onAlertActivated}: NameJSONData) {
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
    onAlertActivated(name)
  }

  return (
    <div>
      <div>
        {names.map((name, index) =>(
          <Button key={index} onClick={() => onSelectedNameChange(name)} color={'success'}>
            {name}
          </Button>
          // <button key={index} onClick={() => onSelectedNameChange(name)}>{name}</button>
        ))}
      </div>
      <div>
        {JSON.stringify(selectedNameData)}
      </div>
    </div>
  );
}