import React from "react";
import NewKombuchaForm from "./NewKombuchaForm";
import KombuchaList from "./KombuchaList";

class KombuchaControl extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      kombuchaFormVisibeOnPage: false,
      mainKombuchaList: []
    };
  }

  handleClick = () => {
    this.setState(prevState => ({
      kombuchaFormVisibleOnPage: !prevState.kombuchaFormVisibleOnPage
    }));
  }

  //0 => KombuchaList
  //1 => 

  render(){
    let currentState = null;
    let buttonText = null;
    if (this.state.kombuchaPageShowing === 0) {
      currentState = < 
    }
  }
}