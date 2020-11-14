import styles from './Nav.module.css';

const Nav = () => {
  /**
   * @lesson-11-todo Exercise 4
   *
   */
  return (
    <nav className={styles.nav}>
      <p className={styles.navTitle}>
        Space Jelly Shop
      </p>
    </nav>
  )
}

export default Nav;