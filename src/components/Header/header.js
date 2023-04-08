import Link from 'next/link';
import styles from './header.module.scss'

export default function Header() {
  return (
    <div className={styles.headerApp}>
      <header className={styles.header}>
        <Link href="/" className={styles.headerTitle}>
          <span>
            <h2>Louis-Cyrus Sanjabi</h2>
          </span>
        </Link>
        <nav className={styles.headerNav}>
          <ul className={styles.headerNavList}>
            <li className={styles.headerNavItem}>
              <Link href="/" className={styles.headerNavLink}>
                <span>Home</span>
              </Link>
            </li>
            <li className={styles.headerNavItem}>
              <Link href="/about" className={styles.headerNavLink}>
                <span>About me</span>
              </Link>
            </li>
            <li className={styles.headerNavItem}>
              <Link href="/portfolio" className={styles.headerNavLink}>
                <span>My Projects</span>
              </Link>
            </li>
            <li className={styles.headerNavItem}>
              <Link href="/contact" className={styles.headerNavLink}>
                <span>Contact</span>
              </Link>
            </li>
          </ul>
        </nav>
      </header>
    </div>
  );
}