import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core';
import Logo from '../../components/utilityComponents/Logo';
import AuthContainer from '../../containers/Auth/AuthContainer';
import LoginImg from '../../assets/login.jpg';

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

const AuthView = (props) => {
  const classes = useStyles();
  const goBackToHome = () => {
    const { history } = props;
    history.goBack();
  };
  return (
    <div className={classes.backgroundCover}>
      <Logo isBackButtonRequired onBackButtonPress={goBackToHome} />
      <AuthContainer {...props} />
    </div>
  );
};

AuthView.propTypes = {
  history: PropTypes.object,
};

AuthView.defaultProps = {
  history: {},
};

export default AuthView;
