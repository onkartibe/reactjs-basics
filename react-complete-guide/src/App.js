import React, { Component } from 'react';
import './App.css';
import {UsrInputComponent} from './Assignment1/Assignment1';
import {UsrOutputComponent} from './Assignment1/Assignment1';

class App extends Component {

  state = {
    varname : ""
  };

  changenameEventHandler = (event) => {
     this.setState ( {varname : event.target.value} )
    // console.log("Hello ->> "+event.target.value);
  }

  render() {
    return (
      <div className="App">
      <h1>Hello World</h1>
        <UsrInputComponent change={this.changenameEventHandler}/>
        <UsrOutputComponent name={this.state.varname} />
      </div>
    );
  }
}

export default App;
