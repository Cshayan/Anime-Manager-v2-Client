import React from 'react';
import { makeStyles } from '@material-ui/core';
import VerifyAccountContainer from 'containers/Auth/VerifyAccountContainer';
import Logo from '../../components/utilityComponents/Logo';
import LoginImg from '../../assets/verify-account.jpg';

const useStyles = makeStyles((theme) => ({
  backgroundCover: {
    height: '100vh',
    width: '100vw',
    backgroundColor: theme.palette.background.default,
    backgroundImage: `url(${LoginImg})`,
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
  },
}));

const VerifyAccountView = (props) => {
  const classes = useStyles();
  return (
    <div className={classes.backgroundCover}>
      <Logo />
      <VerifyAccountContainer {...props} />
    </div>
  );
};

VerifyAccountView.propTypes = {};

VerifyAccountView.defaultProps = {};

export default VerifyAccountView;
