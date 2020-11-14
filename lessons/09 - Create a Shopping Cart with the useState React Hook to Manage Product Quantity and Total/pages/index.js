import Head from 'next/head'
import styles from '../styles/Home.module.css'

import { initiateCheckout } from '../lib/payments.js'

import products from '../../shared/products.json';

export default function Home() {
  /**
   * @lesson-09-todo Exercise 2
   * In order to keep track of the items someone adds to their cart,
   * we need some kind of mechanism to store our active "state".
   */

  /**
   * @lesson-09-todo Exercise 3
   * With our local state, we need a way to add products to our shopping
   * cart. Can we create a function that allows to easily manage adding
   * a new product to our cart?
   */

  /**
   * @lesson-09-todo Exercise 6
   * How can we use the same initiateCheckout function from before to
   * create a new function that allows our customer to purchase all
   * the items in their shopping cart?
   */

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
          * @lesson-09-todo Exercise 1
          * We want to show provide our customers an up-to-date look at both the
          * number of items in their shopping cart and the total cost. How can we
          * add a snippet that we can later use to dynamically manage it?
          *
          * @lesson-09-todo Exercise 4
          * Our shopping cart is static right now, meaning it's not always going to
          * be the same value. But how can we use our new shopping cart state to
          * allow our cart UI to update along with the local state?
          *
          * @lesson-09-todo Exercise 6
          * The customer has added all the products they want to their shopping cart,
          * but how can they check out? How can we add a link or button to trigger
          * the checkout sequence?
          */}

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
                      * @lesson-09-todo Exercise 5
                      * Now we have a function that adds an item to our local cart state.
                      * How can we make use of that to add a product to our local cart
                      * instead of immediately buying it?
                      */}
                    <button className={styles.button} onClick={() => {
                      initiateCheckout({
                        lineItems: [
                          {
                            price: id,
                            quantity: 1
                          }
                        ]
                      })
                    }}>Buy</button>
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
