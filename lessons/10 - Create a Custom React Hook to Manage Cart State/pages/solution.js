import Head from 'next/head'
import { FaShoppingCart } from 'react-icons/fa';
import styles from '../styles/Home.module.css'

import { initiateCheckout } from '../lib/payments.js'

/**
 * @lesson-10-solution Exercise 1
 * We can import our useCart hook function just like any other
 * exported function, making it immediately available to use
 * right on our homepage.
 */

import useCart from '../hooks/use-cart.solution.js';

import products from '../../shared/products.json';

export default function Home() {
  /**
   * @lesson-10-solution Exercise 2
   * With our useCart hook function imported, we can invoke it
   * like any other function and destructure the variables
   * we returned with the cart state.
   */

  /**
   * @lesson-10-solution Exercise 3
   * Just like subtotal and quantity, once we move addToCart to
   * our custom hook, we can destructure it and use right on
   * the homepage!
   */

  const { subtotal, quantity, addToCart } = useCart();

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
