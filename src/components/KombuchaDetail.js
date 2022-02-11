import React from "react";
import PropTypes from "prop-types";

function KombuchaDetail(props){
  const { kombucha } = props;

  let reduceQuantity;
  let amountRemaining;
  if (kombucha.quantity >= 0) {
    amountRemaining = <h5>Pints Remaining: { kombucha.amount }</h5>;
    reduceQuantity = <button onClick={ () => onClickingReduce() }>Reduce Quantity</button>
  } else {
    amountRemaining = <h5>No Kombucha Remaining</h5>
  };

  return (
    <React.Fragment>
      <h1>Kombucha Details</h1>
        <h4>{kombucha.name}</h4>
        <h4>{kombucha.brand}</h4>
        <h4>{kombucha.flavor}</h4>
        <h4>{kombucha.price}</h4>
        <h4>{kombucha.quantity}</h4>
        <h5>{amountRemaining}</h5>{reduceQuantity}
    </React.Fragment>
  );
}

  KombuchaDetail.propTypes = {
    kombucha: PropTypes.object,
    onClickingReduce: PropTypes.func
  };

  export default KombuchaDetail;


