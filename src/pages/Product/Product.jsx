import React, { useState } from 'react'
import styles from './Product.module.css'
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import BalanceIcon from '@mui/icons-material/Balance';
import { useLocation } from 'react-router-dom';
import {useDispatch} from 'react-redux'
import { addToCart } from '../../redux/cartReducer';

export const Product = () => {
  const location = useLocation();
  const { item } = location.state || {};
  const [quantity, setQuantity] = useState(1);
  const [selectedImg, setSelectedImg] = useState(0)
  const images = [item.imgFront, item.imgBack];
  const dispatch = useDispatch();

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
          {item.title}
        </h1>
        <span className={styles.price}>${item.newPrice}</span>
        <p className={styles.p}>{item.desc}</p>
        <div className={styles.quantity}>
          <button className={styles.btn} onClick={() => setQuantity(prev => prev === 1 ? 1 : prev - 1)}>-</button>
          <span >{quantity}</span>
          <button className={styles.btn} onClick={() => setQuantity(prev => prev + 1)}>+</button>
        </div>
        <button className={styles.add} onClick={()=>dispatch(addToCart({
          id:item.id,
          title:item.title,
          desc:item.desc,
          img:item.imgFront,
          price: item.newPrice,
          quantity
        }))}>
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
          <span>Product Type: {item?.productType}</span>
          <span>Tags: {item.tags.join(', ')}</span>
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
