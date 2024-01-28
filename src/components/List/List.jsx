import React from 'react'
import styles from './List.module.css'
import Card from '../Card/Card'
import data from '../../Data.jsx'

const List = ({ catId, maxPrice, sort, subCats }) => {
    let filteredData = data.filter(item => item.catId.includes(catId) && item.newPrice <= maxPrice)

    if (sort) { // The user choose to sort items by price
        filteredData.sort((a, b) => {
            if (sort === 'asc')
                return a.newPrice - b.newPrice;
            else if (sort === 'desc')
                return b.newPrice - a.newPrice;
            else
                return 0;
        })
    }

    if (subCats.length > 0) {
        filteredData = filteredData.filter(item => subCats.includes(item.subCat));
    }

    return (
        <div className={styles.list}>
            {filteredData.map(item => (
                <Card item={item} key={item.id} />
            ))}
        </div>
    )
}

export default List