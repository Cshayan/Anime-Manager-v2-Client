import React from 'react';
import PropTypes from 'prop-types';
import RegisterComponent from '../../components/Auth/RegisterComponent';

const RegisterContainer = (props) => {
  const { onRightButtonClick } = props;
  return (
    <>
      <RegisterComponent onRightButtonClick={onRightButtonClick} />
    </>
  );
};

RegisterContainer.propTypes = {
  onRightButtonClick: PropTypes.func,
};

RegisterContainer.defaultProps = {
  onRightButtonClick: () => {},
};

export default RegisterContainer;
