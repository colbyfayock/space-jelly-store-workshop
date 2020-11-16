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
   * @lesson-11-solution Exercise 3
   * With our state stored as a string, we can grab that
   * value right from our browser, try to parse that
   * JSON value, and update our cart state.
   */

  useEffect(() => {
    const stateFromStorage = window.localStorage.getItem('spacejelly_cart');
    const data = stateFromStorage && JSON.parse(stateFromStorage);
    if ( data ) {
      updateCart(data);
    }
  }, []);

  /**
   * @lesson-11-solution Exercise 2
   * Using the browser's localStorage API, we can turn
   * our cart state into a JSON string and save that data
   * right to the browser!
   */

  useEffect(() => {
    const data = JSON.stringify(cart);
    window.localStorage.setItem('spacejelly_cart', data);
  }, [cart])

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