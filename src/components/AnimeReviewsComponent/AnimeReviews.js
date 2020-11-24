import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Typography, makeStyles } from '@material-ui/core';
import SingleReview from './SingleReview';

const useStyles = makeStyles((theme) => ({
  reviewsContainer: {
    padding: '0 1rem',
  },
  reviewHeading: {
    background: theme.badge.background,
    color: '#fff',
    fontSize: theme.typography.pxToRem(30),
    padding: '0.2rem',
    borderRadius: '5px',
  },
  loadMoreBtnCont: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  loadMoreBtn: {
    background: theme.button.delete.background,
    fontSize: theme.typography.pxToRem(18),
    margin: '1rem',
    border: 'none',
    outline: 'none',
    padding: '0.5rem 0.7rem',
    color: '#fff',
    borderRadius: '5px',
    cursor: 'pointer',
    '&:hover': {
      opacity: '0.8',
    },
    '&:disabled': {
      background: theme.button.delete.background,
      cursor: 'no-drop',
    },
  },
  loaderCont: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  noReviewsText: {
    color: theme.palette.text.primary,
    fontSize: theme.typography.pxToRem(22),
    marginTop: '1rem',
  },
}));

const AnimeReviews = (props) => {
  const { reviews, handleReviewReadMoreClick, isReviewsLoading } = props;
  const classes = useStyles();
  const [reviewsToShow, setReviewsToShow] = useState(3);
  const [isMoreReviewsLoading, setIsMoreReviewsLoading] = useState(false);

  const onMoreReviewClick = () => {
    setIsMoreReviewsLoading(true);
    setTimeout(() => {
      setReviewsToShow(reviewsToShow + 3);
      setIsMoreReviewsLoading(false);
    }, 2000);
  };

  const onLessReviewClick = () => {
    setReviewsToShow(3);
  };

  if (reviews?.length === 0 && !isReviewsLoading) {
    return (
      <div className={classes.reviewsContainer}>
        <div>
          <Typography className={classes.reviewHeading}>Reviews</Typography>
        </div>
        <div className={classes.loaderCont}>
          <Typography className={classes.noReviewsText}>
            No reviews found for this anime.
          </Typography>
        </div>
      </div>
    );
  }

  return (
    <div className={classes.reviewsContainer}>
      <div>
        <Typography className={classes.reviewHeading}>Reviews</Typography>
      </div>
      {isReviewsLoading ? (
        <div className={classes.loaderCont}>
          <i
            className="fa fa-spinner fa-spin"
            style={{ color: '#5DAAE0', fontSize: '24px', marginTop: '1rem' }}
          ></i>
        </div>
      ) : (
        reviews
          ?.slice(0, reviewsToShow)
          ?.map((review) => (
            <SingleReview
              key={review.mal_id}
              helpfulCount={review.helpful_count}
              reviewerImage={review.reviewer.image_url}
              reviewerName={review.reviewer.username}
              reviewContent={review.content}
              overallScore={review.reviewer.scores.overall}
              storyScore={review.reviewer.scores.story}
              animationScore={review.reviewer.scores.animation}
              soundScore={review.reviewer.scores.sound}
              characterScore={review.reviewer.scores.character}
              enjoymentScore={review.reviewer.scores.enjoyment}
              reviewUrl={review.url}
              handleReviewReadMoreClick={handleReviewReadMoreClick}
            />
          ))
      )}
      {!isReviewsLoading && (
        <div className={classes.loadMoreBtnCont}>
          {reviewsToShow >= reviews?.length ? (
            <button
              className={classes.loadMoreBtn}
              onClick={() => onLessReviewClick()}
            >
              Show less reviews
            </button>
          ) : (
            <button
              className={classes.loadMoreBtn}
              onClick={() => onMoreReviewClick()}
              disabled={isMoreReviewsLoading}
            >
              {isMoreReviewsLoading ? (
                <i
                  className="fa fa-spinner fa-spin"
                  style={{ color: '#fff', fontSize: '20px' }}
                ></i>
              ) : (
                'Show more reviews'
              )}
            </button>
          )}
        </div>
      )}
    </div>
  );
};

AnimeReviews.propTypes = {
  reviews: PropTypes.array,
  handleReviewReadMoreClick: PropTypes.func,
  isReviewsLoading: PropTypes.bool,
};

AnimeReviews.defaultProps = {
  reviews: [],
  handleReviewReadMoreClick: () => {},
  isReviewsLoading: false,
};

export default AnimeReviews;
