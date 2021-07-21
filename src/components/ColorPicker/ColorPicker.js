import React, { Component } from "react";
import styles from "./ColorPicker.module.css";

class ColorPicker extends Component {
  state = {
    activeColorIndx: 0,
  };

  activeColorStyle = (index) => {
    const defaultStyle = [styles.colorItem];
    if (index === this.state.activeColorIndx) {
      defaultStyle.push(styles.activeColor);
    }
    return defaultStyle.join(" ");
  };

  setActiveColor = (index) => {
    this.setState({ activeColorIndx: index });
  };

  render() {
    const { activeColorIndx } = this.state;
    const { colors } = this.props;
    const { label } = colors[activeColorIndx];
    return (
      <div>
        <h2>Color Picker</h2>
        <span>Color: {label}</span>
        <ul className={styles.colorList}>
          {colors.map(({ label, color }, index) => (
            <li key={label}>
              <button
                style={{ backgroundColor: color }}
                className={this.activeColorStyle(index)}
                onClick={() => this.setActiveColor(index)}
              ></button>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default ColorPicker;
