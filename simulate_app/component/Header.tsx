import styles from '../styles/header.module.css'
import Navbar from './Navbar'

export default function Header() {
  return (
      <div>
        <header className={styles.header}/>            
        <Navbar/>
      </div>
  )
}
