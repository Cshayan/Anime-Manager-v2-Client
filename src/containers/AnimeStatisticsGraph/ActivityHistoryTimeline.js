import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles, Typography } from '@material-ui/core';
import { Chrono } from 'react-chrono';
import { useActivityHistoryTimeLine } from 'custom-hooks/statsHook';

const useStyles = makeStyles((theme) => ({
  card: {
    background: theme.card.background,
    width: '100%',
    height: '430px',
    borderRadius: '5px',
    border: `1px solid ${theme.palette.primary.main}`,
    padding: '0 0 2.2rem 0',
  },
  timeLineTheme: {
    primary: 'red',
    secondary: 'blue',
    cardBgColor: 'yellow',
    cardForeColor: 'violet',
  },
  historyText: {
    color: theme.palette.text.primary,
    fontSize: theme.typography.pxToRem(24),
    padding: '0.6rem',
  },
}));

const ActivityHistoryTimeline = (props) => {
  const classes = useStyles();
  const { isDarkModeEnabled } = props;
  const { items = [], activityTheme = {} } = useActivityHistoryTimeLine(
    isDarkModeEnabled,
  );

  return (
    <div className={classes.card}>
      <Typography className={classes.historyText}>Recent Activities</Typography>
      {items.length > 0 && (
        <Chrono
          items={items}
          hideControls
          mode="VERTICAL_ALTERNATING"
          theme={activityTheme}
        />
      )}
    </div>
  );
};

ActivityHistoryTimeline.propTypes = {
  isDarkModeEnabled: PropTypes.bool.isRequired,
};

export default ActivityHistoryTimeline;
