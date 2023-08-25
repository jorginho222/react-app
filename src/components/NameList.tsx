import {useReducer, useState} from "react";

export function NameList() {
  enum NameActionKind {
    SET_NAME = 'SET_NAME',
    ADD_NAME = 'ADD_NAME'
  }

  interface NameAction {
    type: NameActionKind,
  }

  interface NameState {
    names: [],
    name: string
  }

  const [state, dispatch] = useReducer((state, action) => {
    const { type, payload } = action
    switch (type) {
      case NameActionKind.SET_NAME:
        return { ...state, name: payload } // Creating a new object. It takes all the actual value of state, and mutate the fields I want
      case NameActionKind.ADD_NAME:
        return {
          ...state,
          names: [...state.names, state.name],
          name: ''
        }
      default:
        return state
    }
  }, {
    names: [],
    name: '',
  })
  return <>
    <input
      value={state.name}
      onChange={e => dispatch({ type: NameActionKind.SET_NAME, payload: e.target.value })}
    />
    <button onClick={() => dispatch({ type: NameActionKind.ADD_NAME })}>Insert</button>
    <div>
      { state.names.map((name: string, index: number) => (
          <div key={index}>{name}</div>
        )
      )}
    </div>
  </>
}
