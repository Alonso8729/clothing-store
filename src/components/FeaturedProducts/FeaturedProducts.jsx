import React, { useEffect, useState } from 'react'
import styles from './FeaturedProducts.module.css'
import Card from '../Card/Card'
import imgOneFront from '../../assets/Cards/img1-front.jpg'
import imgOneBack from '../../assets/Cards/img1-back.jpg'
import imgTwoFront from '../../assets/Cards/img2-front.jpg'
import imgTwoBack from '../../assets/Cards/img2-back.jpg'
import imgThreeFront from '../../assets/Cards/img3-front.jpg'
import imgThreeBack from '../../assets/Cards/img3-back.jpg'
import imgFourFront from '../../assets/Cards/img4-front.jpg'
import imgFourBack from '../../assets/Cards/img4-back.jpg'
import imgFiveFront from '../../assets/Cards/img5-front.jpg'
import imgFiveBack from '../../assets/Cards/img5-back.jpg'
import data from '../../Data'

const FeaturedProducts = ({ type }) => {

    //Write const data with couple of featured products
    const featuredProducts = data.filter(item => item.id >= 1 && item.id<=4);
    const trendingProducts = data.filter(item=> item.id >=5 && item.id <=8);

    const selectedProducts = type === 'Featured' ? featuredProducts:trendingProducts


    return (
        <div className={styles.featuredProducts}>
            <div className={styles.top}>
                <h1 className={styles.h1}>{type} Products</h1>
                <p className={styles.p}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi iste dignissimos omnis vitae?
                    Tempora quas possimus eligendi animi ratione,
                    id atque esse veniam reprehenderit quo corporis unde eaque fugiat ipsa.</p>
            </div>
            <div className={styles.bottom}>
                {selectedProducts?.map(item => (
                    <Card item={item} key={item.id} />
                ))}
               
            </div>
        </div>
    )
}

export default FeaturedProducts
