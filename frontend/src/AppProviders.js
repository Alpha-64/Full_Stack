// src/AppProviders.jsx
import React from "react";
import { GoogleOAuthProvider } from '@react-oauth/google';
// import { Provider } from "react-redux";
import { ThemeProvider, CssBaseline } from "@mui/material";
import { createTheme } from "@mui/material/styles";
const AppProviders = ({ children }) => {

  const theme = createTheme({
    palette: {
      mode: "light",
      primary: {
        main: "#0d6efd",
      },
      secondary: {
        main: "#19857b",
      },
    },
  });


  return (
    <GoogleOAuthProvider clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}>
      {/* // <Provider store={store}> */}
        <ThemeProvider theme={theme}>
          <CssBaseline />
          {children}
        </ThemeProvider>
      {/* // </Provider> */}
    </GoogleOAuthProvider>
  );
};

export default AppProviders;
