import {useReducer} from "react";

enum NameActionKind {
    SET_NAME = 'SET_NAME'
}

interface NameAction {
    type: NameActionKind,
    payload: string
}

interface NameState {
    names: [],
    name: string
}

function App() {
    const [state, dispatch] = useReducer((state: NameState, action: NameAction) => {
        const { type, payload } = action
        switch (type) {
            case NameActionKind.SET_NAME:
                return { ...state, name: payload } // Creating a new object. It takes all the actual value of state, and mutate the fields I want
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
        <div>{state.name}</div>
    </>
}
export default App
