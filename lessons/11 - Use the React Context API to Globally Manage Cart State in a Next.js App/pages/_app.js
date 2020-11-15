import '../styles/globals.css'

import Nav from '../components/Nav'

function MyApp({ Component, pageProps }) {
  /**
   * @lesson-11-todo Exercise 4
   * After wrapping our app with our Context, we don't
   * have much else along with it. How can we import
   * our cart state and use the Context API to make
   * it available everywhere?
   */

  /**
   * @lesson-11-todo Exercise 2
   * Once we create new Context with React, we need
   * to use it. How can we wrap our entire app to
   * take advantage of that Context?
   */
  return (
    <>
      <Nav />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp
