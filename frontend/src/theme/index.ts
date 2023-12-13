import { createTheme as createMuiTheme } from "@mui/material";
import { palette } from "./create_palette";

export const createTheme = () => {
  return createMuiTheme({
    breakpoints: {
      values: {
        xs: 0,
        sm: 600,
        md: 900,
        lg: 1280,
        xl: 1440,
      },
    },
    palette,
  });
}
