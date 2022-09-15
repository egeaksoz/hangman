import React from "react";
import PropTypes from "prop-types";
import "./lettercart.css";

class Lettercart extends React.Component {
  constructor() {
    super();
    this.state = {
      alphabet: this.alphabet,
      count: 0,
      win: false,
      correctCount: 0,
    };
  }

  alphabet = [
    { key: 1, text: "A", correct: false },
    { key: 2, text: "B", correct: false },
    { key: 3, text: "C", correct: false },
    { key: 4, text: "D", correct: false },
    { key: 5, text: "E", correct: false },
    { key: 6, text: "F", correct: false },
    { key: 7, text: "G", correct: false },
    { key: 8, text: "H", correct: false },
    { key: 9, text: "I", correct: false },
    { key: 10, text: "J", correct: false },
    { key: 11, text: "K", correct: true },
    { key: 12, text: "L", correct: false },
    { key: 13, text: "M", correct: false },
    { key: 14, text: "N", correct: false },
    { key: 15, text: "O", correct: false },
    { key: 16, text: "P", correct: false },
    { key: 17, text: "Q", correct: false },
    { key: 18, text: "R", correct: false },
    { key: 19, text: "S", correct: false },
    { key: 20, text: "T", correct: false },
    { key: 21, text: "U", correct: false },
    { key: 22, text: "V", correct: false },
    { key: 23, text: "W", correct: false },
    { key: 24, text: "X", correct: false },
    { key: 25, text: "Y", correct: false },
    { key: 26, text: "Z", correct: false },
  ];

  sendCount = () => {
    this.props.sendCount(this.state.count);
  };

  sendWin = () => {
    this.props.sendWin(this.state.win);
  };

  checkWin(count, wordLength) {
    console.log(`this is win count ${count}`);
    if (count === wordLength) {
      this.setState({ win: true }, function () {
        this.sendWin();
      });
    }
  }

  checkIfCorrect(e) {
    let wordArray = Array.from(this.props.word);
    let targetLetter = e.target.innerHTML;

    let wordCount = wordArray.length;
    let i = 1;

    for (let char of wordArray) {
      if (char.normalize() === targetLetter.normalize()) {
        document.getElementsByClassName(
          "letters " + char
        )[0].style.backgroundColor = "green";
        document.getElementsByClassName("letters " + char)[0].disabled = true;
        break;
      } else {
        document.getElementsByClassName(
          "letters " + targetLetter
        )[0].style.backgroundColor = "red";
        document.getElementsByClassName(
          "letters " + targetLetter
        )[0].disabled = true;
      }
      if (i === wordCount) {
        this.setState({ count: this.state.count + 1 }, function () {
          this.sendCount();
        });
      }
      i++;
    }

    this.writeLetter(wordArray, targetLetter);
  }

  writeLetter(word, letter) {
    let wordArray = word;
    let targetLetter = letter;
    let i = 0;
    let a = 0;

    for (let char of wordArray) {
      if (char.normalize() === targetLetter.normalize()) {
        document.getElementsByClassName("letter")[i].innerHTML = char;
        a++;
      }
      i++;
    }

    this.setState({ correctCount: this.state.correctCount + a }, function () {
      this.checkWin(this.state.correctCount, wordArray.length);
    });
  }

  resetLettercart() {
    this.alphabet.forEach((letter) => {
      document.getElementsByClassName(
        "letters " + letter.text
      )[0].style.backgroundColor = "";
      document.getElementsByClassName(
        "letters " + letter.text
      )[0].disabled = false;
    });
    this.setState({ count: 0, win: false, correctCount: 0 }, function () {
      console.log();
    });
  }

  render() {
    const items = [];

    this.alphabet.forEach((letter) => {
      items.push(
        <button
          key={letter.key}
          onClick={(e) => this.checkIfCorrect(e)}
          className={"letters " + letter.text}
        >
          {letter.text}
        </button>
      );
    });

    return <div className="lettercart">{items}</div>;
  }
}

export default Lettercart;

Lettercart.propType = {
  word: PropTypes.string.isRequired,
};
