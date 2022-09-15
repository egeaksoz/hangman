import React from "react";
import PropTypes from "prop-types";
import "./hangman.css";

class Hangman extends React.Component {
  constructor() {
    super();
    this.state = { hangmanItems: [] };
  }

  drawHangman(count, item) {
    switch (count) {
      case 1:
        item.push(
          <line
            key="1"
            x1="0"
            y1="50"
            x2="0"
            y2="450"
            style={{ stroke: "black", strokeWidth: 4 }}
          />
        );
        break;
      case 2:
        item.push(
          <line
            key="2"
            x1="0"
            y1="50"
            x2="300"
            y2="50"
            style={{ stroke: "black", strokeWidth: 2 }}
          />
        );
        break;
      case 3:
        item.push(
          <circle
            key="3"
            cx="150"
            cy="150"
            r="40"
            stroke="black"
            strokeWidth="2"
            fill="none"
          />
        );
        break;
      case 4:
        item.push(
          <line
            key="4"
            x1="150"
            y1="190"
            x2="150"
            y2="340"
            style={{ stroke: "black", strokeWidth: 2 }}
          />
        );
        break;
      case 5:
        item.push(
          <line
            key="5"
            x1="150"
            y1="240"
            x2="100"
            y2="210"
            style={{ stroke: "black", strokeWidth: 2 }}
          />
        );
        item.push(
          <line
            key="6"
            x1="150"
            y1="240"
            x2="200"
            y2="210"
            style={{ stroke: "black", strokeWidth: 2 }}
          />
        );
        item.push(
          <line
            key="7"
            x1="150"
            y1="340"
            x2="100"
            y2="370"
            style={{ stroke: "black", strokeWidth: 2 }}
          />
        );
        item.push(
          <line
            key="8"
            x1="150"
            y1="340"
            x2="200"
            y2="370"
            style={{ stroke: "black", strokeWidth: 2 }}
          />
        );
        break;
      case 6:
        item.push(
          <line
            key="9"
            x1="160"
            y1="140"
            x2="170"
            y2="150"
            style={{ stroke: "black", strokeWidth: 2 }}
          />
        );
        item.push(
          <line
            key="10"
            x1="160"
            y1="150"
            x2="170"
            y2="140"
            style={{ stroke: "black", strokeWidth: 2 }}
          />
        );
        item.push(
          <line
            key="11"
            x1="130"
            y1="140"
            x2="140"
            y2="150"
            style={{ stroke: "black", strokeWidth: 2 }}
          />
        );
        item.push(
          <line
            key="12"
            x1="130"
            y1="150"
            x2="140"
            y2="140"
            style={{ stroke: "black", strokeWidth: 2 }}
          />
        );
        item.push(
          <line
            key="13"
            x1="150"
            y1="50"
            x2="150"
            y2="110"
            style={{ stroke: "black", strokeWidth: 2 }}
          />
        );
        break;
      default:
    }
  }

  resetHangman() {
    this.setState({ hangmanItems: [] }, function () {
      console.log("");
    });
  }

  render() {
    this.drawHangman(this.props.count, this.state.hangmanItems);
    return (
      <div className="hangman">
        <svg height="400" width="400">
          {this.state.hangmanItems}
        </svg>
      </div>
    );
  }
}

export default Hangman;

Hangman.propType = {
  count: PropTypes.number.isRequired,
};
