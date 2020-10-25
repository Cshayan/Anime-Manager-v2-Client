import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles, Typography, Grid } from '@material-ui/core/';
import AnimeCard from '../../components/AnimeCard/AnimeCard';
import { useGlobalSearchAnime } from '../../custom-hooks/globalAnimeSearchHook';
import { useAnime } from '../../custom-hooks/animeHook';
import { dateFormatterInString } from '../../utils/dateFormatter';
import { getScoreFormatter } from '../../utils/scoreFormatter';

const useStyles = makeStyles((theme) => ({
  animeText: {
    fontSize: '1.5rem',
    letterSpacing: '0.1rem',
    color: theme.palette.primary.main,
    marginBottom: '10px',
  },
  searchlistContainer: {
    padding: theme.typography.pxToRem(20),
    display: 'flex',
    flexDirection: 'column',
    overflowX: 'hidden',
    overflowY: 'auto',
    width: '100%',
    height: '100%',
  },
  '@media screen and (max-width: 600px)': {
    animeText: {
      fontSize: '0.8rem',
    },
  },
}));

const AnimeGlobalSearchListContainer = (props) => {
  const { animeSearchResults } = props;
  const classes = useStyles();
  const { animeText } = useGlobalSearchAnime();
  const { handleAnimeAddToWatchlistClick } = useAnime();

  return (
    <div className={classes.searchlistContainer}>
      {animeText.length !== 0 && (
        <Typography className={classes.animeText}>
          Search results for "{animeText}"
        </Typography>
      )}
      <Grid container spacing={4}>
        {animeSearchResults &&
          animeSearchResults.map((anime) => (
            <Grid item xs={12} md={6} lg={6} key={anime.mal_id}>
              <AnimeCard
                id={anime.mal_id}
                title={anime.title}
                url={anime.url}
                imageUrl={anime.image_url}
                type={anime.type}
                episodes={anime.episodes}
                score={getScoreFormatter(anime.score)}
                startDate={dateFormatterInString(anime.start_date)}
                endDate={dateFormatterInString(anime.end_date)}
                ongoing={anime.airing ? 'Yes' : 'No'}
                rated={anime.rated}
                members={anime.members}
                onAddClick={handleAnimeAddToWatchlistClick}
              />
            </Grid>
          ))}
      </Grid>
    </div>
  );
};

AnimeGlobalSearchListContainer.propTypes = {
  animeSearchResults: PropTypes.array,
};

AnimeGlobalSearchListContainer.defaultProps = {
  animeSearchResults: [],
};

export default AnimeGlobalSearchListContainer;
