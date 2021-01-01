import React from 'react';
import { makeStyles, TextField } from '@material-ui/core';
import { useForgotPassword } from 'custom-hooks/authHook';

const useStyles = makeStyles((theme) => ({
  formContainer: {
    padding: '1rem',
  },
  heading: {
    color: '#fff',
    letterSpacing: '0.1rem',
    fontSize: theme.typography.pxToRem(36),
  },
  subText: {
    color: '#fff',
    fontSize: theme.typography.pxToRem(16),
    marginTop: '0.5rem',
  },
  formInput: {
    margin: `3rem 0 1rem 0`,
  },
  input: {
    '&::placeholder': {
      fontSize: theme.typography.pxToRem(18),
      color: theme.palette.primary.main,
    },
    fontSize: theme.typography.pxToRem(20),
    color: theme.palette.primary.main,
  },
  resetButton: {
    background: theme.button.background.light,
    padding: `${theme.typography.pxToRem(9)} ${theme.typography.pxToRem(25)}`,
    border: `1px solid ${theme.palette.primary.main}`,
    color: '#fff',
    fontWeight: 'bold',
    fontSize: theme.typography.pxToRem(18),
    margin: `1rem 0`,
    borderRadius: theme.typography.pxToRem(5),
    outline: 'none',
    cursor: 'pointer',
    '&:hover': {
      border: `1px solid ${theme.button.background.light}`,
    },
    '&:disabled': {
      background: theme.button.background.light,
      border: `1px solid ${theme.palette.primary.main}`,
      cursor: 'no-drop',
      opacity: '0.5',
      overflow: 'hidden',
    },
  },
  statusText: {
    color: '#f1c40f',
    fontSize: theme.typography.pxToRem(22),
  },
}));

const ForgotPasswordForm = () => {
  const classes = useStyles();
  const {
    email,
    setEmail,
    onResetLinkClick,
    isForgotAPIOn,
    forgotPasswordMessage,
  } = useForgotPassword();
  return (
    <div className={classes.formContainer}>
      <div className={classes.heading}>Forgot your password?</div>
      <div className={classes.subText}>
        Well, provide your email below which you used to login. We will send you
        a reset link in that email.
      </div>
      <form
        noValidate
        autoComplete="off"
        onSubmit={(e) => {
          onResetLinkClick(e);
        }}
      >
        <TextField
          placeholder="Your email"
          required
          name="email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className={classes.formInput}
          fullWidth
          InputProps={{
            classes: {
              input: classes.input,
            },
          }}
        />
        <button
          className={classes.resetButton}
          type="submit"
          disabled={isForgotAPIOn}
        >
          {isForgotAPIOn ? (
            <i
              className="fa fa-spinner fa-spin"
              style={{ color: '#fff', fontSize: '20px', overflow: 'hidden' }}
            ></i>
          ) : (
            'SEND RESET LINK'
          )}
        </button>
      </form>
      {forgotPasswordMessage && (
        <div className={classes.statusText}>{forgotPasswordMessage}</div>
      )}
    </div>
  );
};

export default ForgotPasswordForm;
