import React, { Component } from "react";
import Square from "./Squares";
import PropTypes from "prop-types";

export class Board extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="Board">
        {this.props.squares.map((square, i) => (
          <Square key={i} value={square} onClick={() => this.props.click(i)} />
        ))}
      </div>
    );
  }
}

Board.propTypes = {
  squares: PropTypes.array,
  click: PropTypes.func,
};

export default Board;
