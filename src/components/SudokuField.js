import React, { Component } from "react";

export default class SudokuField extends Component {
  handleChange = e => {
    const value = parseInt(e.target.value, 10);

    this.props.onChange({ ...this.props.field, value: value });
  };

  handleBlur = e => {
    const value = this.pad.state.pressed;
    if (value !== 0) {
      this.props.onChange({ ...this.props.field, value: value });
      this.pad.setState({
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