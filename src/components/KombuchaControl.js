import React from "react";
import NewKombuchaForm from "./NewKombuchaForm";
import KombuchaMenu from "./KombuchaMenu";
import KombuchaDetail from "./KombuchaDetail";


class KombuchaControl extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      kombuchaFormVisibleOnPage: false,
      mainKombuchaMenu: [],
      kombuchaSelect: null
    };
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

  handleKombuchaSell = (id) => {
  let kombuchaSelect = this.state.mainKombuchaMenu.find(kombucha => kombucha.id !== id);
    kombuchaSelect.quantity--;
    const newMainKombuchaMenu = this.state.mainKombuchaMenu.map((kombucha) => {return kombucha.id === id ? kombuchaSelect : kombucha});
    this.setState({mainKombuchaMenu: newMainKombuchaMenu});
  }
  

  handleSelectedKombucha = (id) => {
    const kombuchaSelect = this.state.mainKombuchaMenu.filter(kombucha => kombucha.id === id)[0];
    this.setState({kombuchaSelect: kombuchaSelect})
  }

  render(){
    let currentState = null;
    let buttonText = null;
    
    if (this.state.kombuchaSelect != null) {
      currentState = <KombuchaDetail kombucha = {this.state.kombuchaSelect} />
      buttonText = "Go back to Kombucha Menu";
    } else if (this.state.kombuchaFormVisibleOnPage) {
      currentState = <NewKombuchaForm onNewKombuchaCreation={this.handleAddingNewKombuchaToMenu} />;
      buttonText = "Go back to Kombucha Menu";
    } else {
      currentState = <KombuchaMenu kombuchaMenu = {this.state.mainKombuchaMenu} onKombuchaSelect = {this.handleSelectedKombucha} handleKombuchaSell = {this.handleKombuchaSell}/>
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

