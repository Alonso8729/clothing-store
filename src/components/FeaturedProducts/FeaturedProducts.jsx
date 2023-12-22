import React from 'react'
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

const FeaturedProducts = ({ type }) => {
    const data = [
        {
            id: 1,
            imgFront: imgOneFront,
            imgBack: imgOneBack,
            title: 'Cropped Hood Sweatshirt',
            isNew: true,
            oldPrice: 19,
            newPrice: 12
        },
        {
            id: 2,
            imgFront: imgTwoFront,
            imgBack: imgTwoBack,
            title: 'Cotton Sweatshirt',
            isNew: true,
            oldPrice: 19,
            newPrice: 12
        },
        {
            id: 3,
            imgFront: imgThreeFront,
            imgBack: imgThreeBack,
            title: 'Hooded Overshirt',
            isNew: false,
            oldPrice: 24,
            newPrice: 14
        },
        {
            id: 4,
            imgFront: imgFourFront,
            imgBack: imgFourBack,
            title: 'Sweatshirt with Hooded Collar ',
            isNew: false,
            oldPrice: 27,
            newPrice: 20
        },
    ]


    return (
        <div className={styles.featuredProducts}>
            <div className={styles.top}>
                <h1 className={styles.h1}>{type} Products</h1>
                <p className={styles.p}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi iste dignissimos omnis vitae?
                    Tempora quas possimus eligendi animi ratione,
                    id atque esse veniam reprehenderit quo corporis unde eaque fugiat ipsa.</p>
            </div>
            <div className={styles.bottom}>
                {data.map(item => (
                    <Card item={item} key={item.id} />
                ))}
            </div>
        </div>
    )
}

export default FeaturedProducts
