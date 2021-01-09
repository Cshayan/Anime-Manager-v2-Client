import React from 'react';
import PropTypes from 'prop-types';
import cls from 'classnames';
import { makeStyles, Tooltip, IconButton } from '@material-ui/core/';
import FormatListBulletedIcon from '@material-ui/icons/FormatListBulleted';
import { GridOn } from '@material-ui/icons';
import ShareIcon from '@material-ui/icons/Share';

const useStyles = makeStyles((theme) => ({
  iconStyle: {
    width: theme.typography.pxToRem(40),
    height: theme.typography.pxToRem(40),
    margin: `0 ${theme.typography.pxToRem(10)}`,
    color: theme.palette.text.primary,
    cursor: 'pointer',
  },
  activeIcon: {
    color: theme.palette.primary.main,
  },
  iconBtn: {
    padding: 0,
    margin: 0,
    width: theme.typography.pxToRem(80),
  },
  newText: {
    background: '#e74c3c',
    color: '#fff',
    fontSize: '10px',
    padding: '0.1rem',
    position: 'absolute',
    top: 0,
    left: '-1px',
  },
  '@media screen and (max-width: 600px)': {
    iconStyle: {
      width: theme.typography.pxToRem(30),
      height: theme.typography.pxToRem(30),
    },
    newText: {
      fontSize: '8px',
      padding: '0.1rem',
      left: 0,
    },
  },
}));

const GridListIcon = (props) => {
  const classes = useStyles();
  const { defaultView, onGridClick, onShareIconClick } = props;
  return (
    <div>
      <Tooltip arrow title="Share your watchlist">
        <IconButton
          className={classes.iconBtn}
          onClick={() => onShareIconClick()}
        >
          <ShareIcon className={classes.iconStyle} />
          <span className={classes.newText}>New</span>
        </IconButton>
      </Tooltip>
      <Tooltip title="Grid view">
        <IconButton
          className={classes.iconBtn}
          onClick={() => onGridClick(defaultView)}
        >
          <GridOn
            className={cls(classes.iconStyle, {
              [classes.activeIcon]: defaultView === 'grid',
            })}
          />
        </IconButton>
      </Tooltip>
      <Tooltip title="List view">
        <IconButton
          className={classes.iconBtn}
          onClick={() => onGridClick(defaultView)}
        >
          <FormatListBulletedIcon
            className={cls(classes.iconStyle, {
              [classes.activeIcon]: defaultView === 'list',
            })}
          />
        </IconButton>
      </Tooltip>
    </div>
  );
};

GridListIcon.propTypes = {
  defaultView: PropTypes.string.isRequired,
  onGridClick: PropTypes.func.isRequired,
  onShareIconClick: PropTypes.func.isRequired,
};

export default GridListIcon;
