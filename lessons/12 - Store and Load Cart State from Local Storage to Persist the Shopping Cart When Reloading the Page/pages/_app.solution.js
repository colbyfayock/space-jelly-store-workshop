import '../styles/globals.css'

import { CartContext, useCartState } from '../hooks/use-cart.solution.js';

import Nav from '../components/Nav/Nav.solution.js';

function MyApp({ Component, pageProps }) {
  const cart = useCartState();
  return (
    <CartContext.Provider value={cart}>
      <Nav />
      <Component {...pageProps} />
    </CartContext.Provider>
  );
}

export default MyApp
