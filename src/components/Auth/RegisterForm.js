import React from 'react';
import { Button, makeStyles, TextField } from '@material-ui/core';
import { useRegister } from '../../custom-hooks/authHook';

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
  registerButton: {
    background: theme.button.background.light,
    padding: `${theme.typography.pxToRem(7)} ${theme.typography.pxToRem(25)}`,
    border: `1px solid ${theme.palette.primary.main}`,
    color: '#fff',
    fontWeight: 'bold',
    fontSize: theme.typography.pxToRem(18),
    margin: `1rem 0`,
    '&:hover': {
      border: `1px solid ${theme.button.background.light}`,
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
      <Button className={classes.registerButton} type="submit">
        SIGN UP
      </Button>
    </form>
  );
};

export default RegisterForm;
