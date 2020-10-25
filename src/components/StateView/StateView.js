import React from "react";
import PropTypes from "prop-types";
import { makeStyles, Typography } from "@material-ui/core";
import cls from "classnames";

const useStyles = makeStyles((theme) => ({
  noAnimeContainer: {
    display: "flex",
    flexDirection: "column",
    textAlign: "center",
    justifyContent: "center",
    alignItems: "center",
    padding: "1rem",
    height: "100%",
    width: "100%",
  },
  img: {
    width: 200,
    height: 200,
  },
  animatedImage: {
    "-webkit-animation": "moveUpDown 1s infinite alternate",
    animation: "moveUpDown 1s infinite alternate",
  },
  noAnimeText: {
    fontSize: "1.5rem",
    color: theme.palette.text.primary,
    letterSpacing: "0.1rem",
  },
  "@media screen and (max-width: 600px)": {
    img: {
      width: 100,
      height: 100,
    },
    noAnimeText: {
      fontSize: "1rem",
    },
  },
}));

const StateView = (props) => {
  const classes = useStyles();
  const { textToRender, imageToRender, isAnimationRequired } = props;
  return (
    <div className={classes.noAnimeContainer}>
      <img
        src={imageToRender}
        alt="img"
        className={cls(classes.img, {
          [classes.animatedImage]: isAnimationRequired,
        })}
      />
      <Typography className={classes.noAnimeText}>{textToRender}</Typography>
    </div>
  );
};

StateView.propTypes = {
  textToRender: PropTypes.string,
  imageToRender: PropTypes.any.isRequired,
  isAnimationRequired: PropTypes.bool,
};

StateView.defaultProps = {
  textToRender: "Text to display here.",
  isAnimationRequired: false,
};

export default StateView;
