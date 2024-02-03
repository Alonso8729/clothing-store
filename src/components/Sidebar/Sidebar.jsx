import React from 'react'
import styles from './Sidebar.module.css'
import { Link } from 'react-router-dom'
import CloseIcon from '@mui/icons-material/Close';

const Sidebar = ({toggleMenu}) => {
    return (
        <div className={styles.sidebar}>
            <CloseIcon className={styles.close} onClick={toggleMenu}/>
            <ul className={styles.categories}>
                <Link to='products/2' className='link' onClick={toggleMenu}>
                    <li className={styles.list}>Women</li>
                </Link>
                <Link to='products/4' className='link' onClick={toggleMenu}>
                    <li className={styles.list}>Men</li>
                </Link>
                <Link to='products/6' className='link' onClick={toggleMenu}>
                    <li className={styles.list}>Kids</li>
                </Link>
                <Link to='products/5' className='link' onClick={toggleMenu}>
                    <li className={styles.list}>Accessorries</li>
                </Link>
                <Link to='products/3' className='link' onClick={toggleMenu}>
                    <li className={styles.list}>New Season</li>
                </Link>
                <Link className='link' to='products/1' onClick={toggleMenu}>
                    <li className={styles.list}>On Sale</li>
                </Link>
            </ul>
        </div>
    )
}

export default Sidebar