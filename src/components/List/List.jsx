import React from 'react'
import styles from './List.module.css'
import Card from '../Card/Card'
import data from '../../Data.jsx'

const List = ({ searchInput, catId, maxPrice, sort, subCats }) => {
    const filteredData = () => {
        if (!searchInput || searchInput === '')
            return [];
        let filteredItems = data.filter(item => (
            item.catId.includes(catId) && item.newPrice <= maxPrice ||
            searchInput && (searchInput.toLowerCase() === item.title.toLowerCase() ||
                searchInput.toLowerCase() === item.productType.toLowerCase() ||
                item.desc.includes(searchInput.toLowerCase()))
        )
        )
        if (sort) { // The user choose to sort items by price
            filteredItems.sort((a, b) => {
                if (sort === 'asc')
                    return a.newPrice - b.newPrice;
                else if (sort === 'desc')
                    return b.newPrice - a.newPrice;
                else
                    return 0;
            })
        }
        if (subCats.length > 0) {
            filteredItems = filteredItems.filter(item => subCats.includes(item.subCat));
        }
        return filteredItems
    }


    return (
        <div className={styles.list}>
            {filteredData().map(item => (
                <Card item={item} key={item.id} />
            ))}
        </div>
    )
}

export default List