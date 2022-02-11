import React from "react";
import Header from "./Header";
import KombuchaControl from "./KombuchaControl";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      kombuchaMenu: []
    };
  }

  handleMenuAddition = (newKombucha) => {
    const placeholder = this.state.kombuchaMenu.concat(newKombucha);
    this.setState({
      kombuchaMenu: placeholder
    });
  }

  render(){
    return (
      <React.Fragment>
        <Header />
        <KombuchaControl onCartAddition={this.handleMenuAddition} />
      </React.Fragment>
    );
  }
}

export default App;

