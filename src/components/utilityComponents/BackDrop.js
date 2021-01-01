import React from 'react';
import { useSelector } from 'react-redux';
import { selectIsBackDropOpen } from 'selectors/utilsSelector';
import Backdrop from '@material-ui/core/Backdrop';
import CircularProgress from '@material-ui/core/CircularProgress';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  backdrop: {
    zIndex: theme.zIndex.drawer + 1,
    color: theme.palette.text.primary,
  },
}));

const BackDrop = () => {
  const classes = useStyles();
  const isBackDropOpen = useSelector(selectIsBackDropOpen);
  return (
    <div>
      <Backdrop className={classes.backdrop} open={isBackDropOpen}>
        <CircularProgress color="inherit" />
      </Backdrop>
    </div>
  );
};

export default BackDrop;
