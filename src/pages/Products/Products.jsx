import React, { useState, useEffect } from 'react'
import styles from './Products.module.css'
import List from '../../components/List/List'
import { useParams } from 'react-router-dom'
import TuneIcon from '@mui/icons-material/Tune';
import { useLocation } from 'react-router-dom';

export const Products = () => {
  const [maxPrice, setMaxPrice] = useState(250);
  const [sort, setSort] = useState(null);
  const [subCats, setSubCats] = useState([]);
  const [filterMenu, setFilterMenu] = useState(true)
  const searchResult = useParams().id
  const catId = parseInt(useParams().id);
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  const handleChange = (e) => {
    const isChecked = e.target.checked;
    const val = e.target.value
    setSubCats((prevSubCats) =>
      isChecked ? [...prevSubCats, val] : prevSubCats.filter((item) => item !== val)
    );
  }

  const category = () => {
    switch (catId) {
      case 1:
        return 'Sale'
      case 2:
        return 'Women'
      case 3:
        return 'New Arrivals'
      case 4:
        return 'Men'
      case 5:
        return "Accessories"
      case 6:
        return 'Kids'
      default:
        return null
    }
  }

  return (
    <div className={styles.products}>
      <h1 className={styles.catHeader}>{category() && category()}</h1>
      <div className={styles.container}>
        <div className={styles.filterDiv} onClick={() => setFilterMenu(!filterMenu)}>
          <div className={styles.filterIcon}>
            <TuneIcon />
            <span>Filter</span>
          </div>
          {filterMenu &&
            <div className={styles.filterMenu}>
              <div className={styles.filterItem}>
                <h2 className={styles.h2}>Product Categories</h2>
                <div className={styles.inputItem}>
                  <input type="checkbox" id='1' onChange={handleChange} value={'shirt'} checked={subCats.includes('shirt')} />
                  <label htmlFor="1">Shirts</label>
                </div>
                <div className={styles.inputItem}>
                  <input type="checkbox" id='2' onChange={handleChange} value={'dress'} checked={subCats.includes('dress')} />
                  <label htmlFor="2">Dresses</label>
                </div>
                <div className={styles.inputItem}>
                  <input type="checkbox" id='3' onChange={handleChange} value={'coat'} checked={subCats.includes('coat')} />
                  <label htmlFor="3">Coats</label>
                </div>
                <div className={styles.inputItem}>
                  <input type="checkbox" id='4' onChange={handleChange} value={'jacket'} checked={subCats.includes('jacket')} />
                  <label htmlFor="4">Jackets</label>
                </div>
              </div>
              <div className={styles.filterItem}>
                <h2 className={styles.h2}>Sort by</h2>
                <div className={styles.inputItem}>
                  <input type="radio" id='desc' value='desc' name='price' checked={sort === 'asc'} onChange={() => setSort('asc')} />
                  <label htmlFor="desc">Price (Lowest first)</label>
                </div>
                <div className={styles.inputItem}>
                  <input type="radio" id='desc' value='desc' name='price' checked={sort === 'desc'} onChange={() => setSort('desc')} />
                  <label htmlFor="desc">Price (Highest first)</label>
                </div>
              </div>
            </div>
          }
        </div>
        <div className={styles.items}>
          <List searchInput={searchResult} catId={catId} maxPrice={maxPrice} sort={sort} subCats={subCats} />
        </div>
      </div>
    </div>
  )
}
