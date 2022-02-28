import moment from 'moment';

const format = 'ddd, MMM MM, YYYY';

export const formatTimeUnix = (str: number): string => {
  const m = moment(str);
  return m.format(format);
};

export default {
  formatTimeUnix,
};
