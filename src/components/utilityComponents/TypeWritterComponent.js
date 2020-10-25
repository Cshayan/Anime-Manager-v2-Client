import React from "react";
import PropTypes from "prop-types";
import Typewriter from "typewriter-effect";

const TypeWritter = (props) => {
  const { words, autoStart, loop } = props;
  return (
    <Typewriter
      options={{
        strings: words,
        autoStart,
        loop,
      }}
    />
  );
};

TypeWritter.defaultProps = {
  words: [],
  autoStart: true,
  loop: true,
};

TypeWritter.propTypes = {
  words: PropTypes.array,
  autoStart: PropTypes.bool,
  loop: PropTypes.bool,
};

export default TypeWritter;
