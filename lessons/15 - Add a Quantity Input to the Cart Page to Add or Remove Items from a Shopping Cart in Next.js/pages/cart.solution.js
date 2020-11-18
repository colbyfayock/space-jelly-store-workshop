import Head from 'next/head'
import { FaShoppingCart } from 'react-icons/fa';
import styles from '../styles/Cart.module.css'

import { useCart } from '../hooks/use-cart.js';

import products from '../../shared/products.json';

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

  const { cartItems, checkout, updateItem } = useCart();

  const data = cartItems.map(({ id, quantity, pricePerUnit }) => {
    const product = products.find(({ id: pid }) => pid === id);
    const { title } = product || {};

    const Quantity = () => {

      /**
       * @lesson-15-solution Exercise 2
       * With our form, we can attach an onSubmit event
       * listener, and when someone submits that form,
       * we can use the event that's passed as an argument
       * to prevent the default behavior of the form.
       */

      function handleOnSubmit(e) {
        e.preventDefault();

        /**
         * @lesson-15-solution Exercise 4
         * We can extra the input elements from our form,
         * find the quantity input by its name, and use
         * its value to call the updateItem function that
         * we created and made available in our global state.
         */

        const { currentTarget } = e;
        const inputs = Array.from(currentTarget.elements);
        const quantity = inputs.find(input => input.name === 'quantity')?.value;

        updateItem({
          id,
          quantity: quantity && parseInt(quantity)
        });
      }

      /**
       * @lesson-15-solution Exercise 1
       * We can use a number type input element as well
       * as a button element that lets us give our customers
       * a way to change the quantity.
       */

      return (
        <form className={styles.cartQuantity} onSubmit={handleOnSubmit}>
          <input name="quantity" type="number" min={0} defaultValue={quantity} />
          <button className={styles.button}>Update</button>
        </form>
      )
    }

    return {
      id,
      title,
      quantity: <Quantity />,
      pricePerUnit: pricePerUnit.toFixed(2),
      total: (quantity * pricePerUnit).toFixed(2)
    }
  });

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
          <button className={styles.button} onClick={checkout}>
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
