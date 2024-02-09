import React, { useState, useEffect } from 'react'
import styles from './Product.module.css'
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import BalanceIcon from '@mui/icons-material/Balance';
import { useLocation } from 'react-router-dom';
import { useDispatch } from 'react-redux'
import { addToCart } from '../../redux/cartReducer';
import { addToWishlist } from '../../redux/wishlistReducer';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import Card from '../../components/Card/Card';
import data from '../../Data';

export const Product = () => {
  const location = useLocation();
  const { item } = location.state || {};
  const [quantity, setQuantity] = useState(1);
  const [selectedImg, setSelectedImg] = useState(0)
  const images = [item.imgFront, item.imgBack];
  const [descriptionExpanded, setDescriptionExpanded] = useState(false);
  const [additionalInfoExpanded, setAdditionalInfoExpanded] = useState(false);
  const [returnsExpanded, setReturnsExpanded] = useState(false);
  const [selectedSize, setSelectedSize] = useState('')
  const dispatch = useDispatch();
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  const toggleSizes = (size) => {
    setSelectedSize(size)
  }

  const handleAddToWishlist = () => {
    dispatch(addToWishlist({
      id: item.id,
      title: item.title,
      desc: item.desc,
      img: item.imgFront,
      price: item.newPrice,
      quantity: 1
    }));
  };

  const additionalItems = () => {
    // Choose all items except current item
    const allItems = data.filter(product => product.id !== item.id)
    let itemsYouMayLike = [];
    let counter = 0;
    let indices = []
    let randomIndex;

    while (counter < 6) {
      randomIndex = Math.floor(Math.random() * allItems.length)
      if (indices.includes(randomIndex)) {
        continue;
      }
      else {
        indices.push(randomIndex)
        itemsYouMayLike.push(allItems[randomIndex])
        counter++
      }
    }
    return itemsYouMayLike
  }

  return (
    <div className={styles.product}>
      <div className={styles.top}>
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
          <span className={styles.price}>{item.newPrice} USD</span>
          <div className={styles.size}>
            <h3>Size</h3>
            <div className={styles.sizeBtns}>
              <button className={`${styles.btn} ${selectedSize === 'S' ? styles.selectedBtn : ''}`} onClick={() => toggleSizes('S')}>S</button>
              <button className={`${styles.btn} ${selectedSize === 'M' ? styles.selectedBtn : ''}`} onClick={() => toggleSizes('M')}>M</button>
              <button className={`${styles.btn} ${selectedSize === 'L' ? styles.selectedBtn : ''}`} onClick={() => toggleSizes('L')}>L</button>
            </div>
          </div>
          <div className={styles.quantity}>
            <h3>Quantity</h3>
            <div className={styles.quantityButtons}>
              <button className={styles.btn} onClick={() => setQuantity(prev => prev === 1 ? 1 : prev - 1)}>-</button>
              <span >{quantity}</span>
              <button className={styles.btn} onClick={() => setQuantity(prev => prev + 1)}>+</button>
            </div>
          </div>
          <button className={styles.add} onClick={() => dispatch(addToCart({
            id: item.id,
            title: item.title,
            desc: item.desc,
            img: item.imgFront,
            price: item.newPrice,
            quantity
          }))}>
            <AddShoppingCartIcon />
            ADD TO CART
          </button>
          <div className={styles.link}>
            <div className={styles.item} onClick={handleAddToWishlist} >
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
            <div className={styles.detailsItem} onClick={() => setDescriptionExpanded(!descriptionExpanded)}>
              <span>Description</span>
              {descriptionExpanded ?
                (<RemoveIcon onClick={() => setDescriptionExpanded(!descriptionExpanded)} />)
                : <AddIcon />
              }

            </div>
            {descriptionExpanded &&
              <p>{item.desc}</p>
            }
            <hr />
            <div className={styles.detailsItem} onClick={() => setAdditionalInfoExpanded(!additionalInfoExpanded)}>
              <span>Additional Information</span>
              {additionalInfoExpanded ?
                <RemoveIcon onClick={() => setAdditionalInfoExpanded(!additionalInfoExpanded)} />
                :
                <AddIcon />
              }
            </div>
            {additionalInfoExpanded &&
              <p>100% cotton
                hand wash cold</p>}

            <hr />
            <div className={styles.detailsItem} onClick={() => setReturnsExpanded(!returnsExpanded)}>
              <span>Returns & Exchange</span>
              {returnsExpanded ?
                <RemoveIcon onClick={() => setReturnsExpanded(!returnsExpanded)} />
                :
                <AddIcon />
              }
            </div>
            {returnsExpanded &&
              <p>If you are not absolutely satisfied with your new nununu,
                you are more than welcome to return it in up to 14 days after receiving your package. </p>}
          </div>
        </div>
      </div>
      <div className={styles.bottom}>
        <h3>WE KNOW YOU'LL LIKE THIS</h3>
        <div className={styles.list}>
          {additionalItems().map(item => (
            <Card item={item} key={item.id} />
          ))}
        </div>
      </div>
    </div>
  )
}
