import {Button} from "./components/Button";
import Alert from "./components/Alert";
import {useState} from "react";

function App() {
    const [alertVisible, setAlertVisible] = useState(false)
    return <>
        { alertVisible &&
          <Alert onClose={() => setAlertVisible(false)}>My alert</Alert> }
        <Button
          color={'success'}
          onClick={() => setAlertVisible(true)}
        >
            My button
        </Button>
    </>
}
export default App
