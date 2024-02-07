import React, { useState } from 'react'
import styles from './Products.module.css'
import bg from '../../assets/Products/bg.jpg'
import List from '../../components/List/List'
import { useParams } from 'react-router-dom'
import TuneIcon from '@mui/icons-material/Tune';

export const Products = () => {
  const [maxPrice, setMaxPrice] = useState(250);
  const [sort, setSort] = useState(null);
  const [subCats, setSubCats] = useState([]);
  const [filterMenu, setFilterMenu] = useState(false)
  const searchResult = useParams().id
  const catId = parseInt(useParams().id);


  const handleChange = (e) => {
    const isChecked = e.target.checked;
    const val = e.target.value
    setSubCats((prevSubCats) =>
      isChecked ? [...prevSubCats, val] : prevSubCats.filter((item) => item !== val)
    );
  }

  const bgImages = ['https://images.pexels.com/photos/5705102/pexels-photo-5705102.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    'https://images.pexels.com/photos/1536619/pexels-photo-1536619.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    'https://images.pexels.com/photos/1049317/pexels-photo-1049317.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    bg,
    'https://images.pexels.com/photos/264591/pexels-photo-264591.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    'https://images.pexels.com/photos/2787279/pexels-photo-2787279.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
  ];

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
      <div className={styles.items}>
        <div className={styles.controls}>
          <div className={styles.filterDiv} onClick={() => setFilterMenu(!filterMenu)}>
            <TuneIcon />
            <span>Filter</span>
          </div>
          {filterMenu &&
            <div className={styles.filterMenu}>
              <div className={styles.filterItem}>
                <h2 className={styles.h2}>Product Categories</h2>
                <div className={styles.inputItem}>
                  <input type="checkbox" id='1' onChange={handleChange} value={'shirt'} />
                  <label htmlFor="1">Shirts</label>
                </div>
                <div className={styles.inputItem}>
                  <input type="checkbox" id='2' onChange={handleChange} value={'dress'} />
                  <label htmlFor="2">Dresses</label>
                </div>
                <div className={styles.inputItem}>
                  <input type="checkbox" id='3' onChange={handleChange} value={'coat'} />
                  <label htmlFor="3">Coats</label>
                </div>
                <div className={styles.inputItem}>
                  <input type="checkbox" id='4' onChange={handleChange} value={'jacket'} />
                  <label htmlFor="4">Jackets</label>
                </div>
              </div>
              <div className={styles.filterItem}>
                <h2 className={styles.h2}>Filter by price</h2>
                <div className={styles.inputItem}>
                  <span>0</span>
                  <input type="range" id='range' min={0} max={250} onChange={(e) => setMaxPrice(e.target.value)} />
                  <span>1000</span>
                </div>
              </div>
              <div className={styles.filterItem}>
                <h2 className={styles.h2}>Sort by</h2>
                <div className={styles.inputItem}>
                  <input type="radio" id='desc' value='desc' name='price' onChange={(e) => setSort('asc')} />
                  <label htmlFor="desc">Price (Lowest first)</label>
                </div>
                <div className={styles.inputItem}>
                  <input type="radio" id='desc' value='desc' name='price' onChange={(e) => setSort('desc')} />
                  <label htmlFor="desc">Price (Highest first)</label>
                </div>
              </div>
            </div>
          }
        </div>
        {/*<img className={styles.catImg} src={bgImages[catId - 1]} /> */}
        <List searchInput={searchResult} catId={catId} maxPrice={maxPrice} sort={sort} subCats={subCats} />
      </div>
    </div >
  )
}
