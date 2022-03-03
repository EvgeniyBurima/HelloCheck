import moment from 'moment';

const format = 'MMM DD, YYYY';
const formatWithhDayOfWeek = 'ddd, MMM DD, YYYY';

export const formatTimeUnix = (timestamp: number, dayOfWeek: boolean): string => moment.unix(timestamp).format(dayOfWeek ? formatWithhDayOfWeek : format);

export default {
  formatTimeUnix,
};
