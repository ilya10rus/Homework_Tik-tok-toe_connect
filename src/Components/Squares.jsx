import React, { Component } from "react";
import PropTypes from "prop-types";

export class Square extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <button className="Square" onClick={this.props.onClick}>
        {this.props.value}
      </button>
    );
  }
}

Square.propTypes = {
  onClick: PropTypes.func,
  value: PropTypes.string,
};
export default Square;
