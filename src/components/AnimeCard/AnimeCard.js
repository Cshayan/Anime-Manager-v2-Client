import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles, Tooltip, Typography } from '@material-ui/core/';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import cls from 'classnames';
import StarRatings from 'react-star-ratings';
import { ReactComponent as LoveIcon } from 'assets/love.svg';
import { ReactComponent as ToIcon } from 'assets/to.svg';
import MAL from 'assets/mal.png';
import './styles.css';

const useStyles = makeStyles((theme) => ({
  imgContainer: {
    width: '40%',
    height: '100%',
    overflow: 'hidden',
  },
  img: {
    width: '100%',
    height: '100%',
  },
  infoContainer: {
    width: '60%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  infoContainerContent: {
    padding: theme.typography.pxToRem(15),
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
  scoreBad: {
    color: '#cf000f',
    fontSize: '2rem',
  },
  scoreGood: {
    color: '#009944',
    fontSize: '2rem',
  },
  airingBox: {
    padding: '10px',
    borderRadius: '5px',
  },
  ongoing: {
    background: theme.palette.background.default,
    color: '#16a085',
    border: '1px dashed #16a085',
  },
  notongoing: {
    background: theme.palette.background.default,
    color: '#f39c12',
    border: '1px dashed #f39c12',
  },
  addToWatchlist: {
    width: '100%',
    border: 'none',
    outline: 'none',
    background: theme.button.background.light,
    color: '#fff',
    padding: '12px 7px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    cursor: 'pointer',
    '&:hover': {
      opacity: '0.9',
    },
  },
  dateContainer: {
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
    marginTop: theme.typography.pxToRem(25),
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
  to: {
    border: `1px solid ${theme.palette.primary.main}`,
    color: theme.palette.primary.main,
    background: theme.palette.background.default,
    padding: '5px',
    borderRadius: '50%',
  },
  toIcon: {
    width: theme.typography.pxToRem(30),
    height: theme.typography.pxToRem(30),
  },
  otherInfoCont: {
    marginTop: theme.typography.pxToRem(25),
    display: 'flex',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  episodesText: {
    fontSize: theme.typography.pxToRem(16),
  },
  episodes: {
    color: theme.palette.text.primary,
  },
  type: {
    color: '#fff',
    background: theme.button.background.light,
    padding: '5px',
    borderRadius: '5px',
  },
  rated: {
    color: '#cf000f',
    background: theme.palette.background.default,
    padding: '5px',
    borderRadius: '5px',
    border: '1px dashed #cf000f',
  },
  ongoingVal: {
    fontSize: '24px',
  },
  ongoingText: {
    fontSize: '14px',
  },
  animeCard: {
    background: theme.card.background,
    cursor: 'pointer',
    width: '100%',
    height: '100%',
    display: 'flex',
    borderRadius: '5px',
    border: `1px solid ${theme.palette.primary.main}`,
    boxShadow: '5px 5px 10px rgba(0, 0, 0, 0.5)',
    '&:hover': {
      transform: 'scale(1.02)',
      transition: 'all 0.4s',
    },
  },
  membersCont: {
    display: 'flex',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    margin: `${theme.typography.pxToRem(25)} 0`,
  },
  memberInner: {
    display: 'flex',
    alignItems: 'center',
  },
  love: {
    width: theme.typography.pxToRem(30),
    height: theme.typography.pxToRem(30),
    margin: `0 ${theme.typography.pxToRem(10)}`,
  },
  members: {
    color: theme.palette.primary.main,
    fontSize: theme.typography.pxToRem(20),
  },
  mal: {
    width: theme.typography.pxToRem(30),
    height: theme.typography.pxToRem(30),
  },
  '@media screen and (max-width: 600px)': {
    scoreBad: {
      fontSize: '1.5rem',
    },
    scoreGood: {
      fontSize: '1.5rem',
    },
    airingBox: {
      padding: '5px',
    },
    ongoingVal: {
      fontSize: '18px',
    },
    ongoingText: {
      fontSize: '8px',
    },
    dateContent: {
      padding: '5px',
    },
    addToWatchlist: {
      padding: '7px',
    },
    type: {
      padding: '2px',
      fontSize: theme.typography.pxToRem(16),
    },
    rated: {
      padding: '2px',
      fontSize: theme.typography.pxToRem(16),
    },
  },
}));

const AnimeCard = (props) => {
  const classes = useStyles();
  const {
    id,
    title,
    url,
    imageUrl,
    type,
    episodes,
    score,
    startDate,
    endDate,
    ongoing,
    rated,
    members,
    onAddClick,
  } = props;
  return (
    <div className={classes.animeCard}>
      <div className={classes.imgContainer}>
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
            <div
              className={cls(classes.airingBox, {
                [classes.ongoing]: ongoing === 'Yes',
                [classes.notongoing]: ongoing === 'No',
              })}
            >
              <div className={classes.ongoingText}>Ongoing: </div>
              <Typography className={classes.ongoingVal}>{ongoing}</Typography>
            </div>
          </div>
          <div className={classes.dateContainer}>
            <div className={classes.dateContent}>
              <Typography className={classes.startDate}>{startDate}</Typography>
            </div>
            <ToIcon className={classes.toIcon} />
            <div className={classes.dateContent}>
              <Typography className={classes.endDate}>{endDate}</Typography>
            </div>
          </div>
          <div className={classes.otherInfoCont}>
            <div className={classes.type}>{type}</div>
            <div className={classes.episodes}>
              <span className={classes.episodesText}>Episodes:</span> {episodes}
            </div>
            <div className={classes.rated}>{rated}</div>
          </div>
          <div className={classes.membersCont}>
            <div className={classes.memberInner}>
              <LoveIcon className={classes.love} />
              <Tooltip title="Members">
                <Typography className={classes.members}>{members}</Typography>
              </Tooltip>
            </div>
            <Tooltip title="View in MAL">
              <a href={url} target="_blank" rel="noopener noreferrer">
                <img src={MAL} className={classes.mal} alt="mal" />
              </a>
            </Tooltip>
          </div>
        </div>
        <button
          className={classes.addToWatchlist}
          onClick={() =>
            onAddClick({
              mal_id: id,
              title,
              url,
              imageUrl,
              type,
              episodes,
              score,
              startDate,
              endDate,
              ongoing,
              rated,
              members,
            })
          }
        >
          {' '}
          <AddCircleIcon /> Add to Watchlist
        </button>
      </div>
    </div>
  );
};

AnimeCard.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string,
  url: PropTypes.string,
  imageUrl: PropTypes.string,
  type: PropTypes.string,
  episodes: PropTypes.number,
  score: PropTypes.number,
  startDate: PropTypes.any,
  endDate: PropTypes.any,
  ongoing: PropTypes.string,
  rated: PropTypes.string,
  members: PropTypes.number,
  onAddClick: PropTypes.func,
};

AnimeCard.defaultProps = {
  title: 'No title.',
  url: '',
  imageUrl: '',
  type: '---',
  episodes: 0,
  score: 0.0,
  startDate: 'NA',
  endDate: '?',
  ongoing: 'NA',
  rated: '?',
  members: 0,
  onAddClick: () => {},
};

export default AnimeCard;
