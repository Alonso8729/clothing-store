import React, { useState } from 'react'
import styles from './Cart.module.css'
import imgOneFront from '../../assets/Cards/img1-front.jpg'
import imgOneBack from '../../assets/Cards/img1-back.jpg'
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import { useSelector, useDispatch } from "react-redux"
import { deleteFromCart, resetCart } from '../../redux/cartReducer';


const Cart = () => {
    const products = useSelector(state => state.cart.products)
    const dispatch = useDispatch();
    const totalPrice = () => {
        let total = 0;
        products.forEach(element => {
            total += element.quantity * element.price
        });
        return total.toFixed(2);
    }

    return (
        <div className={styles.cart}>
            <h1 className={styles.h1}>
                {products.length === 0 ? 'No':''} Products in your cart
            </h1>
            {products?.map(item => (
                <div key={item.id} className={styles.item}>
                    <img src={item.img} alt="" className={styles.img} />
                    <div className={styles.details}>
                        <h1 className={styles.title}>
                            {item.title}
                        </h1>
                        <p>{item.desc?.substring(0, 100)}</p>
                        <div className={styles.price}>{item.quantity} X ${item.price}</div>
                    </div>
                    <DeleteOutlineIcon className={styles.delete} onClick={() => dispatch(deleteFromCart(item.id))} />
                </div>

            ))}
            <div className={styles.total}>
                <span>SUBTOTAL</span>
                <span>${totalPrice()}</span>
            </div>
            <button className={styles.btn}>PROCEED TO CHECKOUT</button>
            <span className={styles.reset} onClick={() => dispatch(resetCart())}>Reset Cart</span>
        </div>

    )
}

export default Cart