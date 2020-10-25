import React from 'react';
import PropTypes from 'prop-types';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import { makeStyles, Tooltip, Button } from '@material-ui/core/';
import cls from 'classnames';

const useStyles = makeStyles(() => ({
  headerContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    textAlign: 'center',
  },
  backIcon: {
    fontSize: '2rem',
    color: '#111',
    cursor: 'pointer',
  },
  '@media screen and (max-width: 600px)': {
    backIcon: {
      fontSize: '1.3rem',
    },
    hideButton: {
      display: 'none',
    },
  },
}));

const GoBack = (props) => {
  const classes = useStyles();
  const { toolTipTitle } = props;
  return (
    <div>
      <Tooltip title={toolTipTitle}>
        <Button>
          <ArrowBackIcon
            className={cls(classes.backIcon, classes.hideButton)}
          />
        </Button>
      </Tooltip>
    </div>
  );
};

GoBack.defaultProps = {
  toolTipTitle: 'Go Back',
};

GoBack.propTypes = {
  toolTipTitle: PropTypes.string,
};

export default GoBack;
