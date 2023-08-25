import {useState} from "react";

export function NameList() {
  const [list, setList] = useState(['Pepe', 'Jack', 'Sparrow'])
  const [name, setName] = useState('Jack')

  const addName = () => {
    setList([...list, name])
    setName('')
  }
  return <>
    <ul>
      { list.map((name) => (
        <li key={name}>{name}</li>
      )) }
    </ul>
    <input
      value={name}
      onChange={e => setName(e.target.value)}
    />
    <button onClick={addName}>
      Add name
    </button>
  </>
}