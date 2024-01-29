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
import Wishlist from '../Wishlist/Wishlist';
import SearchBar from '../SearchBar/SearchBar';


export const Navbar = () => {
  const [cartOpen, setCartOpen] = useState(false)
  const products = useSelector(state => state.cart.products)
  const [openSearch, setOpenSearch] = useState(false)
  const cartRef = useRef(null);
  const wishRef = useRef(null)
  const [wishlistOpen, setWishlistOpen] = useState(false)
  const closeCart = () => {
    setCartOpen(false);
  };

  const closeSearch = () =>{
    setOpenSearch(false)
  }

  const closeWishlist = () => {
    setWishlistOpen(false);
  }

  useEffect(() => {
    const handleOutsideClick = (e) => {
      if (wishRef.current && !wishRef.current.contains(e.target))
        closeWishlist()
    }
    if (wishlistOpen)
      document.addEventListener('click', handleOutsideClick)
    return () => {
      document.removeEventListener('click', handleOutsideClick)
    }
  }, [wishlistOpen])

  useEffect(() => {
    const handleOutsideClick = (e) => {
      if (cartRef.current && !cartRef.current.contains(e.target)) {
        closeCart();
      }
    };

    if (cartOpen) {
      document.addEventListener('click', handleOutsideClick);
    }

    return () => {
      document.removeEventListener('click', handleOutsideClick);
    };
  }, [cartOpen]);

  return (
    <div className={styles.top}>
      {openSearch ? (
          <SearchBar closeSearch={closeSearch}/>
        ) :
          (
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
                  <Link className={styles.linkStyle} to='products/2'>Women</Link>
                </div>
                <div className={styles.item}>
                  <Link className={styles.linkStyle} to='products/4'>Men</Link>
                </div>
                <div className={styles.item}>
                  <Link className={styles.linkStyle} to='products/6'>Kids</Link>
                </div>
              </div>

              <div className={styles.center}>
                <Link className={styles.linkStyle} to=''>Trendify</Link>

              </div>

              <div className={styles.right}>

                <Link className={styles.linkStyle} to=''>About</Link>
                <Link className={styles.linkStyle} to=''>Contact</Link>
                <div className={styles.icons}>
                  <div className={styles.searchBar}>
                    <SearchIcon onClick={() => setOpenSearch(true)} />
                  </div>
                  <PersonOutlinedIcon />
                  <div className={styles.wish} onClick={() => setWishlistOpen(!wishlistOpen)} ref={wishRef}>
                    <FavoriteBorderOutlinedIcon />
                  </div>
                  <div className={styles.cartIcon} onClick={() => setCartOpen(!cartOpen)} ref={cartRef}>
                    <ShoppingCartOutlinedIcon />
                    <span className={styles.itemsCounter}>{products.length}</span>
                  </div>
                </div>
              </div>
            </div>
          
        {cartOpen && <Cart />}
        {wishlistOpen && <Wishlist />}
      </div>
      )}
    </div>

  )

}
