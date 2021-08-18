import React, { Component } from "react";
import Controls from "./Controls";
import style from "./Counter.module.css";

class Counter extends Component {
  state = {
    value: this.props.initialValue,
  };
  handleIncrement = () => {
    this.setState((prevState) => ({ value: prevState.value + 1 }));
  };
  handleDecrement = () => {
    this.setState((prevState) => ({ value: prevState.value - 1 }));
  };

  render() {
    return (
      <div className={style.container}>
        <h2>Counter</h2>
        <Controls
          onDecrement={this.handleDecrement}
          onIncrement={this.handleIncrement}
        />
        <p className={style.value}>{this.state.value}</p>
      </div>
    );
  }
}

export default Counter;
