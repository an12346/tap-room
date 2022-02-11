import React from "react";
import NewKombuchaForm from "./NewKombuchaForm";
import KombuchaList from "./KombuchaList";

class KombuchaControl extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      kombuchaFormVisibleOnPage: false,
      mainKombuchaList: []
    };
  }

  handleClick = () => {
    this.setState(prevState => ({
      kombuchaFormVisibleOnPage: !prevState.kombuchaFormVisibleOnPage
    }));
  }

  handleAddingNewKombuchaToList = (newKombucha) => {
    const newMainKombuchaList = this.state.mainKombuchaList.concat(newKombucha);
    this.setState({
      mainKombuchaList: newMainKombuchaList,
      kombuchaFormVisibleOnPage: false
    });
    console.log(this.state.mainKombuchaList)
  }

  handleDecrementKombuchaQuantity = (quantityKombucha) => {
    const updateKombuchaQuantity = [...this.state.mainKombuchaList];
    updateKombuchaQuantity[quantityKombucha].quantity = updateKombuchaQuantity[quantityKombucha].quantity - 1;
    this.setState({
      mainKombuchaList: updateKombuchaQuantity
    })
  }

  //0 => KombuchaList
  //1 => 

  render(){
    let currentState = null;
    let buttonText = null;
    if (this.state.kombuchaFormVisibleOnPage) {
      currentState = <NewKombuchaForm onNewKombuchaCreation={this.handleAddingNewKombuchaToList} />;
      buttonText = "Go back to Kombucha Menu"; 
    } else {
      currentState = <KombuchaList onDecrementKombuchaQuantity={this.handleDecrementKombuchaQuantity} kombuchaList={this.state.mainKombuchaList} />;
      buttonText = "Add Kombucha";
    }
    return (
      <React.Fragment>
        {currentState}
        <button onClick={this.handleClick}>{buttonText}</button>
      </React.Fragment>
    );
  }
}

export default KombuchaControl;