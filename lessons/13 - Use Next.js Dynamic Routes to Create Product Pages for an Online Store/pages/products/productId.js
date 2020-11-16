import Head from 'next/head'
import styles from '../../styles/Product.module.css'

{/**
  * @lesson-13-todo Exercise 2
  * If we want to make each product available at
  * their own individual page, how can we update
  * our page to accept dynamic routes?
  */}

export default function Product() {
  {/**
    * @lesson-13-todo Exercise 4
    * With dynamic routes, we want to be able to pass
    * in dynamic props to our page. After we define our
    * page's props, how can we use them to dynamically
    * load our page's data?
    */}

  const id = 'productId';
  const title = 'Product Title';
  const description = 'Product description';
  const image = 'https://source.unsplash.com/random/500x500';
  const price = 1.00;

  {/**
    * @lesson-13-todo Exercise 5
    * In other parts of our app, we used a custom hook
    * to import global data. How can we use that to
    * import a function to add items to our cart?
    */}

  return (
    <div className={styles.container}>
      <Head>
        <title>{ title } - Space Jelly</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <div className={styles.productImage}>
          <img src={image} alt={title} />
        </div>

        <div>
          <h1>
            { title }
          </h1>

          <p className={styles.description}>
            { description }
          </p>

          <p className={styles.description}>
            ${ price.toFixed(2) }
          </p>

          {/**
            * @lesson-13-todo Exercise 5
            * Once we have our add to cart function, how can
            * we add an item to our customer's cart any time
            * they click the Buy button?
            */}
          <p>
            <button className={styles.button}>
              Buy
            </button>
          </p>
        </div>

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

{/**
  * @lesson-13-todo Exercise 4
  * Just defining page paths doesn't give us the data for
  * each page, we need a way to look up our product data
  * and pass it to the page. What API can we use to define
  * our page's props?
  */}

{/**
  * @lesson-13-todo Exercise 3
  * Once we have a dynamic route, we need to tell Next.js
  * what paths are actually available to visit. What API
  * can we use to define our static paths?
  */}