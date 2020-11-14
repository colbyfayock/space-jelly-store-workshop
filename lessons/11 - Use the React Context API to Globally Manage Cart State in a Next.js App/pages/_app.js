import '../styles/globals.css'

import Nav from '../components/Nav'

function MyApp({ Component, pageProps }) {
  /**
   * @lesson-11-todo Exercise 2
   *
   */
  return (
    <>
      <Nav />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp
