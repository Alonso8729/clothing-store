import styles from './Card.module.css'
import React from 'react'
import { Link } from 'react-router-dom'

const Card = ({ item }) => {
  return (
    <Link className={styles.link} to={`product/${item.id}`}>
      <div className={styles.card}>
        <div className={styles.image}>
          {item.isNew && <span className={styles.span}>New Item</span>}
          <img src={item.imgFront} className={styles.mainImage} />
          <img src={item.imgBack} className={styles.secondImage} />
        </div>
        <h2 className={styles.h2}>{item.title}</h2>
        <div className={styles.prices}>
          <h3 className={`${styles.h3} ${styles.oldPrice}`}>${item.oldPrice}</h3>
          <h3 className={styles.h3}>${item.newPrice}</h3>
        </div>
      </div>
    </Link>
  )
}

export default Card