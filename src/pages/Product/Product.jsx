import React, { useState } from 'react'
import styles from './Product.module.css'
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import BalanceIcon from '@mui/icons-material/Balance';

export const Product = () => {
  const [quantity, setQuantity] = useState(1);
  const [selectedImg, setSelectedImg] = useState(0)
  const images = ['https://images.pexels.com/photos/12179283/pexels-photo-12179283.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    'https://images.pexels.com/photos/14452725/pexels-photo-14452725.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'];

  return (
    <div className={styles.product}>
      <div className={styles.left}>
        <div className={styles.images}>
          <img src={images[0]} alt="" onClick={e => setSelectedImg(0)} />
          <img src={images[1]} alt="" onClick={e => setSelectedImg(1)} />
        </div>
        <div className={styles.mainImage}>
          <img src={images[selectedImg]} alt="" />
        </div>
      </div>
      <div className={styles.right}>
        <h1 className={styles.title}>
          Cropped Hood Sweatshirt
        </h1>
        <span className={styles.price}>$199</span>
        <p className={styles.p}>Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Dicta optio possimus atque
          blanditiis, veritatis odio, repellendus nemo voluptatem ut,
          itaque consectetur. Labore, quisquam officia.
          Suscipit nemo similique sit a blanditiis.</p>
        <div className={styles.quantity}>
          <button className={styles.btn} onClick={() => setQuantity(prev => prev === 1 ? 1 : prev - 1)}>-</button>
          <span >{quantity}</span>
          <button className={styles.btn} onClick={() => setQuantity(prev => prev + 1)}>+</button>
        </div>
        <button className={styles.add}>
          <AddShoppingCartIcon />
          ADD TO CART
        </button>
        <div className={styles.link}>
          <div className={styles.item}>
            <FavoriteBorderIcon /> ADD TO WISHLIST
          </div>
          <div className={styles.item}>
            <BalanceIcon /> ADD TO COMPARE
          </div>
        </div>
        <div className={styles.info}>
          <span>Vendor: ZARA</span>
          <span>Product Type: Sweatshirt</span>
          <span>Tags: Sweatshirt, Women, Top</span>
        </div>
        <hr />
        <div className={styles.details}>
          <span>DESCRIPTION</span>
          <hr />
          <span>ADDITIONAL INFORMATION</span>
          <hr />
          <span>FAQ</span>
        </div>
      </div>
    </div>
  )
}
