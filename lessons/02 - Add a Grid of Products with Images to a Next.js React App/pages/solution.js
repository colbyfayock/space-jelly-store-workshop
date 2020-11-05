import Head from 'next/head'
import styles from '../styles/Home.solution.module.css'

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
          * @lesson-02-solution Exercise 1
          * Inside each card, We can add our product title right inside of
          * each <h3> and our description inside of the <p>.
          *
          * @lesson-02-solution Exercise 2
          * Adding images to the public directory allows us to reference them
          * as if they were hosted right on our website.
          *
          * @lesson-02-solution Exercise 3
          * We can use the <ul> element with a <li> element wrapping each card
          * link to set up a proper list. We can also move the card className
          * to the list item to move the styles for the cards.
          */}

        <ul className={styles.grid}>
          <li className={styles.card}>
            <a href="#">
              <img src="/images/spacejelly-tshirt.jpg" alt="Space Jelly Tshirt" />
              <h3>Space Jelly Tshirt</h3>
              <p>Bring Cosmo the space Jellyfish to your wardrobe with this high quality tshirt.</p>
            </a>
          </li>

          <li className={styles.card}>
            <a href="#">
              <img src="/images/spacejelly-stickers.jpg" alt="Space Jelly Stickers" />
              <h3>Space Jelly Stickers</h3>
              <p>Add some flare to your laptop with a sticker of Cosmo the Space Jellyfish.</p>
            </a>
          </li>

          <li className={styles.card}>
            <a href="#">
              <img src="/images/spacejelly-combo.jpg" alt="Space Jelly Combo Pack" />
              <h3>Space Jelly Combo</h3>
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
