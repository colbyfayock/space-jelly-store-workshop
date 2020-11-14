import { useState } from 'react';

import products from '../../shared/products.json';

/**
 * @lesson-10-solution Exercise 1
 * We can create a new function called useCart and export
 * it by default making it available for any file in our
 * app to import and use!
 */

const defaultCart = {
  products: {}
}

export default function useCart() {

  /**
   * @lesson-10-solution Exercise 2
   * Because we added `use` to `useCart`, we can also take advantage
   * of useState straight from React to manage our cart state. Since
   * we also want to perform the same calculations everywhere like
   * the subtotal and quantity, we can return those values to also
   * make available throughout the app.
   */

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


  /**
   * @lesson-10-solution Exercise 3
   * Just like our subtotal and quantity variables, we can return our addToCart
   * function giving us the ability to add a product to our shopping cart from
   * anywhere in the app.
   */

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

  return {
    cart,
    subtotal,
    quantity,
    addToCart
  }

}

