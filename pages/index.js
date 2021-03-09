import Logined from "../components/Logined";
import DarkToggle from "../components/DarkToggle";
import { useState, useEffect } from "react";
import { createMuiTheme, MuiThemeProvider, CssBaseline, Button } from '@material-ui/core';
import React from 'react';
import Link from 'next/link';
import * as cookie from 'cookie'
import * as process from "process";
import jwt from 'jsonwebtoken';

export async function getServerSideProps(ctx) {
  let key = null;
  try {
    const cookies = cookie.parse(ctx.req.headers.cookie);
    const user = cookies.user;
    key = jwt.verify(user, process.env.JWT_SECRET)
  } catch { key = null }
  return {
    props: { user: key }
  }
}

export default function App({ ...key }) {
  const data = key.user;
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
          <DarkToggle isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />
          <div>
            {
              data === null
              ? <Link href='/api/discord/oauth2'><Button variant='contained' color="primary" style={{ right: 15, top: 15, position: 'absolute', height: '40px', width: '100px', fontSize: '20px' }}>로그인</Button></Link>
              : <Logined data={data} />
            }
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