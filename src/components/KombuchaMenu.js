import React from "react";
import Kombucha from "./Kombucha";
import PropTypes from "prop-types";

function KombuchaMenu(props){
  return (
    <React.Fragment>
      {props.kombuchaMenu?.map((kombucha) =>
        <Kombucha
          onKombuchaClick = {props.kombuchaSelect}
          name = {kombucha.name}
          brand = {kombucha.brand}
          flavor = {kombucha.flavor}
          price = {kombucha.price}
          quantity = {kombucha.quantity}
          id = {kombucha.id}
          key = {kombucha.id}/>
      )}
    </React.Fragment>
  );
}

KombuchaMenu.propTypes = {
  kombuchaMenu: PropTypes.array,
  kombuchaSelect: PropTypes.func
};

export default KombuchaMenu;