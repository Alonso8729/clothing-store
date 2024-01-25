import React from 'react'
import styles from './Wishlist.module.css'
import data from '../../Data'
import { Link } from 'react-router-dom'
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import { addToCart } from '../../redux/cartReducer';
import { useDispatch } from 'react-redux';

const Wishlist = () => {
    const filteredData = data.filter(item => item.id == 1 || item.id == 2)
    const dispatch = useDispatch()

    return (
        <div className={styles.wishlist}>
            {filteredData?.map((item) => (
                <div key={item.id} className={styles.item}>
                    <img className={styles.img} src={item.imgFront} ></img>
                    <div className={styles.details}>
                        <h3 className={styles.title}>{item.title}</h3>
                        <p className={styles.desc}>{item.desc?.substring(0, 100)}</p>
                    </div>
                    <div>
                        <AddShoppingCartIcon className={styles.add} onClick={() => {
                            const cartItem = {
                                id: item.id,
                                title: item.title,
                                desc: item.desc,
                                img: item.imgFront, // Using a local variable
                                price: item.newPrice,
                                quantity: 1
                            };
                            dispatch(addToCart(cartItem));
                        }} />
                        <DeleteOutlineIcon className={styles.delete} />
                    </div>
                </div>
            ))}


        </div>
    )
}

export default Wishlist