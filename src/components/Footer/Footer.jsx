import React from 'react'
import styles from './Footer.module.css'
import { Link } from 'react-router-dom'
import payment from '../../assets/img/payment.png'

export const Footer = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.top}>
        <div className={styles.item}>
          <h3>Categories</h3>
          <Link className={styles.linkStyle}>Women</Link>
          <Link className={styles.linkStyle}>Men</Link>
          <Link className={styles.linkStyle}>Shoes</Link>
          <Link className={styles.linkStyle}>Accessories</Link>
          <Link className={styles.linkStyle}>New Arrivals</Link>
        </div>
        <div className={styles.item}>
          <h3>Links</h3>
          <Link className={styles.linkStyle}>FAQ</Link>
          <Link className={styles.linkStyle}>Pages</Link>
          <Link className={styles.linkStyle}>Coockies</Link>
        </div>
        <div className={styles.item}>
          <h3>About</h3>
          <span>Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Reiciendis asperiores distinctio nam pariatur?
            Vitae ab facere tempore repudiandae adipisci odit necessitatibus facilis modi est!
            Itaque quasi provident officiis esse repellat?</span>
        </div>
        <div className={styles.item}>
          <h3>Contact</h3>
          <span>Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Reiciendis asperiores distinctio nam pariatur?
            Vitae ab facere tempore repudiandae adipisci odit necessitatibus facilis modi est!
            Itaque quasi provident officiis esse repellat?</span>
        </div>
      </div>
      <div className={styles.bottom}>
        <div className={styles.left}>
          <span className={styles.logo}>Trendify </span>
          <span className={styles.copyright}>
            ©Copyright 2023. All Rights Reserved
          </span>
        </div>
        <div className={styles.right}>
          <img src={payment} alt="payment" />
        </div>
      </div>
    </div>
  )
}
