export const capitalize = (str: string) => `${str[0].toUpperCase()}${str.slice(1)}`;

const cFormatter = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
  minimumFractionDigits: 2,
  maximumFractionDigits: 2,
});

export const currencyFormatter = (val: number) => cFormatter.format(val);

export default {
  capitalize,
};
