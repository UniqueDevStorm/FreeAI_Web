import 'semantic-ui-css/semantic.min.css';
import { useState, useEffect } from "react";
import { createMuiTheme, MuiThemeProvider, CssBaseline, Toolbar, IconButton } from '@material-ui/core';
import Brightness7 from '@material-ui/icons/Brightness7';
import React from 'react';

export default function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  useEffect(() => {
    setIsDarkMode(localStorage.getItem('dark') !== null)
  }, [])
  const theme = React.useMemo(
      () =>
          createMuiTheme({
            palette: {
              type: isDarkMode ? 'dark' : 'light',
            },
          }),
      [isDarkMode],
  );
  return (
      <MuiThemeProvider theme={theme}>
        <CssBaseline />
        <div style={{ textAlign: 'center' }}>
          <div style={{ position: 'fixed', width: '100vw', right: 0, top: 0, textDecoration: 'none' }}>
            <Toolbar>
              <div style={{ flexGrow: 1 }}>
                <IconButton color='inherit' onClick={() => {
                  const value = !isDarkMode;
                  setIsDarkMode(value);
                  if (value) {
                    localStorage.dark = '1';
                  } else {
                    delete localStorage.dark;
                  }
                }} >
                  <Brightness7 />
                </IconButton>
              </div>
            </Toolbar>
          </div>
          <style>
            {`
                    @import url('https://fonts.googleapis.com/css2?family=Do+Hyeon&display=swap');
                    * {
                        font-family: 'Do Hyeon', sans-serif;
                    }
                `}
          </style>
          <img
              src={'/FreeAI.png'}
              style={{ marginTop: '20vh', borderRadius: '50%' }}
          />
          <h1 style={{ fontSize: '50px' }}>FreeAI</h1>
          <h2 style={{ fontSize: '50px' }}>많은 기능을 한봇에.</h2>
        </div>
      </MuiThemeProvider>
  )
}