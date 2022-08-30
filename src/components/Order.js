function Order() {
  return (
    <div className="my-5">
      <h1 className="d-flex justify-content-center">Order Now</h1>
      <p className="d-flex justify-content-center">
        Quickly order a new vacation
      </p>
      
      <div className="container orderForm my-5">
        <h3 className="my-3">Billing address</h3>
        <p>Vacation Packages</p>
        <select>
          <option disabled selected hidden>
            Choose...
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
        <p className="my-3">Name</p>
        <input></input>
        <p className="my-3">Email (Optional)</p>
        <input></input>
        <br/>
        <div className="form-check form-check-inline my-3">
          <input
            className="form-check-input"
            type="checkbox"
            id="inlineCheckbox1"
            value="option1" />
          <label className="form-check-label" for="inlineCheckbox1">
            I agree to terms...
          </label>
        </div>
        <br/>
        <button type="button" className="btn btn-primary my-3">Continue to checkout</button>

      </div>
    </div>
  );
}

export default Order;
