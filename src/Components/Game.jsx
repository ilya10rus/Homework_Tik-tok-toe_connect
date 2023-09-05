import React, { Component } from "react";
import Board from "./Board";
import { calculateWinner } from "../Who_winner";
import { connect } from "react-redux";

export class GameContainer extends Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
    this.startNewGame = this.startNewGame.bind(this);
    this.who_winner = this.who_winner.bind(this);
  }
  handleClick = (index) => {
    const winner = calculateWinner(this.props.board);
    const boardCopy = [...this.props.board];

    if (winner || boardCopy[index]) return;

    boardCopy[index] = this.props.isXNext ? "X" : "O";

    this.props.dispatch({ type: "COPY_BOARD", payload: boardCopy });
    this.props.dispatch({
      type: "UPDATE",
      payload: this.props.isXNext === true ? false : true,
    });
  };
  startNewGame = () => {
    return (
      <button
        className="Start_btn"
        onClick={() => {
          this.props.dispatch({
            type: "NEW_GAME",
            payload: Array(9).fill(null),
          });
          this.props.dispatch({ type: "MOVE_X", payload: true });
        }}
      >
        Новоя игра
      </button>
    );
  };
  who_winner = () => {
    const winner = calculateWinner(this.props.board);

    if (winner) {
      return "Победитель: " + winner;
    } else if (!winner && this.props.board.includes(null)) {
      return "Сейчас ходит: " + (this.props.isXNext ? "X" : "O");
    } else if (!this.props.board.includes(null) && !winner) {
      return "Ничья";
    }
  };

  render() {
    return (
      <div className="Wrapper">
        {this.startNewGame()}
        <Board squares={this.props.board} click={this.handleClick} />
        <p className="Text">{this.who_winner()}</p>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  board: state.board,
  isXNext: state.isXNext,
});

export const Game = connect(mapStateToProps)(GameContainer);
