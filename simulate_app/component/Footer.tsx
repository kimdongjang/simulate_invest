import styles from '../styles/footer.module.css'

export default function Footer() {
  return (
    <div className={styles.footer__area}>
      Footer
      <div className={styles.footer__area__copyright}>
          <p>© 2022 Simulate Invest Service. All rights reserved.</p>
        </div>
    </div>
  )
}
