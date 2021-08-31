import React, { Component } from "react";
import style from "./Form.module.css";

export default class Form extends Component {
  state = {
    name: "",
    surname: "",
    experience: "junior",
    accept: false,
  };

  handleChange = (e) => {
    const { name, value } = e.currentTarget;

    this.setState({ [name]: value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.onSubmit(this.state);
    this.reset();
  };

  reset = () => {
    this.setState({
      name: "",
      surname: "",
    });
  };

  handleAcceptChange = (e) => {
    this.setState({
      accept: e.currentTarget.checked,
    });
  };
  render() {
    return (
      <>
        <h2>Form</h2>
        <form onSubmit={this.handleSubmit}>
          <label>
            Name
            <input
              className={style.block}
              name="name"
              type="text"
              value={this.state.name}
              onChange={this.handleChange}
            ></input>
          </label>
          <label>
            Second name
            <input
              className={style.block}
              name="surname"
              type="text"
              value={this.state.surname}
              onChange={this.handleChange}
            ></input>
          </label>

          <p>Experience</p>
          <label>
            <input
              type="radio"
              name="experience"
              value="junior"
              onChange={this.handleChange}
              checked={this.state.experience === "junior"}
            ></input>
            Junior
          </label>
          <label>
            <input
              type="radio"
              name="experience"
              value="middle"
              onChange={this.handleChange}
              checked={this.state.experience === "middle"}
            ></input>
            Middle
          </label>
          <label>
            <input
              type="radio"
              name="experience"
              value="senior"
              onChange={this.handleChange}
              checked={this.state.experience === "senior"}
            ></input>
            Senior
          </label>

          <label className={style.block}>
            <input
              type="checkbox"
              name="accept"
              checked={this.state.accept}
              onChange={this.handleAcceptChange}
            ></input>{" "}
            Working for food
          </label>

          <button type="submit" disabled={!this.state.accept}>
            send
          </button>
        </form>
      </>
    );
  }
}
