import React from 'react'
import styles from './Wishlist.module.css'
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import { addToCart } from '../../redux/cartReducer';
import { removeFromWishlist } from '../../redux/wishlistReducer'
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const Wishlist = () => {
    const wishlistItems = useSelector((state) => state.wishlist?.products || []);
    const dispatch = useDispatch()

    return (
        <div className={styles.wishlist}>
            <h1 className={styles.h1}>{wishlistItems.length === 0 ? 'Wishlist is empty' : ''}</h1>
            {wishlistItems?.map((item) => (
                    <div key={item.id} className={styles.item}>
                        <img className={styles.img} src={item.img} ></img>
                        <div className={styles.details}>
                            <h3 className={styles.title}>{item.title}</h3>
                            <p className={styles.desc}>{item.desc?.substring(0, 150)}</p>
                        </div>
                        <div>
                            <AddShoppingCartIcon className={styles.add} onClick={() => {
                                dispatch(addToCart(item));
                            }} />
                            <DeleteOutlineIcon className={styles.delete} onClick={() => dispatch(removeFromWishlist(item.id))} />
                        </div>
                    </div>
            ))}
        </div>
    )
}

export default Wishlist