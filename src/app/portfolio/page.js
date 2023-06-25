import React from 'react'
import styles from "./portfolio.module.css"
import Link from 'next/link'
const Portfolio = () => {
  return (
    <div className={styles.container}>
      <div className={styles.selectTitle}>Choose a gallery</div>
      <div className={styles.items}>
        <Link href="/portfolio/ilustrations" className={styles.item}>
          <span className={styles.title}>Ilustrations</span>
        </Link>
        <Link href="/portfolio/websites" className={styles.item}>
          <span className={styles.title}>Websites</span>
        </Link>
        <Link href="/portfolio/application" className={styles.item}>
          <span className={styles.title}>Application</span>
        </Link>
        </div>    
    </div>

  )
}

export default Portfolio