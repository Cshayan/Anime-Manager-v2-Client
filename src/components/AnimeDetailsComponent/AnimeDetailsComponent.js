import React from 'react';
import { makeStyles } from '@material-ui/core';
import AnimeReviews from 'components/AnimeReviewsComponent/AnimeReviews';
import AnimeBasicInfo from './AnimeBasicInfo';
import AnimeSynopsis from './AnimeSynopsis';

const useStyles = makeStyles((theme) => ({
  detailCont: {
    display: 'grid',
    gridTemplateColumns: '0.7fr 2fr',
  },
  '@media screen and (max-width:600px)': {
    detailCont: {
      gridTemplateColumns: '1fr',
    },
  },
}));

const AnimeDetailsComponent = (props) => {
  const classes = useStyles();
  return (
    <div className={classes.detailCont}>
      <AnimeBasicInfo
        title={props?.title}
        imageUrl={props?.image_url}
        engTitle={props?.title_english}
        duration={props?.duration}
        genres={props?.genres}
        date={props?.aired?.string}
      />
      <div>
        <AnimeSynopsis
          synopsis={props?.synopsis}
          score={props?.score}
          status={props?.status}
          episodes={props?.episodes}
          trailerUrl={props?.trailer_url}
          popularity={props?.popularity}
        />
        <AnimeReviews
          reviews={props?.reviews}
          handleReviewReadMoreClick={props?.handleReviewReadMoreClick}
          isReviewsLoading={props?.isAnimeReviewsLoading}
        />
      </div>
    </div>
  );
};

export default AnimeDetailsComponent;
