import React from 'react';
import PropTypes from 'prop-types';
import FullScreenLoader from '../components/utilityComponents/FullScreenLoader';

const ContainerWrapper = (props) => {
  const { isLoading, children } = props;

  if (isLoading) return <FullScreenLoader />;

  return <>{children}</>;
};

ContainerWrapper.defaultProps = {
  isLoading: false,
};

ContainerWrapper.propTypes = {
  isLoading: PropTypes.bool,
  children: PropTypes.node.isRequired,
};

export default ContainerWrapper;
