import React from 'react';
import { makeStyles, TextField } from '@material-ui/core';
import { useLogin } from '../../custom-hooks/authHook';

const useStyles = makeStyles((theme) => ({
  formInput: {
    margin: `1rem 0`,
  },
  input: {
    '&::placeholder': {
      fontSize: theme.typography.pxToRem(18),
      color: theme.palette.text.primary,
    },
    fontSize: theme.typography.pxToRem(20),
  },
  loginButton: {
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
    },
  },
}));

const LoginForm = () => {
  const classes = useStyles();
  const {
    email,
    password,
    onChangeHandler,
    onLoginSubmit,
    isUserLogging,
  } = useLogin();
  return (
    <form noValidate autoComplete="off" onSubmit={(e) => onLoginSubmit(e)}>
      <TextField
        placeholder="Your email"
        id="standard-basic"
        required
        name="email"
        type="email"
        value={email}
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
        type="password"
        name="password"
        placeholder="Your password"
        value={password}
        onChange={onChangeHandler}
        className={classes.formInput}
        fullWidth
        InputProps={{
          classes: { input: classes.input },
        }}
      />
      <button
        className={classes.loginButton}
        type="submit"
        disabled={isUserLogging}
      >
        {isUserLogging ? (
          <i
            className="fa fa-spinner fa-spin"
            style={{ color: '#fff', fontSize: '20px' }}
          ></i>
        ) : (
          'LOGIN'
        )}
      </button>
    </form>
  );
};

export default LoginForm;
