import React from "react";
import PropTypes from "prop-types";


function Kombucha(props){
  if(props.quantity === 0) {
    return (
      <React.Fragment>
      <div>
        <h2>{props.name} - {props.brand}</h2>
        <h4>{props.flavor}</h4>
        <h4>{props.price}</h4>
        <h4>Sold Out</h4>
      </div>
    </React.Fragment>
    );
  } else {
    return (
    <React.Fragment>
      <div onClick={() => props.whenKombuchaClicked(props.id)}>
        <h2>{props.name} - {props.brand}</h2>
        <h4>{props.flavor}</h4>
        <h4>{props.price}</h4>
        <h4>{props.quantity}</h4>
      </div>
      <button onClick={()=>props.whenKombuchaSell(props.id)}>Sell Pint</button>
    </React.Fragment>
  )
}
  
}

Kombucha.propTypes = {
  name: PropTypes.string,
  brand: PropTypes.string,
  price: PropTypes.string,
  flavor: PropTypes.string,
  quantity: PropTypes.number,
  id: PropTypes.string,
  whenKombuchaClicked: PropTypes.func,
  whenKombuchaSell: PropTypes.func
}

export default Kombucha;