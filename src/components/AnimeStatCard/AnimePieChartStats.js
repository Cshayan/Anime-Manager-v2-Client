import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core';
import PieChart from 'components/HighCharts/PieChart';
import lightTheme, { darkTheme } from 'utils/theme';
import { useDarkMode } from 'custom-hooks/darkModeHook';

const useStyles = makeStyles((theme) => ({
  card: {
    background: theme.card.background,
    width: '100%',
    height: '100%',
    borderRadius: '5px',
    border: `1px solid ${theme.palette.primary.main}`,
  },
}));

const AnimePieChartStats = (props) => {
  const { total, watching, unwatched, completed, hold, dropped } = props;
  const [data, setData] = useState([]);
  const { isDarkModeEnabled } = useDarkMode();

  const titleStyle = {
    color: isDarkModeEnabled
      ? darkTheme.palette.text.primary
      : lightTheme.palette.text.primary,
  };

  const legendStyle = {
    color: isDarkModeEnabled
      ? darkTheme.palette.text.primary
      : lightTheme.palette.text.primary,
  };

  const prepareData = () => {
    setData([
      {
        name: 'Total',
        y: total,
        sliced: true,
        selected: true,
      },
      {
        name: 'Watching',
        y: watching,
        // color: '#2ecc71',
        color: {
          linearGradient: { x1: 0, x2: 0, y1: 0, y2: 1 },
          stops: [
            [0, '#2ecc71'],
            [1, '#55efc4'],
          ],
        },
      },
      {
        name: 'Unwatched',
        y: unwatched,
        // color: '#7f8c8d',
        color: {
          linearGradient: { x1: 0, x2: 0, y1: 0, y2: 1 },
          stops: [
            [0, '#7f8c8d'],
            [1, '#b2bec3'],
          ],
        },
      },
      {
        name: 'Completed',
        y: completed,
        color: {
          linearGradient: { x1: 0, x2: 0, y1: 0, y2: 1 },
          stops: [
            [0, '#0984e3'],
            [1, '#a29bfe'],
          ],
        },
      },
      {
        name: 'On hold',
        y: hold,
        color: {
          linearGradient: { x1: 0, x2: 0, y1: 0, y2: 1 },
          stops: [
            [0, '#ffeaa7'],
            [1, '#f1c40f'],
          ],
        },
      },
      {
        name: 'Dropped',
        y: dropped,
        color: {
          linearGradient: { x1: 0, x2: 0, y1: 0, y2: 1 },
          stops: [
            [0, '#d63031'],
            [1, '#ff7675'],
          ],
        },
      },
    ]);
  };

  useEffect(() => {
    prepareData();
  }, [total, watching, unwatched, completed, hold, dropped]);

  const classes = useStyles();
  return (
    <div className={classes.card}>
      <PieChart
        data={data}
        title="View stats of your watchlist"
        titleStyle={titleStyle}
        legendStyle={legendStyle}
      />
    </div>
  );
};

AnimePieChartStats.propTypes = {
  total: PropTypes.number,
  watching: PropTypes.number,
  unwatched: PropTypes.number,
  completed: PropTypes.number,
  hold: PropTypes.number,
  dropped: PropTypes.number,
};

AnimePieChartStats.defaultProps = {
  total: 0,
  watching: 0,
  unwatched: 0,
  completed: 0,
  hold: 0,
  dropped: 0,
};

export default AnimePieChartStats;
