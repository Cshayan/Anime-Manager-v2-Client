/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React from 'react';
import {
  makeStyles,
  Tooltip,
  Typography,
  IconButton,
} from '@material-ui/core/';
import cls from 'classnames';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';
import StarRatings from 'react-star-ratings';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import { ReactComponent as PlusIcon } from 'assets/plus.svg';

const useStyles = makeStyles((theme) => ({
  animeList: {
    background: theme.card.background,
    cursor: 'pointer',
    width: '100%',
    height: '7rem',
    display: 'flex',
    borderRadius: '5px',
    border: `1px solid ${theme.palette.primary.main}`,
    boxShadow: '5px 5px 10px rgba(0, 0, 0, 0.5)',
    '&:hover': {
      transform: 'scale(1.002)',
      transition: 'all 0.4s',
    },
  },
  imgContainer: {
    width: '10%',
    height: '100%',
    overflow: 'hidden',
  },
  img: {
    width: '100%',
    height: '100%',
  },
  infoContainer: {
    width: '90%',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  infoContainerContent: {
    padding: theme.typography.pxToRem(15),
    width: '100%',
  },
  title: {
    fontSize: theme.typography.pxToRem(26),
    color: theme.palette.primary.main,
    letterSpacing: '0.1rem',
    fontWeight: '700',
  },
  scoreAiringCont: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: theme.typography.pxToRem(10),
  },
  episodesText: {
    fontSize: theme.typography.pxToRem(22),
    color: theme.palette.text.primary,
    marginTop: theme.typography.pxToRem(5),
  },
  icon: {
    width: theme.typography.pxToRem(40),
    height: theme.typography.pxToRem(40),
  },
  deleteIcon: {
    color: '#e74c3c',
    margin: `0 ${theme.typography.pxToRem(5)}`,
  },
  plusIcon: {
    width: theme.typography.pxToRem(25),
    height: theme.typography.pxToRem(25),
    margin: `0 ${theme.typography.pxToRem(5)}`,
  },
  btnContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: `0 ${theme.typography.pxToRem(10)}`,
  },
  iconBtn: {
    padding: 0,
  },
  '@media screen and (max-width: 600px)': {
    title: {
      fontSize: theme.typography.pxToRem(20),
    },
    episodesText: {
      fontSize: theme.typography.pxToRem(16),
    },
    imgContainer: {
      width: '20%',
      height: '100%',
      overflow: 'hidden',
    },
    infoContainer: {
      width: '80%',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
  },
}));

const AnimeWatchListViewCard = (props) => {
  const classes = useStyles();
  const {
    animeId,
    animeData: { title, url, imageUrl, type, episodes, score, rated },
    onDeleteClick,
    onStatusClick,
    status,
    malId,
    isAnimeDeletingFromWatchlist,
  } = props;

  const history = useHistory();

  const onCardClick = (id) => {
    history.push(`/anime/${id}`);
  };

  return (
    <div className={classes.animeList}>
      <div className={classes.imgContainer} onClick={() => onCardClick(malId)}>
        <img src={imageUrl} className={classes.img} alt="anime-cover" />
      </div>
      <div className={classes.infoContainer}>
        <div className={classes.infoContainerContent}>
          <Typography noWrap className={classes.title}>
            {title}
          </Typography>
          <div className={classes.scoreAiringCont}>
            <StarRatings
              starRatedColor="#f1c40f"
              rating={score}
              numberOfStars={5}
              starDimension="20px"
              starSpacing="2px"
            />
          </div>
          <Typography className={classes.episodesText}>
            Episodes: {episodes}
          </Typography>
        </div>
        <div className={classes.btnContainer}>
          <Tooltip title="Find more details">
            <IconButton
              className={classes.iconBtn}
              onClick={() => onCardClick(malId)}
            >
              <PlusIcon className={classes.plusIcon} />
            </IconButton>
          </Tooltip>
          <Tooltip title="Delete from Watchlist">
            <IconButton
              className={classes.iconBtn}
              onClick={() => onDeleteClick(animeId)}
            >
              <DeleteForeverIcon
                className={cls(classes.icon, classes.deleteIcon)}
              />
            </IconButton>
          </Tooltip>
        </div>
      </div>
    </div>
  );
};

AnimeWatchListViewCard.propTypes = {
  animeId: PropTypes.string.isRequired,
  title: PropTypes.string,
  url: PropTypes.string,
  imageUrl: PropTypes.string,
  type: PropTypes.string,
  episodes: PropTypes.number,
  score: PropTypes.number,
  malId: PropTypes.string,
  rated: PropTypes.string,
  onDeleteClick: PropTypes.func,
  onStatusClick: PropTypes.func,
  animeData: PropTypes.object,
  status: PropTypes.string,
  isAnimeDeletingFromWatchlist: PropTypes.bool,
};

AnimeWatchListViewCard.defaultProps = {
  title: 'No title.',
  url: '',
  malId: '',
  imageUrl: '',
  type: '---',
  episodes: 0,
  score: 0.0,
  rated: '?',
  onDeleteClick: () => {},
  onStatusClick: () => {},
  animeData: {},
  status: 'Unknown',
  isAnimeDeletingFromWatchlist: false,
};

export default AnimeWatchListViewCard;
