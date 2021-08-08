import React, { Component } from "react";
import Pad from "./Pad.js"

export default class SudokuField extends Component {
  handleChange = e => {
    const value = parseInt(e.target.value, 10);

    this.props.onChange({ ...this.props.field, value: value });
  };

  handleBlur = e => {
    const value = Pad.state.pressed;
    if (Pad.state.pressed !== 0) {
      this.props.onChange({ ...this.props.field, value: value });
      Pad.setState({
        pressed: 0
      })
    }
  }

  render() {
    const { field } = this.props;
    return (
      <input
        className="field"
        value={field.value || ""}
        readOnly={field.readonly}
        focused={field.focused}
        onChange={this.handleChange}
        onBlur={this.handleBlur}
      />
    );
  }
}