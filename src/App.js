import React, { Component } from "react";

import ColorPicker from "./components/ColorPicker";
import Counter from "./components/Counter";
import Dropdown from "./components/Dropdown";
import Form from "./components/Form";

const colorPickerOptions = [
  { label: "red", color: "#F44336" },
  { label: "green", color: "#4CAF50" },
  { label: "blue", color: "#2196F3" },
  { label: "grey", color: "#607D8B" },
  { label: "pink", color: "#E91E63" },
  { label: "indigo", color: "#3F51B5" },
];

export default class App extends Component {
  formSubmitHandler = (data) => {
    console.log(data);
  };

  render() {
    return (
      <>
        <ColorPicker colors={colorPickerOptions} />
        <Counter initialValue={0} />
        <Dropdown />
        <Form onSubmit={this.formSubmitHandler} />
      </>
    );
  }
}
