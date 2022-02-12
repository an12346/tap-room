import React from "react";
import PropTypes from "prop-types";

function Kombucha(props){
  function onClickFunction() {
    props.onKombuchaClick(props.id);
  }
  
  return (
    <React.Fragment>
      <h2>{props.name} - {props.brand}</h2>
        <h4>{props.flavor}</h4>
        <button onClick={onClickFunction}>Kombucha Details</button>
      </React.Fragment>
  );
}

Kombucha.propTypes = {
  name: PropTypes.string.isRequired,
  brand: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  flavor: PropTypes.string.isRequired,
  quantity: PropTypes.number.isRequired,
  id: PropTypes.string,
  onKombuchaClick: PropTypes.func
}

export default Kombucha;