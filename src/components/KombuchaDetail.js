import React from "react";
import PropTypes from "prop-types";


function KombuchaDetail(props){
  const { kombucha } = props;

    return (
      <React.Fragment>
        <h1>Kombucha Details</h1>
          <h4>{kombucha.name}</h4>
          <h4>{kombucha.brand}</h4>
          <h4>{kombucha.flavor}</h4>
          <h4>{kombucha.price}</h4>
          <h4>{kombucha.quantity}</h4>
      </React.Fragment>
  );
}

  KombuchaDetail.propTypes = {
    kombucha: PropTypes.object,
  };

  export default KombuchaDetail;


