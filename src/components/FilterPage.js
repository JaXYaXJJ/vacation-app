import { useState } from "react";
import Destinations from "./Destinations";
import './FilterPage.css';

function FilterPage() {

const flights = [
  {
    id: 1,
    date: '01/10/2022',
    loc: 'Tórshavn, Faroe Islands',
    airline: 'SAS',
    price: '$' + 289,
  },
  {
    id: 2,
    date: '02/10/2022',
    loc: 'Akureyri, Iceland',
    airline: 'Icelandair',
    price: '$' + 359,
  },
  {
    id: 3,
    date: '05/10/2022',
    loc: 'Akureyri, Iceland',
    airline: 'Icelandair',
    price: '$' + 319,
  },
  {
    id: 4,
    date: '02/10/2022',
    loc: 'Rovaniemi, Finland',
    airline: 'Finair',
    price: '$' + 299,
  },
  {
    id: 5,
    date: '02/10/2022',
    loc: 'Nuuk, Greenland',
    airline: 'Air Greenland',
    price: '$' + 489,
  },
  {
    id: 6,
    date: '03/10/2022',
    loc: 'Reykjavik, Iceland',
    airline: 'Icelandair',
    price: '$' + 349,
  },
  {
    id: 7,
    date: '04/10/2022',
    loc: 'Svalbard, Norway',
    airline: 'Norwegian',
    price: '$' + 419,
  },
];

const [flightOptions, setFlightOptions] = useState('All');

var allOptions = 'All';
function handleClick(setFlight) {
  allOptions = setFlight;
  setFlightOptions(allOptions)
}

  return (
    <>
    
      <div className="my-5">
        <h1 className="d-flex justify-content-center">Our Offers</h1>
        <p className="d-flex justify-content-center">
          List of ouer vacation packages for this month
        </p>
      </div>

      <div className="d-flex mx-5 my-5">
        <form className="filterForm">
          <input></input>

          <select className="mx-4">
            <option disabled selected hidden>Location A-Z</option>
            <option onClick={() => handleClick('All')}>All</option>
            <option onClick={() => handleClick('Akureyri, Iceland')}>Akureyri</option>
            <option onClick={() => handleClick('Bodø, Norway')}>Bodø</option>
            <option onClick={() => handleClick('Nuuk, Greenland')}>Nuuk</option>
            <option onClick={() => handleClick('Malmö, Sweden')}>Malmö</option>
            <option onClick={() => handleClick('Oslo, Norway')}>Oslo</option>
            <option onClick={() => handleClick('Reykjavik, Iceland')}>Reykjavik</option>
            <option onClick={() => handleClick('Rovaniemi, Finland')}>Rovaniemi</option>
            <option onClick={() => handleClick('Svalbard, Norway')}>Svalbard</option>
            <option onClick={() => handleClick('Tórshavn, Faroe Islands')}>Tórshavn</option>
            <option onClick={() => handleClick('Tromsø, Norway')}>Tromsø</option>
          </select>
        </form>
      </div>

      <table className="table">
          <thead>
            <tr>
              <th className="w-25">Date</th>
              <th className="w-25">Location</th>
              <th className="w-25">Airline</th>
              <th className="w-25">Price</th>
            </tr>
          </thead>
          </table>

    {flights
          .filter((flight) => flight.loc === flightOptions || flightOptions === 'All')
          .map((flight) => (<Destinations data={flight} allOptions={allOptions} />
      ))}

    </>
  );
}

export default FilterPage;
