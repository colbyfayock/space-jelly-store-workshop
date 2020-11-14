import Head from 'next/head'
import styles from '../styles/Home.module.css'

import products from '../../shared/products.json';

export default function Home() {
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
                  {/**
                    * @lesson-08-todo Exercise 1
                    * We need a clickable element that we can use to later fire
                    * a function to trigger Stripe checkout. What native HTML
                    * element includes those properties by default?
                    *
                    * @lesson-08-todo Exercise 3
                    * Once we have our clickable element, we want to fire custom
                    * functionality by passing in a function. What prop can we use
                    * on our element to trigger when someone clicks on it?
                    *
                    * @lesson-08-todo Exercise 6
                    * We're now firing a custom function on our clickable element,
                    * but we have multiple products, how can we make sure we're
                    * initiating checkout for the right product?
                    */}
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
