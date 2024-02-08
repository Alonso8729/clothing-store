import styles from './Card.module.css'
import React from 'react'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { addToCart } from '../../redux/cartReducer';

const Card = ({ item }) => {
  const dispatch = useDispatch()

  return (
    <div className={styles.card}>
      <div className={styles.image}>
        {item?.isNew && <span className={styles.span}>New Item</span>}
        <Link className={styles.link} to={`/clothing-store/product/${item.id}`} state={{ item }}>
          <img src={item.imgFront} className={styles.mainImage} />
          <img src={item.imgBack} className={styles.secondImage} />
        </Link>
        <button className={styles.addBtn} onClick={() => dispatch(addToCart({
          id: item.id,
          title: item.title,
          desc: item.desc,
          img: item.imgFront,
          price: item.newPrice,
          quantity: 1
        }))}>Add To Cart</button>

      </div>
      <h2 className={styles.h2}>{item?.title}</h2>
      <div className={styles.prices}>
        <h3 className={`${styles.h3} ${styles.oldPrice}`}>${item?.oldPrice || item?.newPrice + 20}</h3>
        <h3 className={styles.h3}>${item?.newPrice}</h3>
      </div>
    </div>
  )
}

export default Card