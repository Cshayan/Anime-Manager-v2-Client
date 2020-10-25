/* eslint-disable consistent-return */
const getMonthName = (monthNumber) => {
  switch (monthNumber) {
    case 1:
      return 'Jan';
    case 2:
      return 'Feb';
    case 3:
      return 'Mar';
    case 4:
      return 'Apr';
    case 5:
      return 'May';
    case 6:
      return 'June';
    case 7:
      return 'July';
    case 8:
      return 'Aug';
    case 9:
      return 'Sep';
    case 10:
      return 'Oct';
    case 11:
      return 'Nov';
    case 12:
      return 'Dec';
    default:
      return 'NA';
  }
};

export const dateFormatterInString = (date) => {
  if (date) {
    const dateCopy = new Date(date);
    const day = dateCopy.getDay();
    const month = getMonthName(dateCopy.getMonth() + 1);
    const year = dateCopy.getFullYear();
    return `${day} ${month} ${year}`;
  }
};
