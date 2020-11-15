import { useState } from 'react';

import { initiateCheckout } from '../lib/payments.js'

import products from '../../shared/products.json';

const defaultCart = {
  products: {}
}

/**
 * @lesson-11-todo Exercise 1
 * We want our shopping cart state to be available globally.
 * What React API can we use to make data available to
 * an entire component tree?
 */

/**
 * @lesson-11-todo Exercise 3
 * When this hook is used, it's currently managing local state,
 * meaning, it's not going to persist throughout the app. If
 * we create a separate hook called useCart to consume the
 * global Context, what should we do with this one to still
 * be useable?
 */

export default function useCart() {

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
 * @lesson-11-todo Exercise 3
 * Not only do we want a way to manage our state, we want
 * a way to consume our cart Context. Can we create a
 * separate hook to consume our Context?
 */