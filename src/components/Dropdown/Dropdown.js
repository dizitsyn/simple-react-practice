import React, { Component } from "react";
import style from "./Dropdown.module.css";

class Dropdown extends Component {
  state = {
    visible: false,
  };

  toggle = () => {
    this.setState((prevState) => ({ visible: !prevState.visible }));
  };

  render() {
    const { visible } = this.state;
    return (
      <div>
        <h2>Dropdown</h2>
        <button onClick={this.toggle}>
          {this.state.visible ? "Скрыть" : "Показать"}
        </button>
        {visible && <div className={style.menu}>Я выпадающее меню</div>}
      </div>
    );
  }
}

export default Dropdown;
