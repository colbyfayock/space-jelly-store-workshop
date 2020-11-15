import { FaShoppingCart } from 'react-icons/fa';

import styles from './Nav.module.css';

const Nav = () => {
  /**
   * @lesson-11-todo Exercise 5
   *
   */
  return (
    <nav className={styles.nav}>
      <p className={styles.navTitle}>
        Space Jelly Shop
      </p>
      <p className={styles.navCart}>
        <button>
          <FaShoppingCart /> $0.00
        </button>
      </p>
    </nav>
  )
}

export default Nav;