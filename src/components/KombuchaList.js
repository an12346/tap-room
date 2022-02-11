import React from "react";
import Kombucha from "./Kombucha";
import PropTypes from "prop-types";

function KombuchaList(props){
  return (
    <React.Fragment>
      {props.kombuchaList.map((kombucha, index) =>
        <Kombucha
          content = {kombucha}
          position = {index}
          method = {props.OnDecrementKombuchaQuantity}
          key = {kombucha.id}
        />
      )}
    </React.Fragment>
  );
}

KombuchaList.propTypes = {
  kombuchaList: PropTypes.array
};

export default KombuchaList;