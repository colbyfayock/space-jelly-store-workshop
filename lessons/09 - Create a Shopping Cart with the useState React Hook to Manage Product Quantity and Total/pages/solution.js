import { useState } from 'react';
import Head from 'next/head'
import styles from '../styles/Home.module.css'

import { initiateCheckout } from '../lib/payments.js'

import products from '../../shared/products.json';

const defaultCart = {
  products: {}
}

export default function Home() {
  /**
   * @lesson-09-solution Exercise 2
   * Using React's useState hook, we can store the current "state" of
   * our customer's shopping cart.
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
   * @lesson-09-solution Exercise 3
   * We can create an addToCart function that given the product ID, adds that item
   * to our local cart state along with incrementing the quantity of that item by
   * 1 if it exists or setting it as a new product in our cart if it didn't exist.
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

  /**
   * @lesson-09-solution Exercise 6
   * The iniateCheckout function can still be used to trigger the checkout
   * sequence, but now, we're dynamically passing an array of products
   * that includes each product ID along with how many of that item.
   */

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

        {/**
          * @lesson-09-solution Exercise 1
          * We can make use of the same description block as above to create a simple
          * section to include our total number of items and the total cost.
          */}

        <p className={styles.description}>
          {/**
            * @lesson-09-solution Exercise 4
            * We're storing our cart state inside of the cart object. We can use that
            * data to calculate how many items are in our cart as well as what the total
            * cost of all of those items are.
            */}
          <strong>Items:</strong> {quantity}
          <br />
          <strong>Total:</strong> ${subtotal}
          {/**
            * @lesson-09-solution Exercise 6
            * We can add a new button, link, or even make the entire paragraph a link that
            * triggers out checkout button to initiate the checkout sequence.
            */}
          <br />
          <button className={styles.button} onClick={checkout}>Check Out</button>
        </p>

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
                    {/**
                      * @lesson-09-solution Exercise 5
                      * The initiateCheckout function can be swapped with the addToCart function
                      * while still including the ID as an argument, allowing us to use that ID
                      * to add the product to our shopping cart.
                      */}
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
