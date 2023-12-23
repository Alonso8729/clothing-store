import React from 'react'
import styles from './Categories.module.css'
import c1 from '../../assets/Categories/c1.jpg'
import c2 from '../../assets/Categories/c2.jpg'
import c3 from '../../assets/Categories/c3.jpg'
import c4 from '../../assets/Categories/c4.jpg'
import c5 from '../../assets/Categories/c5.jpg'
import c6 from '../../assets/Categories/c6.jpg'
import { Link } from 'react-router-dom'

const Categories = () => {
    return (
        <div className={styles.categories}>
            <div className={styles.col}>
                <div className={styles.row}>
                    <img src={c1} className={styles.img} />
                    <button className={styles.button}>
                        <Link className='link' to='products/1'>
                            Sale
                        </Link>
                    </button>
                </div>
                <div className={styles.row}>
                    <img src={c2} className={styles.img} />
                    <button className={styles.button}>
                        <Link to='products/2' className='link'>
                            Women
                        </Link>
                    </button>
                </div>
            </div>
            <div className={styles.col}>
                <div className={styles.row}>
                    <img src={c3} className={styles.img} />
                    <button className={styles.button}>
                        <Link to='products/3' className='link'>
                            Men
                        </Link>
                    </button>
                </div>
            </div>
            <div className={`${styles.col} ${styles.largeCol}`}>
                <div className={styles.row}>
                    <div className={styles.col}>
                        <div className={styles.row}>
                            <img src={c4} className={styles.img} />
                            <button className={styles.button}>
                                <Link to='products/4' className='link'>
                                    New Season
                                </Link>
                            </button>
                        </div>
                    </div>
                    <div className={styles.col}>
                        <div className={styles.row}>
                            <img src={c5} className={styles.img} />
                            <button className={styles.button}>
                                <Link to='products/5' className='link'>
                                    Accessorries
                                </Link>
                            </button>
                        </div>
                    </div>
                </div>
                <div className={styles.row}>
                    <img src={c6} className={styles.img} />
                    <button className={styles.button}>
                        <Link to='products/6' className='link'>
                            Shoes
                        </Link>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Categories