import React from 'react';
import {
  makeStyles,
  Dialog,
  DialogContent,
  Typography,
  Tooltip,
  IconButton,
} from '@material-ui/core';
import PropTypes from 'prop-types';
import Lottie from 'react-lottie';
import watchVideoAnimation from 'assets/animation/watch-video.json';
import { ReactComponent as WatchVideoIcon } from 'assets/watch-video.svg';

const useStyles = makeStyles((theme) => ({
  dialogTitle: {
    fontSize: theme.typography.pxToRem(34),
    color: theme.palette.primary.main,
    fontWeight: '500',
    letterSpacing: '0.1rem',
    textAlign: 'left',
  },
  dialogContent: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'column',
  },
  formContainer: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  form: {
    marginTop: '1rem',
  },
  addURLBtn: {
    padding: '0.4rem 0.9rem',
    color: '#fff',
    background: theme.button.background.light,
    border: 'none',
    outline: 'none',
    cursor: 'pointer',
    marginTop: '0.5rem',
    borderRadius: theme.typography.pxToRem(5),
    '&:hover': {
      opacity: 0.9,
    },
    '&:disabled': {
      background: theme.button.background.light,
      cursor: 'no-drop',
      opacity: '0.5',
    },
  },
  inputBox: {
    padding: '0.4rem 0.9rem',
    color: '#111',
    width: '100%',
    outline: 'none',
    border: 'none',
    '&:focus': {
      borderBottom: `2px solid ${theme.palette.primary.main}`,
    },
  },
  urlLink: {
    marginTop: '1rem',
    padding: '0.4rem 0.9rem',
  },
  love: {
    width: theme.typography.pxToRem(25),
    height: theme.typography.pxToRem(25),
    margin: `0 ${theme.typography.pxToRem(10)}`,
  },
  watchNow: {
    fontSize: theme.typography.pxToRem(16),
    background: theme.button.background.light,
    borderRadius: '5px',
    color: theme.palette.text.primary,
    marginTop: '2rem',
    width: '100%',
  },
  title: {
    color: theme.palette.primary.main,
    marginTop: '1rem',
  },
  '@media screen and (max-width: 600px)': {
    dialogTitle: {
      fontSize: theme.typography.pxToRem(24),
    },
    formContainer: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      flexDirection: 'column',
    },
  },
}));

const AnimeWatchVideoDialog = (props) => {
  const classes = useStyles();
  const {
    open,
    onClose,
    videoUrlToWatch,
    title,
    onAddURLClick,
    videoURLText,
    setVideoURL,
    onWatchNowClick,
    isVideoURLAdding,
    isMobile,
  } = props;
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: watchVideoAnimation,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };
  return (
    <div>
      <Dialog open={open} onClose={onClose}>
        <DialogContent className={classes.dialogContent}>
          <div>
            <Typography className={classes.dialogTitle}>
              Watch your favourite anime now!
            </Typography>
            <Typography variant="h6">
              Add URL of this anime from any website to watch it whenver you
              like at one go!
            </Typography>
          </div>
          <div className={classes.formContainer}>
            <div>
              <Typography variant="h5" noWrap className={classes.title}>
                {`${title?.slice(0, 25)}...`}
              </Typography>
              <form className={classes.form} onSubmit={(e) => onAddURLClick(e)}>
                <input
                  type="text"
                  placeholder="Enter a valid URL"
                  className={classes.inputBox}
                  value={videoURLText}
                  onChange={(e) => setVideoURL(e.target.value)}
                />
                <button type="submit" className={classes.addURLBtn}>
                  {isVideoURLAdding ? (
                    <i
                      className="fa fa-spinner fa-spin"
                      style={{
                        color: '#fff',
                        fontSize: '20px',
                        overflow: 'hidden',
                      }}
                    ></i>
                  ) : (
                    'ADD URL'
                  )}
                </button>
              </form>
              {videoUrlToWatch && videoUrlToWatch !== '#' && (
                <Tooltip title={videoUrlToWatch}>
                  <IconButton
                    className={classes.watchNow}
                    onClick={() => onWatchNowClick()}
                  >
                    <WatchVideoIcon className={classes.love} /> Watch Now
                  </IconButton>
                </Tooltip>
              )}
            </div>
            <div className={classes.lotteView}>
              <Lottie
                options={defaultOptions}
                width={isMobile ? '60%' : '100%'}
                height={isMobile ? '40%' : '100%'}
              />
            </div>
          </div>
          <div>
            <Typography>
              If you have already entered a URL, adding a new will update the
              previous URL.
            </Typography>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

AnimeWatchVideoDialog.propTypes = {
  open: PropTypes.bool,
  onClose: PropTypes.func,
  videoUrlToWatch: PropTypes.string,
  title: PropTypes.string,
  onAddURLClick: PropTypes.func.isRequired,
  videoURLText: PropTypes.string.isRequired,
  setVideoURL: PropTypes.func.isRequired,
  onWatchNowClick: PropTypes.func.isRequired,
  isVideoURLAdding: PropTypes.bool,
  isMobile: PropTypes.object.isRequired,
};

AnimeWatchVideoDialog.defaultProps = {
  open: false,
  onClose: () => {},
  videoUrlToWatch: '#',
  title: '',
  isVideoURLAdding: false,
};

export default AnimeWatchVideoDialog;
