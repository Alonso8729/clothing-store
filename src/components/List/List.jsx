import React from 'react'
import styles from './List.module.css'
import Card from '../Card/Card'
import data from '../../Data.jsx'

const List = ({ catId }) => {
    const filteredData = data.filter(item => item.catId === catId)

    return (
        <div className={styles.list}>
            {filteredData.map(item => (
                <Card item={item} key={item.id} />
            ))}
        </div>
    )
}

export default List