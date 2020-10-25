import React from 'react';
import PropTypes from 'prop-types';
import LoginComponent from '../../components/Auth/LoginComponent';

const LoginContainer = (props) => {
  const { onRightButtonClick } = props;

  return <LoginComponent onRightButtonClick={onRightButtonClick} />;
};

LoginContainer.propTypes = {
  onRightButtonClick: PropTypes.func,
};

LoginContainer.defaultProps = {
  onRightButtonClick: () => {},
};

export default LoginContainer;
