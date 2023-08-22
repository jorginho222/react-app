import {ListGroup} from "./components/ListGroup";

function App() {
    let cities = [
        'San Fierro',
        'Las venturas',
        'Los Santos'
    ]
    const handleSelectCity = (city: string) => {
        console.log(city)
    }
    
    return <>
        <ListGroup heading='Ciudades' cities={cities} onSelectCity={handleSelectCity} />
    </>
}
export default App
