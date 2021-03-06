import React from 'react';
import { makeStyles, TextField } from '@material-ui/core';
import { useRegister } from '../../custom-hooks/authHook';

const useStyles = makeStyles((theme) => ({
  formInput: {
    margin: `1rem 0`,
  },
  input: {
    '&::placeholder': {
      fontSize: theme.typography.pxToRem(18),
      color: '#fff',
    },
    fontSize: theme.typography.pxToRem(20),
    color: '#fff',
  },
  registerButton: {
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
      overflow: 'hidden',
    },
  },
}));

const RegisterForm = () => {
  const classes = useStyles();
  const {
    name,
    email,
    password,
    onChangeHandler,
    onRegisterSubmit,
    isUserLogging,
  } = useRegister();
  return (
    <form noValidate autoComplete="off" onSubmit={(e) => onRegisterSubmit(e)}>
      <TextField
        placeholder="Your name"
        name="name"
        value={name}
        required
        type="text"
        className={classes.formInput}
        onChange={onChangeHandler}
        fullWidth
        InputProps={{
          classes: {
            input: classes.input,
          },
        }}
      />
      <TextField
        placeholder="Your email"
        name="email"
        value={email}
        required
        type="email"
        className={classes.formInput}
        onChange={onChangeHandler}
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
        value={password}
        placeholder="Your password"
        className={classes.formInput}
        onChange={onChangeHandler}
        fullWidth
        InputProps={{
          classes: { input: classes.input },
        }}
      />
      <button
        className={classes.registerButton}
        type="submit"
        disabled={isUserLogging}
      >
        {isUserLogging ? (
          <i
            className="fa fa-spinner fa-spin"
            style={{ color: '#fff', fontSize: '20px', overflow: 'hidden' }}
          ></i>
        ) : (
          'SIGN UP'
        )}
      </button>
    </form>
  );
};

export default RegisterForm;
