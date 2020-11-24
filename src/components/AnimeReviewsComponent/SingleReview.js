import React from 'react';
import PropTypes from 'prop-types';
import { Typography, makeStyles } from '@material-ui/core';
import { ReactComponent as LikeIcon } from 'assets/like.svg';

const useStyles = makeStyles((theme) => ({
  container: {
    marginTop: '0.8rem',
  },
  reviewTitle: {
    display: 'flex',
    alignItems: 'center',
  },
  reviewerImage: {
    width: theme.typography.pxToRem(50),
    height: theme.typography.pxToRem(50),
    margin: '0 5px',
    borderRadius: '50%',
  },
  reviewerName: {
    color: theme.palette.primary.main,
    fontSize: theme.typography.pxToRem(20),
    margin: '0 5px',
    fontWeight: 'bold',
  },
  overallScore: {
    color: '#fff',
    fontSize: theme.typography.pxToRem(16),
    background: theme.badge.background,
    padding: '0.5rem',
    borderRadius: '5px',
  },
  reviewContent: {
    fontSize: theme.typography.pxToRem(20),
    color: theme.palette.text.primary,
  },
  bottomContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  scoresContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  scoresText: {
    color: '#fff',
    fontSize: theme.typography.pxToRem(16),
    background: theme.badge.background2,
    padding: '0.3rem 0.5rem',
    borderRadius: '5px',
    margin: '0 3px',
  },
  readMoreBtn: {
    background: 'transparent',
    outline: 'none',
    border: 'none',
    color: '#5DAAE0',
    cursor: 'pointer',
  },
  likeContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  likeText: {
    fontSize: theme.typography.pxToRem(20),
    fontWeight: 'bold',
    color: theme.palette.primary.main,
  },
}));

const SingleReview = (props) => {
  const {
    reviewerImage,
    helpfulCount,
    reviewerName,
    reviewContent,
    overallScore,
    storyScore,
    animationScore,
    soundScore,
    characterScore,
    enjoymentScore,
    reviewUrl,
    handleReviewReadMoreClick,
  } = props;
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <div className={classes.reviewTitle}>
        <img
          src={reviewerImage}
          alt="Reviewer"
          className={classes.reviewerImage}
        />
        <Typography className={classes.reviewerName}>
          {reviewerName} |{' '}
        </Typography>
        <div className={classes.overallScore}>
          Overall Score - {overallScore}
        </div>
      </div>
      <div>
        <Typography className={classes.reviewContent}>
          {`${reviewContent.slice(0, 800)}...`}
          <button
            className={classes.readMoreBtn}
            onClick={() => handleReviewReadMoreClick(reviewUrl)}
          >
            Read more
          </button>
        </Typography>
      </div>
      <div className={classes.bottomContainer}>
        <div className={classes.scoresContainer}>
          <Typography className={classes.scoresText}>
            Story - {storyScore}
          </Typography>
          <Typography className={classes.scoresText}>
            Animation - {animationScore}
          </Typography>
          <Typography className={classes.scoresText}>
            Sound - {soundScore}
          </Typography>
          <Typography className={classes.scoresText}>
            Character - {characterScore}
          </Typography>
          <Typography className={classes.scoresText}>
            Enjoyment - {enjoymentScore}
          </Typography>
        </div>
        <div className={classes.likeContainer}>
          <LikeIcon className={classes.reviewerImage} />
          <Typography className={classes.likeText}>{helpfulCount}</Typography>
        </div>
      </div>
    </div>
  );
};

export default SingleReview;
