import React from 'react';
import PropTypes from 'prop-types';
import Spinner from 'components/utilityComponents/SpinnerLoader';
import AnimeDetailsComponent from 'components/AnimeDetailsComponent/AnimeDetailsComponent';
import { useAnimeDetails, useAnimeReviews } from 'custom-hooks/animeHook';

const SpecificAnimeDetailsContainer = (props) => {
  const { animeDetails, isAnimeDetailsLoading, isAnimeAlreadyPresent } =
    useAnimeDetails(props.match?.params?.mal_id);
  const { isAnimeReviewsLoading, animeReviews, handleReviewReadMoreClick } =
    useAnimeReviews(props.match?.params?.mal_id);

  return (
    <>
      {isAnimeDetailsLoading ? (
        <Spinner title="Loading the anime details. Please wait..." />
      ) : (
        <AnimeDetailsComponent
          {...animeDetails}
          isAnimeAlreadyPresent={isAnimeAlreadyPresent}
          isAnimeReviewsLoading={isAnimeReviewsLoading}
          reviews={animeReviews}
          handleReviewReadMoreClick={handleReviewReadMoreClick}
        />
      )}
    </>
  );
};

SpecificAnimeDetailsContainer.propTypes = {
  match: PropTypes.object.isRequired,
};

export default SpecificAnimeDetailsContainer;
