import React from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import { makeStyles, Tooltip, Button, Typography } from '@material-ui/core/';
import cls from 'classnames';

const useStyles = makeStyles((theme) => ({
  headerContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    textAlign: 'center',
  },
  backIcon: {
    fontSize: '2rem',
    cursor: 'pointer',
    color: theme.palette.text.primary,
  },
  iconTextStyle: {
    color: theme.palette.primary.main,
    fontSize: theme.typography.pxToRem(22),
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
  const { toolTipTitle, iconText } = props;
  const history = useHistory();

  const onGoBackClick = () => {
    history.goBack();
  };

  return (
    <div>
      <Tooltip title={toolTipTitle}>
        <Button onClick={() => onGoBackClick()}>
          <ArrowBackIcon
            className={cls(classes.backIcon, classes.hideButton)}
          />
          {iconText && (
            <Typography className={classes.iconTextStyle}>
              {iconText}
            </Typography>
          )}
        </Button>
      </Tooltip>
    </div>
  );
};

GoBack.defaultProps = {
  toolTipTitle: 'Go Back',
  iconText: '',
};

GoBack.propTypes = {
  toolTipTitle: PropTypes.string,
  iconText: PropTypes.string,
};

export default GoBack;
