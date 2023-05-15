import {Roboto} from "next/font/google";
import {createTheme} from "@mui/material/styles";

export const sharedThemeFontFamily = Roboto({
  weight: ['300', '400', '500', '700'],
  subsets: ['latin'],
  display: 'swap',
  fallback: ['Helvetica', 'Arial', 'sans-serif'],
});

// Create a theme instance.
export const sharedThemeDefaultDark = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#ffffff',
      dark: '#000000',
    },
    secondary: {
      main: '#0933F5',
      dark: '#ff0000',
    },
  },
  typography: {
    fontFamily: sharedThemeFontFamily.style.fontFamily,
  },
});


export const sharedThemeDefaultLight = createTheme({
  palette: {
    mode: "light"
  },
  typography: {
    fontFamily: sharedThemeFontFamily.style.fontFamily,
  },
});
