import React from 'react'
import styles from './List.module.css'
import Card from '../Card/Card'
import imgOneFront from '../../assets/Cards/img1-front.jpg'
import imgOneBack from '../../assets/Cards/img1-back.jpg'
import imgTwoFront from '../../assets/Cards/img2-front.jpg'
import imgTwoBack from '../../assets/Cards/img2-back.jpg'
import imgThreeFront from '../../assets/Cards/img3-front.jpg'
import imgThreeBack from '../../assets/Cards/img3-back.jpg'
import imgFourFront from '../../assets/Cards/img4-front.jpg'
import imgFourBack from '../../assets/Cards/img4-back.jpg'
import f1f from '../../assets/Women/f1-f.jpg'
import f1b from '../../assets/Women/f1-b.jpg'
import f2f from '../../assets/Women/f2-f.jpg'
import f2b from '../../assets/Women/f2-b.jpg'
import f3f from '../../assets/Women/f3-f.jpg'
import f3b from '../../assets/Women/f3-b.jpg'
import f4f from '../../assets/Women/f4-f.jpg'
import f4b from '../../assets/Women/f4-b.jpg'

const List = () => {
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
        {
            id: 5,
            imgFront: f1f,
            imgBack: f1b,
            title: 'Open front coat',
            isNew: false,
            oldPrice: 37,
            newPrice: 30
        },
        {
            id: 6,
            imgFront: f2f,
            imgBack: f2b,
            title: 'Fur coat',
            isNew: false,
            oldPrice: 77,
            newPrice: 65,
        },
        {
            id: 7,
            imgFront: f3f,
            imgBack: f3b,
            title: 'Short jacket',
            isNew: false,
            oldPrice: 47,
            newPrice: 38,
        },
        {
            id: 8,
            imgFront: f4f,
            imgBack: f4b,
            title: 'Biker jacket',
            isNew: false,
            oldPrice: 60,
            newPrice: 55,
        },
    ]
    return (
        <div className={styles.list}>
            {data.map(item => (
                <Card item={item} key={item.id} />
            ))}
        </div>
    )
}

export default List