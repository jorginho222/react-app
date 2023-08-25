import React, {useReducer} from "react";

export function UserForm() {
  const [state, dispatch] = useReducer((state, action) => ({
      ...state,
      ...action, //
    }),
    {
      first: '',
      last: ''
    })

  return <>
    <div>
      <input
        value={state.first}
        onChange={e => dispatch({ first: e.target.value })}
      />
      <input
        value={state.last}
        onChange={e => dispatch({ last: e.target.value })}
      />
      <div>
        First: { state.first }
      </div>
      <div>
        Last: { state.last }
      </div>
    </div>
  </>
}