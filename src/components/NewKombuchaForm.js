import React from "react";
import { v4 } from "uuid";
import PropTypes from "prop-types";

function NewKombuchaForm(props) {
  function handleNewKombuchaFormSubmission(event) {
    event.preventDefault();
    props.onNewKombuchaCreation({name: event.target.name.value, brand: event.target.brand.value, price: event.target.price.value, flavor: event.target.flavor.value, quantity: event.target.quantity.value, id: v4()});
  }

  return (
    <React.Fragment>
      <form onSubmit={handleNewKombuchaFormSubmission}>
        <input 
          type="text"
          name="name"
          placeholder="Kombucha Name" />
        <input
          type="text"
          name="brand"
          placeholder="Kombucha Brand" />
        <input 
          type="text"
          name="flavor"
          placeholder="Kombucha Flavor" />
        <input 
          type="number"
          name="price"
          placeholder="Price" />
        <input 
          type="number"
          name="quantity"
          placeholder="Quantity"/>
          <button type="submit">Add Kombucha</button>
      </form>
    </React.Fragment>
  );
}

NewKombuchaForm.propTypes = {
  onNewKombuchaCreation: PropTypes.func
};

export default NewKombuchaForm;