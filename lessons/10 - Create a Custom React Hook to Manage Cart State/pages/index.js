import { useState } from 'react';
import Head from 'next/head';
import { FaShoppingCart } from 'react-icons/fa';
import styles from '../styles/Home.module.css'

import { initiateCheckout } from '../lib/payments.js'

/**
 * @lesson-10-todo Exercise 1
 * With our new exported hook function from hooks/use-cart.js, how can
 * we import it to use here on the homepage?
 */

import products from '../../shared/products.json';

const defaultCart = {
  products: {}
}

export default function Home() {
  /**
   * @lesson-10-todo Exercise 2
   * Custom hooks are a perfect way to abstract logic particularly that
   * requires React. Where can move this cart logic to make it available
   * on this page and any other page in the app?
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
   * @lesson-10-todo Exercise 3
   * Managing all of our logic is helpful, but what about actions that
   * interact with that logic? How can we move our addToCart function
   * to our custom hook?
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

  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Space Jelly Shop
        </h1>

        <p className={styles.description}>
          The best space jellyfish swag on the web!
        </p>

        <ul className={styles.cart}>
          <li>
            <strong>Items:</strong> {quantity}
          </li>
          <li>
            <strong>Total:</strong> ${subtotal}
          </li>
          <li>
            <button className={`${styles.button} ${styles.cartButton}`} onClick={checkout}>
              <FaShoppingCart />
              Check Out
            </button>
          </li>
        </ul>

        <ul className={styles.grid}>
          {products.map(product => {
            const { id, title, image, description, price } = product;
            return (
              <li key={id} className={styles.card}>
                <a href="#">
                  <img src={image} alt={title} />
                  <h3>{ title }</h3>
                  <p>${ price }</p>
                  <p>{ description }</p>
                  <p>
                    <button className={styles.button} onClick={() => addToCart({ id })}>Buy</button>
                  </p>
                </a>
              </li>
            )
          })}
        </ul>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />
        </a>
      </footer>
    </div>
  )
}
