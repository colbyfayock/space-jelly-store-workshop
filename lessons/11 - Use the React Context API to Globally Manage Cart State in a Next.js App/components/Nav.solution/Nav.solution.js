import { FaShoppingCart } from 'react-icons/fa';

import styles from '../Nav/Nav.module.css';

import { useCart } from '../../hooks/use-cart.solution.js';

const Nav = () => {
  /**
   * @lesson-11-solution Exercise 5
   * We can import the useCart state then grab the
   * subtotal and the checkout function, making our
   * total visible in the navigation and then triggering
   * the checkout functionality any time our cart
   * is clicked.
   */
  const { subtotal, checkout } = useCart();
  return (
    <nav className={styles.nav}>
      <p className={styles.navTitle}>
        Space Jelly Shop
      </p>
      <p className={styles.navCart}>
        <button onClick={checkout}>
          <FaShoppingCart /> ${subtotal.toFixed(2)}
        </button>
      </p>
    </nav>
  )
}

export default Nav;