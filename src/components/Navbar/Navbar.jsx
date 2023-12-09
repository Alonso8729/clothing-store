import React from 'react'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import SearchIcon from '@mui/icons-material/Search';
import PersonOutlinedIcon from '@mui/icons-material/PersonOutlined'; import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import en from '../../assets/img/en.png'
import { Link } from 'react-router-dom'
import styles from './Navbar.module.css'

export const Navbar = () => {
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
            <div className={styles.cartIcon}>
              <ShoppingCartOutlinedIcon />
              <span className={styles.itemsCounter}>0</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
