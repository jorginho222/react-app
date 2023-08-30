import {useEffect, useRef, useState} from "react";

export function UseRef() {
  const inputRef = useRef(null)
  const [names, setNames] = useState([])
  const idRef = useRef(1)

  useEffect(() => {
    setNames([...names,
      {id: idRef.current++, name: 'Fabrizio'},
      {id: idRef.current++, name: 'Richard'},
      {id: idRef.current++, name: 'Marcilio'}
    ])
    inputRef.current.focus()
    return () => clearInterval(idRef.current)
  }, [])

  const onAddName = () => {
    setNames([...names, {id: idRef.current++, name: inputRef.current.value}])
    inputRef.current.value = ''
  }

  return (
    <div>
      <div>
        {names.map(name => (
          <div key={name.id}>
            {name.id} - {name.name}
          </div>
        ))}
      </div>
      <input ref={inputRef} />
      <button onClick={onAddName}>Add name</button>
    </div>
  )
}