import React from 'react';
import PropTypes from 'prop-types';
import { Typography, makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  title: {
    fontWeight: 'bold',
    color: theme.palette.text.primary,
    fontSize: theme.typography.pxToRem(32),
  },
  engTitle: {
    color: theme.palette.text.primary,
  },
  duration: {},
  durationText: {
    color: '#fff',
    fontSize: theme.typography.pxToRem(16),
    background: 'linear-gradient(to right, #667db6, #0082c8, #0082c8, #667db6)',
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
    gridTemplateColumns: '1fr 2fr',
    gridGap: '0.5em',
    margin: '0.5rem 0',
  },
}));

const AnimeBasicInfo = (props) => {
  const classes = useStyles();
  const { title, imageUrl, engTitle, duration, genres, date } = props;
  return (
    <div>
      <img src={imageUrl} alt="Anime Cover" style={{ width: '100%' }}></img>
      <Typography variant="h5" noWrap className={classes.title}>
        {title}
      </Typography>
      <Typography variant="h6" className={classes.engTitle}>
        {engTitle}
      </Typography>
      <div className={classes.durationCont}>
        <div className={classes.duration}>
          <Typography className={classes.durationText}>{duration}</Typography>
        </div>
        <div className={classes.duration}>
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
  );
};

AnimeBasicInfo.propTypes = {
  title: PropTypes.string,
  imageUrl: PropTypes.string,
  engTitle: PropTypes.string,
  duration: PropTypes.string,
  genres: PropTypes.array,
  date: PropTypes.string,
};

AnimeBasicInfo.defaultProps = {
  title: 'No title found',
  imageUrl: '',
  engTitle: 'No English title.',
  duration: 'No duration available.',
  genres: [],
  date: 'No date available',
};

export default AnimeBasicInfo;
