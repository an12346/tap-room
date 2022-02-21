import React from "react";
import Kombucha from "./Kombucha";
import PropTypes from "prop-types";

function KombuchaMenu(props){
const { handleKombuchaSell } = props;
  
  return (
    <React.Fragment>
      {props.kombuchaMenu.map((kombucha, index) =>
        <Kombucha
          whenKombuchaClicked = {props.onKombuchaSelect}
          name = {kombucha.name}
          brand = {kombucha.brand}
          flavor = {kombucha.flavor}
          price = {kombucha.price}
          quantity = {kombucha.quantity}
          id = {kombucha.id}
          key = {index}
          handleKombuchaSell={handleKombuchaSell}
          />
      )}
    </React.Fragment>
  );
}

KombuchaMenu.propTypes = {
  kombuchaMenu: PropTypes.array,
  onKombuchaSelect: PropTypes.func,
  handleKombuchaSell: PropTypes.func
};

export default KombuchaMenu;