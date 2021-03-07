import 'semantic-ui-css/semantic.min.css';
import { useState, useEffect } from "react";
import { createMuiTheme, MuiThemeProvider, CssBaseline, Toolbar, IconButton, Button } from '@material-ui/core';
import Brightness7 from '@material-ui/icons/Brightness7';
import React from 'react';
import Link from 'next/link'

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
        <div style={{ textAlign: 'center', textDecoration: "none" }}>
          <div style={{ position: 'fixed', left: 0, top: 0, outline: 'none' }}>
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
          <div>
            <Link href='/api/discord/oauth2'>
              <Button variant="contained" color="primary" style={{ right: 15, top: 15, position: 'absolute' }}>
                로그인
              </Button>
            </Link>
          </div>
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