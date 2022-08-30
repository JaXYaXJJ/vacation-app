import { Link } from 'react-router-dom';

function FilterPage() {
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
            <option disabled selected hidden>
              Location A-Z
            </option>
            <option>Akureyri</option>
            <option>Nuuk</option>
            <option>Malmö</option>
            <option>Oslo</option>
            <option>Reykjavik</option>
            <option>Rovaniemi</option>
            <option>Svalbard</option>
            <option>Tórshavn</option>
            <option>Tromsø</option>
          </select>
        </form>
      </div>

      <table className="table table-hover">
      <thead>
        <tr>
          <th className="w-25">Date</th>
          <th className="w-25">Location</th>
          <th className="w-50">Price</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        <tr className="bg-light">
        <td>01/10/2022</td>
        <td>Tórshavn, Faroe Islands</td>
        <td>$289</td>
        </tr>
        <tr className="bg-light">
        <td>02/10/2022</td>
        <td>Akureyri, Iceland</td>
        <td>$359</td>
        </tr>
      </tbody>
    </table>
    </>
  );
}

export default FilterPage;
