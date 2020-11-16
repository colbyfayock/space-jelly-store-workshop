import { useState, createContext, useContext, useEffect } from 'react';

import { initiateCheckout } from '../lib/payments.js'

import products from '../../shared/products.json';

const defaultCart = {
  products: {}
}

export const CartContext = createContext();

export function useCartState() {
  const [cart, updateCart] = useState(defaultCart);

  /**
   * @lesson-11-todo Exercise 3
   * Now that we're reliably storing our cart state in
   * browser storage, how can we now grab that data from
   * storage any time the page loads and load it into
   * our active cart state?
   */

  useEffect(() => {
    // Add Exercise 3 code here
  }), [];

  /**
   * @lesson-11-todo Exercise 2
   * In order to reload our cart state from storage, the
   * first thing we need is to actually store that state.
   * How can we use native browser APIs to store data
   * whenever our data changes in a useEffect hook?
   */

  useEffect(() => {
    // Add Exercise 2 code here
  }), [];

  const cartItems = Object.keys(cart.products).map(key => {
    const product = products.find(({ id }) => `${id}` === `${key}`);
    return {
      ...cart.products[key],
      pricePerUnit: product.price
    }
  });

  const subtotal = cartItems.reduce((accumulator, { pricePerUnit, quantity }) => {
    return accumulator + ( pricePerUnit * quantity );
  }, 0);

  const quantity = cartItems.reduce((accumulator, { quantity }) => {
    return accumulator + quantity;
  }, 0);

  function addToCart({ id }) {
    updateCart((prev) => {
      let cart = {...prev};

      if ( cart.products[id] ) {
        cart.products[id].quantity = cart.products[id].quantity + 1;
      } else {
        cart.products[id] = {
          id,
          quantity: 1
        }
      }

      return cart;
    })
  }

  function checkout() {
    initiateCheckout({
      lineItems: cartItems.map(({ id, quantity }) => {
        return {
          price: id,
          quantity
        }
      })
    })
  }

  return {
    cart,
    subtotal,
    quantity,
    addToCart,
    checkout
  }

}

export function useCart() {
  const cart = useContext(CartContext);
  return cart;
}