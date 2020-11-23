const calRem = (size: number): string => `${size / 16}rem`;

const fontSize = {
  xs: calRem(12),
  sm: calRem(14),
  md: calRem(16),
  lg: calRem(18),
  xl: calRem(20),
};
const color = {
  black: '#000000',
  white: '#ffffff',
  blud: '#0000ff',
  red: '#ff0000',
  gray: '#e1e1e1',
  grean: '#20C997',
  gray2: '#e9ecef',
};

const theme = {
  fontSize,
  color,
};

export default theme;
