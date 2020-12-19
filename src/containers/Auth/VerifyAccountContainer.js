import React from 'react';
import { useVerifyAccount } from 'custom-hooks/authHook';
import { makeStyles, Typography, IconButton } from '@material-ui/core';
import { useHistory } from 'react-router-dom';
import Lottie from 'react-lottie';
import waitingAnimation from 'assets/waiting.json';
import doneAnimation from 'assets/done.json';
import errorAnimation from 'assets/verify-account-error';

const useStyles = makeStyles(() => ({
  waitingText: {
    color: '#fff',
    textAlign: 'center',
    fontSize: '1.8rem',
  },
  hereText: {
    color: '#5DAAE0',
    fontWeight: 'bold',
    cursor: 'pointer',
    padding: 0,
    margin: 0,
  },
  '@media screen and (max-width: 600px)': {
    waitingText: {
      fontSize: '1.5rem',
    },
  },
}));

const VerifyAccountContainer = (props) => {
  const classes = useStyles();
  const { isUserVerifying, isUserVerified } = useVerifyAccount(props);
  const history = useHistory();

  const waitingView = () => {
    const defaultOptions = {
      loop: true,
      autoplay: true,
      animationData: waitingAnimation,
      rendererSettings: {
        preserveAspectRatio: 'xMidYMid slice',
      },
    };
    return (
      <>
        <Lottie options={defaultOptions} width={300} height={300} />
        <Typography className={classes.waitingText}>
          Please wait, we are verifying your account. Hang on!
        </Typography>
      </>
    );
  };

  const successView = () => {
    const defaultOptions = {
      loop: true,
      autoplay: true,
      animationData: doneAnimation,
      rendererSettings: {
        preserveAspectRatio: 'xMidYMid slice',
      },
    };
    return (
      <>
        <Lottie options={defaultOptions} width={300} height={300} />
        <Typography className={classes.waitingText}>
          Verified! Click{' '}
          <IconButton
            onClick={() => history.push('/auth')}
            className={classes.hereText}
          >
            here
          </IconButton>{' '}
          to login to your account.
        </Typography>
      </>
    );
  };

  const errorView = () => {
    const defaultOptions = {
      loop: true,
      autoplay: true,
      animationData: errorAnimation,
      rendererSettings: {
        preserveAspectRatio: 'xMidYMid slice',
      },
    };
    return (
      <>
        <Lottie options={defaultOptions} width={300} height={300} />
        <Typography className={classes.waitingText}>
          Error in verifying the account! <br />
          Contact site administrator to verify your account manually.
        </Typography>
      </>
    );
  };

  if (isUserVerifying) return waitingView();

  if (isUserVerified) return successView();

  if (!isUserVerified) return errorView();

  return <></>;
};

VerifyAccountContainer.propTypes = {};

VerifyAccountContainer.defaultProps = {};

export default VerifyAccountContainer;
