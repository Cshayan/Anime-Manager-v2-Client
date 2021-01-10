import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { makeStyles, Typography } from '@material-ui/core/';
import Logo from 'components/utilityComponents/Logo';
import DashboardIcon from '@material-ui/icons/Dashboard';
import VpnKeyIcon from '@material-ui/icons/VpnKey';

const useStyles = makeStyles((theme) => ({
  header: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  linkText: {
    padding: '1rem',
    color: theme.palette.text.primary,
    textDecoration: 'none',
  },
  viewText: {
    padding: '1rem',
    fontSize: '18px',
    color: theme.palette.primary.main,
  },
  name: {
    fontSize: '26px',
  },
}));

const Header = (props) => {
  const { isAuthenticated } = props;
  const classes = useStyles();
  return (
    <div className={classes.header}>
      <Logo />
      <Typography className={classes.viewText}></Typography>
      {isAuthenticated ? (
        <Link to="/dashboard" className={classes.linkText}>
          <DashboardIcon /> Go to dashboard
        </Link>
      ) : (
        <Link to="/auth" className={classes.linkText}>
          <VpnKeyIcon /> Login
        </Link>
      )}
    </div>
  );
};

Header.propTypes = {
  isAuthenticated: PropTypes.bool.isRequired,
};

Header.defaultProps = {};

export default Header;
