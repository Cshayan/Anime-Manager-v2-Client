/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';
import moment from 'moment';
import { makeStyles, Typography } from '@material-ui/core';
import StarRatings from 'react-star-ratings';
import { ReactComponent as ToIcon } from 'assets/to.svg';

const useStyles = makeStyles((theme) => ({
  animeCard: {
    background: theme.card.background,
    cursor: 'pointer',
    width: '80%',
    height: '90%',
    display: 'flex',
    borderRadius: '5px',
    border: `1px solid ${theme.palette.primary.main}`,
    boxShadow: '5px 5px 10px rgba(0, 0, 0, 0.5)',
    flexDirection: 'column',
    overflow: 'hidden',
  },
  img: {
    width: '100%',
    height: '60%',
  },
  title: {
    fontSize: theme.typography.pxToRem(26),
    color: theme.palette.primary.main,
    letterSpacing: '0.1rem',
    fontWeight: '700',
  },
  infoContainer: {
    padding: '1rem',
  },
  episodesText: {
    fontSize: theme.typography.pxToRem(16),
  },
  episodes: {
    color: theme.palette.text.primary,
  },
  dateContainer: {
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
    marginTop: theme.typography.pxToRem(5),
  },
  startDate: {
    fontSize: theme.typography.pxToRem(16),
  },
  endDate: {
    fontSize: theme.typography.pxToRem(16),
  },
  dateContent: {
    border: `1px dashed ${theme.palette.primary.main}`,
    color: theme.palette.primary.main,
    background: theme.palette.background.default,
    padding: '5px 10px',
    borderRadius: '5px',
  },
  toIcon: {
    width: theme.typography.pxToRem(30),
    height: theme.typography.pxToRem(30),
  },
}));

const AnimeCard = ({
  title = '',
  episodes = '',
  airing_start: startDate = '?',
  end_date: endDate = '?',
  mal_id = '',
  image_url: imgURL = '',
  score = 0,
}) => {
  const classes = useStyles();

  const history = useHistory();

  const onCardClick = (id) => {
    history.push(`/anime/${id}`);
  };

  return (
    <div className={classes.animeCard} onClick={() => onCardClick(mal_id)}>
      <img src={imgURL} className={classes.img} alt="anime-cover" />
      <div className={classes.infoContainer}>
        <Typography noWrap className={classes.title}>
          {title}
        </Typography>
        <div className={classes.episodes}>
          <span className={classes.episodesText}>Episodes:</span>{' '}
          {episodes ?? '---'}
        </div>
        <StarRatings
          starRatedColor="#f1c40f"
          rating={score - 5}
          numberOfStars={5}
          starDimension="20px"
          starSpacing="2px"
        />
        <div className={classes.dateContainer}>
          <div className={classes.dateContent}>
            <Typography className={classes.startDate}>
              {moment(startDate).format('MMM YYYY')}
            </Typography>
          </div>
          <ToIcon className={classes.toIcon} />
          <div className={classes.dateContent}>
            <Typography className={classes.endDate}>
              {endDate ?? '?'}
            </Typography>
          </div>
        </div>
      </div>
    </div>
  );
};

AnimeCard.propTypes = {
  title: PropTypes.string.isRequired,
  episodes: PropTypes.number.isRequired,
  image_url: PropTypes.string.isRequired,
  end_date: PropTypes.string.isRequired,
  airing_start: PropTypes.string.isRequired,
  mal_id: PropTypes.string.isRequired,
  score: PropTypes.number.isRequired,
};

export default AnimeCard;
