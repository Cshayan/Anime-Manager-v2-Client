import React from 'react';
import { makeStyles, TextField } from '@material-ui/core';
import { useResetPassword } from 'custom-hooks/authHook';

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
    margin: `1rem 0 1rem 0`,
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
}));

const ResetPasswordForm = (props) => {
  const classes = useStyles();
  const {
    passwordDetails,
    onChangeHandler,
    onResetPasswordClick,
    isResetPasswordAPIOn,
  } = useResetPassword(props);
  return (
    <div className={classes.formContainer}>
      <div className={classes.heading}>Reset your password now!</div>
      <div className={classes.subText}>
        Set a new password and confirm it again, and you are good to login with
        your new password.
      </div>
      <form
        noValidate
        autoComplete="off"
        onSubmit={(e) => {
          onResetPasswordClick(e);
        }}
      >
        <TextField
          placeholder="Your new password"
          required
          name="password"
          type="password"
          value={passwordDetails.password}
          onChange={onChangeHandler}
          className={classes.formInput}
          fullWidth
          InputProps={{
            classes: {
              input: classes.input,
            },
          }}
        />
        <TextField
          placeholder="Confirm password"
          required
          name="confirm_password"
          type="password"
          value={passwordDetails.confirm_password}
          onChange={onChangeHandler}
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
          disabled={isResetPasswordAPIOn}
        >
          {isResetPasswordAPIOn ? (
            <i
              className="fa fa-spinner fa-spin"
              style={{ color: '#fff', fontSize: '20px', overflow: 'hidden' }}
            ></i>
          ) : (
            'RESET YOUR PASSWORD'
          )}
        </button>
      </form>
    </div>
  );
};

export default ResetPasswordForm;
