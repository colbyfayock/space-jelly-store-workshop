import { useState, createContext, useContext } from 'react';

import { initiateCheckout } from '../lib/payments.js'

import products from '../../shared/products.json';

const defaultCart = {
  products: {}
}

/**
 * @lesson-11-solution Exercise 1
 * We can use the React Context API to create a new
 * instance of Context that we can later use to
 * consume state globally.
 */

export const CartContext = createContext();

/**
 * @lesson-11-solution Exercise 3
 * We can simply rename our hook that manages the state to
 * useCartState, allowing us to have a function name that
 * makes sense, but still use it to access our state.
 */

export function useCartState() {
  const [cart, updateCart] = useState(defaultCart);

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

/**
 * @lesson-11-solution Exercise 3
 *
 */

export function useCart() {
  const cart = useContext(CartContext);
  return cart;
}