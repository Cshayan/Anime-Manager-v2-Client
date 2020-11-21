import React from 'react';
import { makeStyles } from '@material-ui/core';
import AnimeBasicInfo from './AnimeBasicInfo';
import AnimeSynopsis from './AnimeSynopsis';
import AnimeTrailerStat from './AnimeTrailerStat';

const useStyles = makeStyles((theme) => ({
  detailCont: {
    display: 'grid',
    gridTemplateColumns: '0.8fr 1.5fr 1fr',
    gridGap: '1rem',
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
      <AnimeSynopsis synopsis={props?.synopsis} score={props?.score} />
      <AnimeTrailerStat
        trailerUrl={props?.trailer_url}
        status={props?.status}
      />
    </div>
  );
};

export default AnimeDetailsComponent;
