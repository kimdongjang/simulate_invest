import Link from 'next/link';

export default function Navbar() {
  return (
    <ul>
      <li>
        <Link href="/">
          <a>Home</a>
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
  )
}