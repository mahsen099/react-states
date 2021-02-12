import React, { Component } from "react";
import MyCounterComponent from "../MyCounterComponent/MyCounterComponent";
import MyEven from "../MyCounterComponent/MyEven";

class ClassStateExample extends Component {
  constructor() {
    super();
    this.state = {
      state1: 0,
      state2: "Test",
      state3: 99,
    };
  }

  ReactEvent = () => {
    // alert("You clicked me!!");
    this.setState({
    state1: this.state.state1 +1
  })
    this.setState((state)=>{
      if(state.state1%2==0){
state.state3=state.state1
      }
    } )
  };

  render() {
    return (
      <div>
        <h1>This is where you call the state</h1>
        <h2>To call the state: {this.state.state2}</h2>
        <button onClick={this.ReactEvent}> Click me </button>
        <MyCounterComponent st={this.state.state1}/>
        <MyEven even={this.state.state3}/>
      </div>
    );
  }
}

export default ClassStateExample;
