import Head from 'next/head'
import { FaShoppingCart } from 'react-icons/fa';
import styles from '../styles/Cart.module.css'

import Table from '../components/Table';

const columns = [
  {
    columnId: 'title',
    Header: 'Product Name'
  },
  {
    columnId: 'quantity',
    Header: 'Quantity'
  },
  {
    columnId: 'pricePerUnit',
    Header: 'Price Per Item'
  },
  {
    columnId: 'total',
    Header: 'Item Total'
  }
];

export default function Home() {

  /**
   * @lesson-14-todo Exercise 3
   * Right now we're using some placeholder data, but
   * we want to show the items in our cart. What can
   * we do to import our now globally avialable cart
   * items and turn them into a data format our table
   * will understand?
   */

  const data = [
    {
      id: 'my-product',
      title: 'My Cool Product',
      quantity: 1,
      pricePerUnit: 10.00,
      total: 10.00
    }
  ]

  return (
    <div className={styles.container}>
      <Head>
        <title>Shopping Cart - Space Jelly</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>

        <h1 className={styles.title}>
          <FaShoppingCart /> Cart
        </h1>

        <Table className={styles.table} data={data} columns={columns} />

        <p className={styles.checkout}>
          {/**
            * @lesson-14-todo Exercise 4
            * Our Check Out button doesn't do anything right
            * now, but we want it to create a new checkout
            * session when someone clicks it. How can we
            * let someone buy the items in their cart?
            */}
          <button className={styles.button}>
            Check Out
          </button>
        </p>
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
