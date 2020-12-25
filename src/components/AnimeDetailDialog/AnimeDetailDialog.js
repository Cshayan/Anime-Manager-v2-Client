import React from 'react';
import PropTypes from 'prop-types';
import {
  makeStyles,
  Dialog,
  DialogContent,
  Typography,
  Button,
  IconButton,
  Grid,
} from '@material-ui/core';
import cls from 'classnames';

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
  cancelBtn: {
    padding: `${theme.typography.pxToRem(7)} ${theme.typography.pxToRem(9)}`,
    fontSize: theme.typography.pxToRem(18),
    border: `1px solid ${theme.palette.primary.main}`,
    width: '100%',
  },
  btnCont: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    margin: `${theme.typography.pxToRem(10)} 0`,
  },
  iconBtn: {
    width: theme.typography.pxToRem(160),
    height: theme.typography.pxToRem(60),
    borderRadius: theme.typography.pxToRem(5),
    border: `1px solid ${theme.palette.primary.main}`,
    background: theme.card.background,
    fontSize: theme.typography.pxToRem(16),
    color: theme.palette.text.primary,
    margin: `${theme.typography.pxToRem(5)} 0`,
  },
  icon: {
    width: theme.typography.pxToRem(35),
    height: theme.typography.pxToRem(35),
    marginRight: theme.typography.pxToRem(5),
  },
  activeBtn: {
    background: theme.button.background.light,
    color: '#fff',
  },
  '@media screen and (max-width: 600px)': {
    dialogTitle: {
      fontSize: theme.typography.pxToRem(32),
    },
    statCont: {
      alignItems: 'center',
      flexDirection: 'column',
    },
    detailCont: {
      alignItems: 'center',
      textAlign: 'center',
    },
    coverImg: {
      width: theme.typography.pxToRem(250),
      height: theme.typography.pxToRem(300),
      paddingRight: `${theme.typography.pxToRem(25)}`,
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
    icon,
  } = props;

  return (
    <div>
      <Dialog open={open} onClose={onClose}>
        <DialogContent className={classes.dialogContent}>
          <div className={classes.statCont}>
            <img src={imageUrl} alt="cover" className={classes.coverImg} />
            <div className={classes.detailCont}>
              <Typography className={classes.dialogTitle} noWrap>
                {title && title.length > 12
                  ? `${title.slice(0, 20)}...`
                  : title}
              </Typography>
              <div>
                <Typography className={classes.statusText}>
                  Change your status below :{' '}
                </Typography>
                <Grid container justify="center" alignItems="center">
                  <Grid item xs={6} md={4} lg={4}>
                    <IconButton
                      className={cls(classes.iconBtn, classes.activeBtn)}
                    >
                      <img alt="icon" src={icon} className={classes.icon} />
                      {status}
                    </IconButton>
                  </Grid>
                  {statusArray.map((val) => (
                    <Grid item xs={6} md={4} lg={4} key={val.title}>
                      <IconButton
                        key={val}
                        className={classes.iconBtn}
                        onClick={() =>
                          onSaveClick({ animeId, statusValue: val.title })
                        }
                      >
                        <img
                          alt="icon"
                          src={val.icon}
                          className={classes.icon}
                        />
                        {val.title}
                      </IconButton>
                    </Grid>
                  ))}
                </Grid>
              </div>
              <div className={classes.btnCont}>
                <Button className={classes.cancelBtn} onClick={() => onClose()}>
                  Cancel
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
  icon: PropTypes.string.isRequired,
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
