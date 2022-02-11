import React from "react";
import PropTypes from "prop-types";

function Kombucha(props){
  return (
    <React.Fragment>
        <h2>{props.name}</h2>
        <h4>{props.content.brand}</h4>
        <h4>{props.content.price}</h4>
        <h4>{props.content.flavor}</h4>
        <h4>{props.content.quantity}</h4>
    </React.Fragment>
  )
}

Kombucha.propTypes = {
  name: PropTypes.string,
  brand: PropTypes.string,
  price: PropTypes.number,
  flavor: PropTypes.string,
  quantity: PropTypes.number
};

export default Kombucha;