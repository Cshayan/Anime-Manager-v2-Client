export const getScoreFormatter = (score) => {
  let newScore = 5;
  if (score) {
    newScore = score - 5;
  }

  return newScore;
};
