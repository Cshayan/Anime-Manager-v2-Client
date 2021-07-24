import moment from 'moment';

export const getCurrentYear = () => moment().year();

export const getCurrentMonth = () => moment().format('MMMM');

export const getCurrentSeason = () => {
  let currentSeason = '';
  switch (getCurrentMonth()) {
    case 'January':
    case 'February':
    case 'March':
      currentSeason = 'winter';
      return currentSeason;
    case 'April':
    case 'May':
    case 'June':
      currentSeason = 'spring';
      return currentSeason;
    case 'July':
    case 'August':
    case 'September':
      currentSeason = 'summer';
      return currentSeason;
    case 'October':
    case 'November':
    case 'December':
      currentSeason = 'fall';
      return currentSeason;
    default:
      currentSeason = 'fall';
      return currentSeason;
  }
};
