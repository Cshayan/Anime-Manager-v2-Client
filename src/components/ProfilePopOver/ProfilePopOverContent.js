import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Divider from "@material-ui/core/Divider";
import { ReactComponent as FaceIcon } from "../../assets/face.svg";
import { ReactComponent as EmailIcon } from "../../assets/email.svg";
import { ReactComponent as ExitToAppIcon } from "../../assets/logout.svg";

const useStyles = makeStyles((theme) => ({
  root: {
    width: 280,
    background: theme.palette.background.default,
  },
  listItemText: {
    fontSize: theme.typography.pxToRem(22),
    color: theme.palette.text.primary,
  },
  icon: {
    color: theme.palette.primary.main,
    width: 20,
    height: 20,
  },
}));

const ProfilePopOverContent = (props) => {
  const classes = useStyles();
  const { name, email, logOutButtonClick } = props;
  return (
    <div className={classes.root}>
      <List component="nav">
        <ListItem button>
          <ListItemIcon>
            <FaceIcon className={classes.icon} />
          </ListItemIcon>
          <ListItemText
            secondary={name}
            classes={{ secondary: classes.listItemText }}
          />
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <EmailIcon className={classes.icon} />
          </ListItemIcon>
          <ListItemText
            secondary={email}
            classes={{ secondary: classes.listItemText }}
          />
        </ListItem>
        <Divider />
        <ListItem button onClick={logOutButtonClick}>
          <ListItemIcon>
            <ExitToAppIcon className={classes.icon} />
          </ListItemIcon>
          <ListItemText
            secondary="Logout"
            classes={{ secondary: classes.listItemText }}
          />
        </ListItem>
      </List>
    </div>
  );
};

ProfilePopOverContent.defaultProps = {
  name: "John Doe",
  email: "johndoe@test.com",
  logOutButtonClick: () => {},
};

ProfilePopOverContent.propTypes = {
  name: PropTypes.string,
  email: PropTypes.string,
  logOutButtonClick: PropTypes.func,
};

export default ProfilePopOverContent;
