import React, { Component } from "react";
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

        <p className={style.value}>{this.state.value}</p>
        <div className={style.containerButton}>
          <button
            type="button"
            onClick={this.handleIncrement}
            className={style.counterButton}
          >
            Увеличить на 1
          </button>
          <button
            type="button"
            onClick={this.handleDecrement}
            className={style.counterButton}
          >
            Уменьшить на 1
          </button>
        </div>
      </div>
    );
  }
}

export default Counter;
