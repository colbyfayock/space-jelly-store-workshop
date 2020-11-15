import { FaShoppingCart } from 'react-icons/fa';

import styles from '../Nav/Nav.module.css';

import { useCart } from '../../hooks/use-cart.solution.js';

const Nav = () => {
  /**
   * @lesson-11-solution Exercise 5
   *
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