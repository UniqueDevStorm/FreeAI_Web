import '../styles/globals.css';
import Router from 'next/router'
import NProgress from 'nprogress';

Router.events.on('routeChangeStart', () => NProgress.start())
Router.events.on('routeChangeComplete', () => NProgress.done())
Router.events.on('routeChangeError', () => NProgress.done())
Router.events.on('routeChangeComplete', () => {
  document.querySelector('html').scrollTo(0, 0)
})

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default MyApp;