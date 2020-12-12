/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React from 'react';
import PropTypes from 'prop-types';
import { Typography, makeStyles } from '@material-ui/core';
import Unnamed from 'assets/unnamed.jpg';
import { ReactComponent as CalendarIcon } from 'assets/calendar.svg';
import { ReactComponent as EpisodesIcon } from 'assets/episodes.svg';

const useStyles = makeStyles((theme) => ({
  title: {
    fontWeight: 'bold',
    color: theme.palette.text.primary,
    fontSize: theme.typography.pxToRem(32),
  },
  engTitle: {
    color: theme.palette.text.primary,
  },
  duration: {
    display: 'grid',
    gridTemplateColumns: '0.1fr 2fr',
  },
  durationText: {
    color: '#fff',
    fontSize: theme.typography.pxToRem(16),
    background: theme.badge.background2,
    padding: '0.5rem',
    borderRadius: '5px',
  },
  genres: {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gridGap: '0.5em',
  },
  genresText: {
    color: '#fff',
    fontSize: theme.typography.pxToRem(16),
    background: theme.badge.background,
    padding: '0.5rem',
    borderRadius: '5px',
  },
  durationCont: {
    display: 'grid',
    gridTemplateColumns: '1fr',
    gridGap: '0.5em',
    margin: '0.5rem 0',
  },
  icon: {
    width: theme.typography.pxToRem(40),
    height: theme.typography.pxToRem(40),
    margin: `0 ${theme.typography.pxToRem(5)}`,
  },
  '@media screen and (max-width:600px)': {
    mobileView: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
    },
    genres: {
      gridTemplateColumns: '1fr 1fr',
      gridGap: '0.5em',
    },
    basicInfoText: {
      padding: '0 1rem',
      marginTop: '1rem',
    },
  },
}));

const AnimeBasicInfo = (props) => {
  const classes = useStyles();
  const {
    title,
    imageUrl,
    engTitle,
    duration,
    genres,
    date,
    handleAnimeCoverClick,
  } = props;
  return (
    <div className={classes.mobileView}>
      <div onClick={() => handleAnimeCoverClick(imageUrl)}>
        <img
          src={imageUrl}
          alt="Anime Cover"
          style={{ width: '100%', height: '100%', cursor: 'pointer' }}
        ></img>
      </div>
      <div className={classes.basicInfoText}>
        <Typography variant="h5" noWrap className={classes.title}>
          {title}
        </Typography>
        <Typography variant="h6" className={classes.engTitle}>
          {engTitle}
        </Typography>
        <div className={classes.durationCont}>
          <div className={classes.duration}>
            <EpisodesIcon className={classes.icon} />
            <Typography className={classes.durationText}>{duration}</Typography>
          </div>
          <div className={classes.duration}>
            <CalendarIcon className={classes.icon} />
            <Typography className={classes.durationText}>{date}</Typography>
          </div>
        </div>
        <div className={classes.genres}>
          {genres.map((ele) => (
            <div key={ele.mal_id} className={classes.genresText}>
              {ele.name}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

AnimeBasicInfo.propTypes = {
  title: PropTypes.string,
  imageUrl: PropTypes.any,
  engTitle: PropTypes.string,
  duration: PropTypes.string,
  genres: PropTypes.array,
  date: PropTypes.string,
  handleAnimeCoverClick: PropTypes.func,
};

AnimeBasicInfo.defaultProps = {
  title: 'No title found',
  imageUrl: Unnamed,
  engTitle: 'No English title.',
  duration: 'No duration available.',
  genres: [],
  date: 'No date available',
  handleAnimeCoverClick: () => {},
};

export default AnimeBasicInfo;
