import React from "react";
import Kombucha from "./Kombucha";
import PropTypes from "prop-types";


function KombuchaMenu(props){
  
  return (
    <React.Fragment>
      {props.kombuchaMenu.map((kombucha) =>
        <Kombucha
          whenKombuchaClicked = {props.onKombuchaSelect}
          name = {kombucha.name}
          brand = {kombucha.brand}
          flavor = {kombucha.flavor}
          price = {kombucha.price}
          quantity = {parseInt(kombucha.quantity)}
          id = {kombucha.id}
          key = {kombucha.id}
          whenKombuchaSell={props.onKombuchaSell}
          />
      )}
    </React.Fragment>
  );
}

KombuchaMenu.propTypes = {
  kombuchaMenu: PropTypes.array,
  onKombuchaSelect: PropTypes.func,
  onKombuchaSell: PropTypes.func
};

export default KombuchaMenu;