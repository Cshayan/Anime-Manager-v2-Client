import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core';
import Lightbox from 'react-image-lightbox';
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
  const [isAnimeCoverOpen, setIsAnimeCoverOpen] = useState(false);
  const [animeCoverUrl, setAnimeCoverUrl] = useState(false);

  const handleAnimeCoverClick = (imageUrl) => {
    setAnimeCoverUrl(imageUrl);
    setIsAnimeCoverOpen(true);
  };

  return (
    <div className={classes.detailCont}>
      <AnimeBasicInfo
        title={props?.title}
        imageUrl={props?.images?.webp?.image_url}
        engTitle={props?.title_english}
        duration={props?.duration}
        genres={props?.genres}
        date={props?.aired?.string}
        handleAnimeCoverClick={handleAnimeCoverClick}
      />
      <div>
        <AnimeSynopsis
          synopsis={props?.synopsis}
          score={props?.score}
          status={props?.status}
          episodes={props?.episodes}
          trailerUrl={props?.trailer?.embed_url}
          popularity={props?.popularity}
          isAnimeAlreadyPresent={props?.isAnimeAlreadyPresent}
        />
        <AnimeReviews
          reviews={props?.reviews}
          handleReviewReadMoreClick={props?.handleReviewReadMoreClick}
          isReviewsLoading={props?.isAnimeReviewsLoading}
        />
      </div>
      {isAnimeCoverOpen && (
        <Lightbox
          mainSrc={animeCoverUrl}
          onCloseRequest={() => setIsAnimeCoverOpen(false)}
        />
      )}
    </div>
  );
};

export default AnimeDetailsComponent;
