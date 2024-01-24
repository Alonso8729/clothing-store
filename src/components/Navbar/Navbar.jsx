import React, { useState, useRef, useEffect } from 'react';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import SearchIcon from '@mui/icons-material/Search';
import PersonOutlinedIcon from '@mui/icons-material/PersonOutlined'; import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import en from '../../assets/img/en.png'
import { Link } from 'react-router-dom'
import styles from './Navbar.module.css'
import Cart from '../Cart/Cart';
import { useSelector } from 'react-redux'
import Wishlist from '../WIshlist/Wishlist';

export const Navbar = () => {
  const [cartOpen, setCartOpen] = useState(false)
  const products = useSelector(state => state.cart.products)
  const cartRef = useRef(null);

  const closeCart = () => {
    setCartOpen(false);
  };

  useEffect(() => {
    const handleOutsideClick = (e) => {
      if (cartRef.current && !cartRef.current.contains(e.target)) {
        // Clicked outside the cart, close it
        closeCart();
      }
    };

    if (cartOpen) {
      // Attach a global click event listener when the cart is open
      document.addEventListener('click', handleOutsideClick);
    }

    // Clean up the event listener when the component unmounts or when the cart is closed
    return () => {
      document.removeEventListener('click', handleOutsideClick);
    };
  }, [cartOpen]);

  return (
    <div className={styles.navbar}>
      <div className={styles.wrapper}>
        <div className={styles.left}>
          <div className={styles.item}>
            <img src={en} />
            <KeyboardArrowDownIcon />
          </div>
          <div className={styles.item}>
            <span>USD</span>
            <KeyboardArrowDownIcon />
          </div>
          <div className={styles.item}>
            <Link className={styles.linkStyle} to='products/1'>Women</Link>
          </div>
          <div className={styles.item}>
            <Link className={styles.linkStyle} to='products/2'>Men</Link>
          </div>
          <div className={styles.item}>
            <Link className={styles.linkStyle} to='products/3'>Kids</Link>
          </div>
        </div>
        <div className={styles.center}>
          <Link className={styles.linkStyle} to=''>Trendify</Link>
        </div>
        <div className={styles.right}>
          <Link className={styles.linkStyle} to=''>About</Link>
          <Link className={styles.linkStyle} to=''>Contact</Link>
          <div className={styles.icons}>
            <SearchIcon />
            <PersonOutlinedIcon />
            <FavoriteBorderOutlinedIcon />
            <div className={styles.cartIcon} onClick={() => setCartOpen(!cartOpen)} ref={cartRef}>
              <ShoppingCartOutlinedIcon />
              <span className={styles.itemsCounter}>{products.length}</span>
            </div>
          </div>
        </div>
      </div>
      {cartOpen && <Cart />}
      <Wishlist/>
    </div>
  )
}
