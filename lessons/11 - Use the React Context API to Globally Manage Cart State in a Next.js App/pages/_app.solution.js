import '../styles/globals.css'

import { CartContext, useCartState } from '../hooks/use-cart.solution.js';

import Nav from '../components/Nav.solution';

function MyApp({ Component, pageProps }) {\
  /**
   * @lesson-11-solution Exercise 4
   *
   */

  const cart = useCartState();

  /**
   * @lesson-11-solution Exercise 2
   *
   */

  return (
    <CartContext.Provider value={cart}>
      <Nav />
      <Component {...pageProps} />
    </CartContext.Provider>
  );
}

export default MyApp
