import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import {
  makeStyles,
  Dialog,
  DialogContent,
  Typography,
  Button,
} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  dialogTitle: {
    fontSize: theme.typography.pxToRem(34),
    fontWeight: '500',
    letterSpacing: '0.1rem',
    textAlign: 'left',
  },
  dialogContent: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
  },
  coverImg: {
    width: theme.typography.pxToRem(300),
    height: theme.typography.pxToRem(400),
    paddingRight: `${theme.typography.pxToRem(25)}`,
  },
  statCont: {
    display: 'flex',
    // alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
  },
  detailCont: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
  },
  statusText: {
    fontSize: theme.typography.pxToRem(18),
    margin: `${theme.typography.pxToRem(5)} 0`,
  },
  customSelect: {
    background: theme.palette.secondary.main,
    width: '100%',
    padding: `${theme.typography.pxToRem(7)} ${theme.typography.pxToRem(9)}`,
    color: theme.palette.text.primary,
    outline: 'none',
  },
  saveBtn: {
    padding: `${theme.typography.pxToRem(7)} ${theme.typography.pxToRem(9)}`,
    fontSize: theme.typography.pxToRem(18),
    background: theme.button.background.light,
    color: '#fff',
  },
  cancelBtn: {
    padding: `${theme.typography.pxToRem(7)} ${theme.typography.pxToRem(9)}`,
    fontSize: theme.typography.pxToRem(18),
    border: `1px solid ${theme.palette.primary.main}`,
  },
  btnCont: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    margin: `${theme.typography.pxToRem(10)} 0`,
  },
  '@media screen and (max-width: 600px)': {
    dialogTitle: {
      fontSize: theme.typography.pxToRem(28),
    },
    coverImg: {
      width: theme.typography.pxToRem(150),
      height: theme.typography.pxToRem(250),
      paddingRight: `${theme.typography.pxToRem(10)}`,
    },
  },
}));

const AnimeDetailDialog = (props) => {
  const classes = useStyles();
  const {
    open,
    onClose,
    imageUrl,
    title,
    status,
    animeId,
    onSaveClick,
    statusArray,
  } = props;
  const [statusValue, setStatusValue] = useState('');

  useEffect(() => {
    if (status) {
      setStatusValue(status);
    }
  }, [status]);

  const onDropDownChange = (e) => {
    setStatusValue(e.target.value);
  };

  return (
    <div>
      <Dialog open={open} onClose={onClose}>
        <DialogContent className={classes.dialogContent}>
          <div className={classes.statCont}>
            <img src={imageUrl} alt="cover" className={classes.coverImg} />
            <div className={classes.detailCont}>
              <Typography className={classes.dialogTitle} noWrap>
                {title && title.length > 12
                  ? `${title.slice(0, 10)}...`
                  : title}
              </Typography>
              <div>
                <Typography className={classes.statusText}>
                  Change your status below :{' '}
                </Typography>
                <select
                  className={classes.customSelect}
                  onChange={(e) => onDropDownChange(e)}
                >
                  <option value={status}>{status}</option>
                  {statusArray.map((val) => (
                    <option key={val} value={val}>
                      {val}
                    </option>
                  ))}
                </select>
              </div>
              <div className={classes.btnCont}>
                <Button className={classes.cancelBtn} onClick={() => onClose()}>
                  Cancel
                </Button>
                <Button
                  className={classes.saveBtn}
                  onClick={() => onSaveClick({ animeId, statusValue })}
                >
                  Save
                </Button>
              </div>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

AnimeDetailDialog.propTypes = {
  open: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  title: PropTypes.string,
  imageUrl: PropTypes.string,
  status: PropTypes.string,
  animeId: PropTypes.string,
  onSaveClick: PropTypes.func,
  statusArray: PropTypes.array,
};

AnimeDetailDialog.defaultProps = {
  title: '----',
  imageUrl: '',
  status: 'NA',
  animeId: '',
  onSaveClick: () => {},
  statusArray: [],
};

export default AnimeDetailDialog;
