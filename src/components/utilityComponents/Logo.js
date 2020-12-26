/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';
import { makeStyles, Button, Tooltip } from '@material-ui/core';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import LogoImg from '../../assets/logo.png';
import {
  logoStyleObject,
  logoStyleMobileView,
} from '../../constants/logoConstant';

const useStyles = makeStyles(() => ({
  logoImg: logoStyleObject,
  backIcon: {
    fontSize: '2rem',
    color: '#fff',
    cursor: 'pointer',
  },

  '@media screen and (max-width: 600px)': {
    logoImg: logoStyleMobileView,
    backIcon: {
      fontSize: '1.5rem',
    },
  },
}));

const Logo = (props) => {
  const classes = useStyles();
  const history = useHistory();
  const { isBackButtonRequired, onBackButtonPress } = props;
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'flex-start',
        alignItems: 'center',
      }}
    >
      <div onClick={() => history.push('/')}>
        <img src={LogoImg} alt="Logo" className={classes.logoImg} />
      </div>
      {isBackButtonRequired && (
        <Tooltip title="Go back">
          <Button onClick={onBackButtonPress}>
            <ArrowBackIcon className={classes.backIcon} />
          </Button>
        </Tooltip>
      )}
    </div>
  );
};

Logo.defaultProps = {
  isBackButtonRequired: false,
  onBackButtonPress: () => {},
};

Logo.propTypes = {
  isBackButtonRequired: PropTypes.bool,
  onBackButtonPress: PropTypes.func,
};

export default Logo;
