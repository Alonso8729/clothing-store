import React from 'react'
import styles from './Wishlist.module.css'
import data from '../../Data'
import { Link } from 'react-router-dom'
import DeleteIcon from '@mui/icons-material/Delete';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';

const Wishlist = () => {
    const filteredData = data.filter(item => item.id == 1 || item.id == 2)

    return (
        <div className={styles.wishlist}>
            {filteredData?.map((item) => (
                <Link to={`/clothing-store/product/${item.id}`}>
                    <div key={item.id} className={styles.item}>
                        <img className={styles.img} src={item.imgFront} ></img>
                        <div className={styles.details}>
                            <h2 className={styles.title}>{item.title}</h2>
                            <p className={styles.desc}>{item.desc?.substring(0, 100)}</p>
                        </div>
                        <div>
                            <AddShoppingCartIcon />
                            <DeleteIcon />
                        </div>
                    </div>
                </Link>
            ))}


        </div>
    )
}

export default Wishlist