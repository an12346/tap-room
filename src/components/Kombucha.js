import React from "react";
import PropTypes from "prop-types";

function Kombucha(props){
  let message;
  if(props.content.quantity < 1){
    message = "out of stock";
  } else {
    message = <button onClick={()=> props.method(props.position)}>Pint Sold</button>
  }
  return (
    <React.Fragment>
      <div key={props.content.id}>
        <h2>{props.content.name}</h2>
        <h4>{props.content.brand}</h4>
        <h4>{props.content.price}</h4>
        <h4>{props.content.flavor}</h4>
        <h4>{parseInt(props.content.quantity)}</h4>
        {message}
      </div>
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