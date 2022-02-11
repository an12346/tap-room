import React from "react";
import PropTypes from "prop-types";

function Kombucha(props){
  return (
    <React.Fragment>
      <div onClick = {() => props.onKombuchaClick(props.id)}>
        <h2>{props.name} - {props.brand}</h2>
        <h4>{props.flavor}</h4>
      </div>
    </React.Fragment>
  );
}

Kombucha.propTypes = {
  name: PropTypes.string,
  brand: PropTypes.string,
  price: PropTypes.number,
  flavor: PropTypes.string,
  quantity: PropTypes.number,
  id: PropTypes.string,
  onKombuchaClick: PropTypes.func
}

export default Kombucha;