import React from "react";
import PropTypes from "prop-types";
import { Popover, Typography, makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  notificationCont: {
    padding: "1rem",
    background: theme.palette.background.default,
    color: theme.palette.text.primary,
  },
  text: {
    color: theme.palette.text.primary,
    fontSize: "0.8rem",
  },
}));

const NotificationPopOver = (props) => {
  const { anchorEl, handleClose, open, id } = props;
  const classes = useStyles();
  return (
    <Popover
      id={id}
      open={open}
      anchorEl={anchorEl}
      onClose={handleClose}
      anchorOrigin={{
        vertical: "bottom",
        horizontal: "center",
      }}
      transformOrigin={{
        vertical: "top",
        horizontal: "center",
      }}
    >
      <div className={classes.notificationCont}>
        <Typography className={classes.text} noWrap>
          You are all caught up. No new notification for you.
        </Typography>
      </div>
    </Popover>
  );
};

NotificationPopOver.defaultProps = {
  id: undefined,
  anchorEl: null,
};

NotificationPopOver.propTypes = {
  id: PropTypes.string,
  open: PropTypes.bool.isRequired,
  handleClose: PropTypes.func.isRequired,
  anchorEl: PropTypes.object,
};

export default NotificationPopOver;
