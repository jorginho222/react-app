import { useState } from "react";
interface ListGroupProps {
  cities: string[]
  heading: string
  onSelectCity: (item: string) => void
}

export function ListGroup({cities, heading, onSelectCity}: ListGroupProps) {
  const [selectedIndex, setSelectedIndex] = useState(-1)
  return (
    <>
      <h1>{heading}</h1>
      { cities.length === 0 && <p>No item found</p> }
      <ul className="list-group">
        { cities.map((city, index) =>
          <li
            className={ selectedIndex === index ? 'list-group-item active' : 'list-group-item' }
            key={city}
            onClick={() => {
              setSelectedIndex(index)
              onSelectCity(city)
            }}
          >
            {city}
          </li>
        ) }
      </ul>
    </>
  );
}