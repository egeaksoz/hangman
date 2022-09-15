import React from "react";
import PropTypes from "prop-types";
import "./letter.css";

class Letter extends React.Component {
  render() {
    let wordArray = Array.from(this.props.word);
    const items = [];
    let i = 1;

    wordArray.forEach((char) => {
      items.push(
        <span key={i} className="letter">
          _
        </span>
      );
      i++;
    });

    return <div className="hiddenword">{items}</div>;
  }
}

export default Letter;

Letter.propType = {
  word: PropTypes.string.isRequired,
};
