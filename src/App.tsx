import {Button} from "./components/Button";
import Alert from "./components/Alert";
import {useEffect, useRef, useState} from "react";

function App() {
    const [alertVisible, setAlertVisible] = useState(false)
    let [counter, setCounter] = useState(0)
    const increment = () => setCounter(counter => counter + 1)
    useEffect(() => {
        console.log(alertVisible)
    }, [alertVisible])

    return <>
        { alertVisible &&
          <Alert onClose={() => setAlertVisible(false)}>My alert</Alert> }
        <Button
          color={'success'}
          onClick={() => setAlertVisible(true)}
        >
            My button
        </Button>
        <button onClick={increment}>Aum</button>
        {counter}
    </>
}
export default App
