import React from "react";
import PropTypes from "prop-types";
import {
  Drawer,
  makeStyles,
  List,
  ListItem,
  Tooltip,
  Divider,
} from "@material-ui/core";
import cls from "classnames";
import { ReactComponent as User } from "../../assets/userHam.svg";
import { ReactComponent as Bell } from "../../assets/bell.svg";
import { ReactComponent as Pie } from "../../assets/pie.svg";
import { ReactComponent as Logout } from "../../assets/logout.svg";
import { ReactComponent as DarkModeIcon } from "../../assets/nightMode.svg";

const useStyles = makeStyles((theme) => ({
  userIcon: {
    width: 35,
    height: 35,
  },
  bellIcon: {
    width: 35,
    height: 35,
  },
  pieIcon: {
    width: 35,
    height: 35,
  },
  logoutIcon: {
    width: 35,
    height: 35,
  },
  logoutButtonPosition: {
    position: "absolute",
    bottom: 0,
  },
  drawer: {
    background: theme.card.background,
  },
  list: {
    position: "relative",
    height: "100vh",
  },
  listButton: {
    margin: `${theme.typography.pxToRem(10)} 0`,
    cursor: "pointer",
  },
}));

const CustomDrawer = (props) => {
  const classes = useStyles();
  const { open, onLogOutClick, onClose, handleDarkModeClick } = props;

  return (
    <Drawer
      variant="temporary"
      open={open}
      onClose={onClose}
      classes={{ paper: classes.drawer }}
    >
      <List className={classes.list}>
        <Tooltip title="View Profile">
          <ListItem button className={classes.listButton}>
            <User className={classes.userIcon} />
          </ListItem>
        </Tooltip>
        <Tooltip title="View Stats">
          <ListItem button className={classes.listButton}>
            <Pie className={classes.pieIcon} />
          </ListItem>
        </Tooltip>
        <Tooltip title="Notifications">
          <ListItem button className={classes.listButton}>
            <Bell className={classes.bellIcon} />
          </ListItem>
        </Tooltip>
        <Divider />
        <Tooltip title="Change theme">
          <ListItem
            button
            className={classes.listButton}
            onClick={handleDarkModeClick}
          >
            <DarkModeIcon className={classes.bellIcon} />
          </ListItem>
        </Tooltip>
        <Tooltip title="Logout">
          <ListItem
            button
            className={cls(classes.listButton, classes.logoutButtonPosition)}
            onClick={onLogOutClick}
          >
            <Logout className={classes.logoutIcon} />
          </ListItem>
        </Tooltip>
      </List>
    </Drawer>
  );
};

CustomDrawer.propTypes = {
  open: PropTypes.bool.isRequired,
  onLogOutClick: PropTypes.func.isRequired,
  onClose: PropTypes.func.isRequired,
  handleDarkModeClick: PropTypes.func.isRequired,
};

export default CustomDrawer;
