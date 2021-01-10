import React from 'react';
import {
  makeStyles,
  Dialog,
  DialogContent,
  Typography,
  Tooltip,
} from '@material-ui/core';
import FileCopyIcon from '@material-ui/icons/FileCopy';
import PropTypes from 'prop-types';
import Lottie from 'react-lottie';
import shareWatchlistAnimation from 'assets/animation/share-watchlist.json';

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
    justifyContent: 'space-between',
    flexDirection: 'column',
  },
  watchlistLinkInput: {
    padding: '0.5rem 0.7rem',
    color: '#111',
    fontSize: '0.7rem',
    width: '90%',
    margin: '1rem 0',
    fontWeight: 'bold',
  },
  copyButton: {
    width: '10%',
    padding: '0.3rem 0.7rem',
    margin: 'auto',
    color: '#fff',
    background: theme.button.background.light,
    outline: 'none',
    border: 'none',
    borderRadius: '0 5px 5px 0',
    cursor: 'pointer',
  },
  formContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  '@media screen and (max-width: 600px)': {
    watchlistLinkInput: {
      width: '80%',
    },
    copyButton: {
      width: '20%',
    },
  },
}));

const ShareWatchlistDialog = (props) => {
  const classes = useStyles();
  const {
    shareWatchlistLink,
    open,
    onClose,
    isMobile,
    onCopyLinkClick,
    linkRef,
  } = props;
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: shareWatchlistAnimation,
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
              Share your watchlist
            </Typography>
            <Typography variant="h6">
              Share the link below with anyone and they can view your watchlist.
            </Typography>
          </div>
          <div>
            <div className={classes.formContainer}>
              <input
                type="text"
                value={shareWatchlistLink}
                // disabled
                ref={linkRef}
                className={classes.watchlistLinkInput}
              />
              <Tooltip title="Copy to clipboard">
                <button
                  className={classes.copyButton}
                  onClick={() => onCopyLinkClick(shareWatchlistLink)}
                >
                  <FileCopyIcon />
                </button>
              </Tooltip>
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
              If you add any anime to your watchlist in future, those will also
              be visible to others who have this link.
            </Typography>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

ShareWatchlistDialog.propTypes = {
  open: PropTypes.bool,
  onClose: PropTypes.func,
  isMobile: PropTypes.object.isRequired,
  shareWatchlistLink: PropTypes.string,
  onCopyLinkClick: PropTypes.func,
  linkRef: PropTypes.any.isRequired,
};

ShareWatchlistDialog.defaultProps = {
  open: false,
  onClose: () => {},
  shareWatchlistLink: '',
  onCopyLinkClick: () => {},
};

export default ShareWatchlistDialog;
