import '../styles/globals.css'

import { CartContext, useCartState } from '../hooks/use-cart.solution.js';

import Nav from '../components/Nav.solution';

function MyApp({ Component, pageProps }) {
  /**
   * @lesson-11-solution Exercise 4
   * We can import our cart state using our useCartState
   * hook to access our shopping cart. We can then
   * use the Context API to pass a "value" to the
   * Provider component making that cart data
   * available throughout the app.
   */

  const cart = useCartState();

  /**
   * @lesson-11-solution Exercise 2
   * We can use the Context Provider API to wrap
   * our entire application inside of the Next.js
   * _app.js file, making that context available
   * anywhere in the app.
   */

  return (
    <CartContext.Provider value={cart}>
      <Nav />
      <Component {...pageProps} />
    </CartContext.Provider>
  );
}

export default MyApp
