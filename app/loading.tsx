import styles from './loading.module.css'

export default function LoadingPage() {
  return (
    <div className={styles.container}>
      <div>
        <div className={styles.loader}>
          <div className={styles.spinner}></div>
        </div>
        <p className={`${styles.text} ${styles.pulse}`}>Loading...</p>
      </div>
    </div>
  )
}