import React from 'react'
import styles from './Footer.module.css'
import { Link } from 'react-router-dom'
import payment from '../Footer/payment.png'

export const Footer = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.top}>
        <div className={styles.item}>
          <h3>Categories</h3>
          <Link to='products/2' className={styles.linkStyle}>Women</Link>
          <Link to='products/4' className={styles.linkStyle}>Men</Link>
          <Link to='products/5' className={styles.linkStyle}>Accessories</Link>
          <Link to='products/3' className={styles.linkStyle}>New Arrivals</Link>
        </div>
        <div className={styles.item}>
          <h3>Links</h3>
          <Link className={styles.linkStyle}>FAQ</Link>
          <Link className={styles.linkStyle}>Pages</Link>
          <Link className={styles.linkStyle}>Coockies</Link>
        </div>
        <div className={styles.item}>
          <h3>About</h3>
          <span className={styles.span}> Welcome to Trendify, where fashion meets empowerment.</span>
        </div>
      </div>
      <div className={styles.bottom}>
        <div className={styles.left}>
          <span className={styles.logo}>Trendify </span>
          <span className={styles.copyright}>
            ©Copyright 2024 <a className={styles.alonso} target="_blank" href="https://github.com/Alonso8729/">Alonso.</a>
          </span>
        </div>
        <div className={styles.right}>
          <img className={styles.img} src={payment} alt="payment" />
        </div>
      </div>
    </div>
  )
}
