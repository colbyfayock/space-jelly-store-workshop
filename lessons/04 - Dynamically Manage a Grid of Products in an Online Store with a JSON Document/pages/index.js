import Head from 'next/head'
import styles from '../styles/Home.module.css'

/**
 * @lesson-04-todo Exercise 1
 * Once we create our file to manage our projects, we'll need to import
 * it to make it available as data in our app.
 */

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

        {/**
          * @lesson-04-todo Exercise 4
          * With our product data availabe to use in the form of an array, how can
          * we take advantage of that to avoid having to manually manage each product
          * in our code?
          */}

        <ul className={styles.grid}>
          <li className={styles.card}>
            <a href="#">
              <img src="/images/spacejelly-tshirt.jpg" alt="Space Jelly Tshirt" />
              <h3>Space Jelly Tshirt</h3>
              <p>$20.00</p>
              <p>Bring Cosmo the space Jellyfish to your wardrobe with this high quality tshirt.</p>
            </a>
          </li>

          <li className={styles.card}>
            <a href="#">
              <img src="/images/spacejelly-stickers.jpg" alt="Space Jelly Stickers" />
              <h3>Space Jelly Stickers</h3>
              <p>$10.00</p>
              <p>Add some flare to your laptop with a sticker of Cosmo the Space Jellyfish.</p>
            </a>
          </li>

          <li className={styles.card}>
            <a href="#">
              <img src="/images/spacejelly-combo.jpg" alt="Space Jelly Combo Pack" />
              <h3>Space Jelly Combo</h3>
              <p>$25.00</p>
              <p>Show your love for Cosmo with a tshirt and sticker combo pack!</p>
            </a>
          </li>
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
