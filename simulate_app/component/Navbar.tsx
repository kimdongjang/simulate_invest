import styles from '../styles/header.module.css'
import Link from 'next/link';

export default function Navbar() {
  return (
    <div className={styles.navbarContainer}>
      <ul>
        <li>
          <Link href="/">
            <a>메인</a>
          </Link>
        </li>
        <li>
          <Link href="/contact">
            <a>Contact Us</a>
          </Link>
        </li>
        <li>
          <Link href="/login">
            <a>Login</a>
          </Link>
        </li>
      </ul>
    </div>
  )
}