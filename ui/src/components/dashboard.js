import React from "react";
import axios from "axios";
import Letter from "./letter";
import Lettercart from "./lettercart";
import Hangman from "./hangman";
import Result from "./result";

const APP_URL = "http://localhost:8080";
const HANGMAN_API = `${APP_URL}/api/v1/hangman`;

class Dashboard extends React.Component {
  constructor() {
    super();
    this.lettercart = React.createRef();
    this.hangman = React.createRef();
    this.state = {
      word: "",
      buttonText: "Start New Game",
      mistakeCount: 0,
      win: false,
      resetButtons: false,
    };
  }

  getCount = (count) => {
    this.setState({ mistakeCount: count });
  };

  getWin = (win) => {
    this.setState({ win: win }, function () {
      console.log("");
    });
  };

  resetLettercart = () => {
    this.lettercart.current.resetLettercart();
  };

  resetHangman = () => {
    this.hangman.current.resetHangman();
  };

  startNewGame() {
    axios
      .get(`/api/v1/hangman/start`)
      .then((res) => {
        this.setState({ word: res.data });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  changeText() {
    this.setState({ buttonText: "Restart" });
  }

  displayLetterCart() {
    document.getElementsByClassName("lettercart")[0].style.display = "block";
  }

  restartGame() {
    this.setState({ mistakeCount: 0, win: false });
    let i;
    for (i = 0; i < this.state.word.length; i++) {
      document.getElementsByClassName("letter")[i].innerHTML = "_";
    }
    this.resetLettercart();
    this.resetHangman();
  }

  threeFunctions() {
    let text = document.getElementById("start").innerHTML;
    if (text === "Restart") {
      this.restartGame();
      this.startNewGame();
    } else {
      this.changeText();
      this.displayLetterCart();
      this.startNewGame();
    }
  }
  render() {
    return (
      <div className="text-center">
        <p style={{ fontFamily: "cursive", fontSize: 30 }}>
          {" "}
          Welcome To The HANGMAN GAME!{" "}
        </p>
        <button
          id="start"
          onClick={() => this.threeFunctions()}
          style={{ fontFamily: "cursive" }}
        >
          {this.state.buttonText}
        </button>
        <p></p>
        <Result count={this.state.mistakeCount} win={this.state.win} word={this.state.word} />
        <Letter
          word={this.state.word}
          correctLetter={this.state.correctLetter}
        ></Letter>
        <Lettercart
          ref={this.lettercart}
          word={this.state.word}
          sendCount={this.getCount}
          sendWin={this.getWin}
          reset={this.resetButtons}
        />
        <Hangman ref={this.hangman} count={this.state.mistakeCount} />
      </div>
    );
  }
}

export default Dashboard;
