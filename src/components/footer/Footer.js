"use client"

import Image from 'next/image';
import styles from './footer.module.css';
import Image1 from '@/../public/1.png';
import Image2 from '@/../public/2.png';
import Image3 from '@/../public/3.png';
import Image4 from '@/../public/4.png';
const Footer = () => {
  return (
    <div className={styles.container}>
        <div>©2023 insightBlog. All rights reserved.</div>
        <div className={styles.social}>
          <Image src={Image1} width={15} height={15} className={styles.icon} alt='facebook'/>
          <Image src={Image2} width={15} height={15} className={styles.icon} alt='facebook'/>
          <Image src={Image3} width={15} height={15} className={styles.icon} alt='facebook'/>
          <Image src={Image4} width={15} height={15} className={styles.icon} alt='facebook'/>
        </div>
    </div>
  )
}

export default Footer