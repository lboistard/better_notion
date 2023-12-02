import { alpha } from "@mui/material";

type Color = {
  [main: string]: string;
}

const withAlphas = (color: Color = {}) => {
  return {
    ...color,
    alpha4: alpha(color.main, 0.04),
    alpha8: alpha(color.main, 0.08),
    alpha12: alpha(color.main, 0.12),
    alpha30: alpha(color.main, 0.30),
    alpha50: alpha(color.main, 0.50)
  };
};

export const grey = {
  1: '#F5FFFC',
  2: '#C6C3CD',
  3: '#9896A3',
  4: '#82808F',
  5: '#56555C',
};

export const primary = withAlphas({
  main: '#5577FF',
});

export const secondary = withAlphas({
  main: '#7B68EE',
});

export const info = withAlphas({
  main: '#49CCF9',
});

export const success = withAlphas({
  main: '#00B884',
});

export const warning = withAlphas({
  main: '#FFC800',
});

export const danger = withAlphas({
  main: '#FD71AF',
});

