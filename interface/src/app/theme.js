import { createTheme } from "@mui/material/styles";

const lightTheme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#333333",
    },
    secondary: {
      main: "#555555",
    },
    background: {
      default: "#f5f5f5",
      paper: "#ffffff",
    },
    border: {
      main: "#e6e6e6"
    },
    text: {
      primary: "#333333",
      secondary: "#555555",
    },
    reverse: {
      primary: "#121212"
    }
  },
});


export { lightTheme };