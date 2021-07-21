import { createTheme } from '@material-ui/core/styles';
import vars from './vars';

// A custom theme for this app
const theme = createTheme({
  palette: {
    primary: {
      main: vars.grayBlue2,
    },
    secondary: {
      main: vars.grayBlue3,
    },
    background: {
      default: vars.white,
    },
    text: {
      primary: vars.grayBlue3,
      secondary: vars.grayBlue1,
    }
  },
  typography: {
    fontFamily: ['Segoe UI', 'sans-serif', 'Roboto'],
    h4: {
      fontSize: "32px",
      fontWeight: "normal"
    },
    h5: {
      fontSize: "28px",
      fontWeight: "normal"
    },
    body1: {
      fontSize: "16px",
      fontWeight: "500"
    },
    body2: {
      fontSize: "14px",
      fontWeight: "bold"
    },
    caption: {
      fontSize: "10px",
      fontWeight: "800"
    }
  },
});

theme.overrides = {
  MuiButton: {
    root: {
      borderRadius: "20px",
      fontSize: "12px",
      textTransform: "none",
      height: "30px"

    },
    containedPrimary: {
      backgroundColor: vars.lightBlue,
      color: vars.darkBlue,
      padding: "8px 12px",
      '&:hover': {
        backgroundColor: vars.lightBlue,
        color: vars.darkBlue,

      },
    },
    outlinedPrimary: {
      backgroundColor: vars.white,
      border: `1px solid ${vars.gray1}`,
      color: vars.gray1,
      padding: "8px 12px",
      '&:hover': {
        backgroundColor: vars.white,
        color: vars.gray1,
        border: `1px solid ${vars.gray1}`,
      },
    },
  }
}

export default theme;