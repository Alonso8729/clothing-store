import React from 'react'
import styles from './Cart.module.css'
import imgOneFront from '../../assets/Cards/img1-front.jpg'
import imgOneBack from '../../assets/Cards/img1-back.jpg'
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';

const Cart = () => {
    const data = [
        {
            id: 1,
            imgFront: imgOneFront,
            imgBack: imgOneBack,
            title: 'Cropped Hood Sweatshirt',
            isNew: true,
            oldPrice: 19,
            newPrice: 12,
            desc: 'Cotton sweatshirt. Hood and long sleeves. Matching tonal rib trim'
        },
    ]
    return (
        <div className={styles.cart}>
            <h1 className={styles.h1}>
                Products in your cart
            </h1>
            {data?.map(item => (
                <div key={item.id} className={styles.item}>
                    <img src={item.imgFront} alt="" className={styles.img} />
                    <div className={styles.details}>
                        <h1 className={styles.title}>
                            {item.title}
                        </h1>
                        <p>{item.desc?.substring(0, 100)}</p>
                        <div className={styles.price}>1 X ${item.newPrice}</div>
                    </div>
                    <DeleteOutlineIcon className={styles.delete} />
                </div>

            ))}
            <div className={styles.total}>
                <span>SUBTOTAL</span>
                <span>$123</span>
            </div>
            <button className={styles.btn}>PROCEED TO CHECKOUT</button>
            <span className={styles.reset}>Reset Cart</span>
        </div>

    )
}

export default Cart