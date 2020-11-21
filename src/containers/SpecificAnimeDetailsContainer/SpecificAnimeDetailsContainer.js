import React from 'react';
import PropTypes from 'prop-types';
import Spinner from 'components/utilityComponents/SpinnerLoader';
import AnimeDetailsComponent from 'components/AnimeDetailsComponent/AnimeDetailsComponent';
import { useAnimeDetails } from 'custom-hooks/animeHook';

const SpecificAnimeDetailsContainer = (props) => {
  const { animeDetails, isAnimeDetailsLoading } = useAnimeDetails(
    props.match?.params?.mal_id,
  );
  return (
    <>
      {isAnimeDetailsLoading ? (
        <Spinner title="Loading the anime details. Please wait..." />
      ) : (
        <AnimeDetailsComponent {...animeDetails} />
      )}
    </>
  );
};

SpecificAnimeDetailsContainer.propTypes = {
  match: PropTypes.object.isRequired,
};

export default SpecificAnimeDetailsContainer;
