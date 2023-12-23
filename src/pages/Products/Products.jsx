import React, { useState } from 'react'
import styles from './Products.module.css'
import bg from '../../assets/Products/bg.jpg'
import List from '../../components/List/List'
import { useParams } from 'react-router-dom'

export const Products = () => {
  const [maxPrice,setMaxPrice] = useState(1000);
  const [sort,setSort] = useState(null);

  const catId = parseInt(useParams().id);
  return (
    <div className={styles.products}>
      <div className={styles.left}>
        <div className={styles.filterItem}>
          <h2 className={styles.h2}>Product Categories</h2>
          <div className={styles.inputItem}>
            <input type="checkbox" id='1' value={1} />
            <label htmlFor="1">Shoes</label>
          </div>
          <div className={styles.inputItem}>
            <input type="checkbox" id='2' value={1} />
            <label htmlFor="2">Skirts</label>
          </div>
          <div className={styles.inputItem}>
            <input type="checkbox" id='3' value={1} />
            <label htmlFor="3">Coats</label>
          </div>
        </div>
        <div className={styles.filterItem}>
          <h2 className={styles.h2}>Filter by price</h2>
          <div className={styles.inputItem}>
            <span>0</span>
            <input type="range" id='range' min={0} max={1000} onChange={(e)=>setMaxPrice(e.target.value)} />
            <span>1000</span>
          </div>
        </div>
        <div className={styles.filterItem}>
          <h2 className={styles.h2}>Sort by</h2>
          <div className={styles.inputItem}>
            <input type="radio" id='desc' value='desc' name='price' onChange={(e)=>setSort('asc')} />
            <label htmlFor="desc">Price (Lowest first)</label>
          </div>
          <div className={styles.inputItem}>
            <input type="radio" id='desc' value='desc' name='price' onChange={(e)=>setSort('desc')}/>
            <label htmlFor="desc">Price (Highest first)</label>
          </div>
        </div>
      </div>
      <div className={styles.right}>
        <img className={styles.catImg} src={bg} />
        <List catId={catId} maxPrice={maxPrice} sort={sort}/>
      </div>
    </div>
  )
}
