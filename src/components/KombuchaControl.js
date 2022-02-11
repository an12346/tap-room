import React from "react";
import NewKombuchaForm from "./NewKombuchaForm";
import KombuchaMenu from "./KombuchaMenu";


class KombuchaControl extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      kombuchaFormVisibleOnPage: false,
      mainKombuchaMenu: [],
      kombuchaSelect: null
    };
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick = () => {
    if (this.state.kombuchaSelect != null) {
      this.setState({
        kombuchaFormVisibleOnPage: false,
        kombuchaSelect: null
      });
    } else {
      this.setState(prevState => ({
        kombuchaFormVisibleOnPage: !prevState.kombuchaFormVisibleOnPage,
      }));
    }
  }
    
  handleAddingNewKombuchaToMenu = (newKombucha) => {
    const newMainKombuchaMenu = this.state.mainKombuchaMenu.concat(newKombucha);
    this.setState({
      mainKombuchaMenu: newMainKombuchaMenu,
      kombuchaFormVisibleOnPage: false
    });
  }

  handleDecrementKombuchaQuantity = (quantityKombucha) => {
    const updateKombuchaQuantity = [...this.state.mainKombuchaMenu];
    updateKombuchaQuantity[quantityKombucha].quantity = updateKombuchaQuantity[quantityKombucha].quantity - 1;
    this.setState({
      mainKombuchaMenu: updateKombuchaQuantity
    })
  }

  handleDeletingKombucha = (id) => {
    const newMainKombuchaMenu = this.state.mainKombuchaMenu.filter(kombucha => kombucha.id !== id);
    this.setState({
      mainKombuchaMenu: newMainKombuchaMenu,
      kombuchaSelect: null
    });
  }

  handleSelectedKombucha = (id) => {
    const kombuchaSelect = this.state.mainKombuchaMenu.filter(kombucha => kombucha.id === id)[0];
    this.setState({kombuchaSelect: kombuchaSelect})
  }

  render(){
    let currentState = null;
    let buttonText = null;
    if (this.state.kombuchaFormVisibleOnPage) {
      currentState = <NewKombuchaForm onNewKombuchaCreation={this.handleAddingNewKombuchaToMenu} />;
      buttonText = "Go back to Kombucha Menu"; 
    } else if (this.state.kombuchaSelect != null) {
        currentState = 
        <KombuchaDetail 
        kombucha = {this.state.kombuchaSelect}
        onClickingReduce = {this.handleDecrementKombuchaQuantity}/>
        buttonText = "Go back to Kombucha Menu"
    } else {
      currentState = <KombuchaMenu kombuchamenu = {this.state.mainKombuchaMenu} onKombuchaSelect = {this.handleSelectedKombucha} />
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