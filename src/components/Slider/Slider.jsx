import styles from './Slider.module.css'
import img3 from '../../assets/img/kids.jpg'
import img1 from '../../assets/img/pexels-cottonbro-studio-7653718.jpg'
import img2 from '../../assets/img/women.jpg'
import WestIcon from '@mui/icons-material/West';
import EastIcon from '@mui/icons-material/East';
import React, { useState, useEffect } from 'react'



 const Slider = () => {
    const [currSlide, setCurrSlide] = useState(0)
    const imgArray = [img1, img2, img3]

    useEffect(() => {
        const timeoutId = setTimeout(() => {
            nextSlide();
        }, 5000)
        return () => clearTimeout(timeoutId);
    }, [currSlide])

    const prevSlide = () => {
        setCurrSlide(currSlide === 0 ? imgArray.length - 1 : (prev) => prev - 1);
    }

    const nextSlide = () => {
        setCurrSlide(currSlide === imgArray.length - 1 ? 0 : (next) => next + 1)
    }
    return (
        <div className={styles.slider} >
            <div className={styles.container} style={{ transform: `translateX(-${currSlide * 100}vw)` }}>
                <img className={styles.img} src={imgArray[0]} />
                <img className={styles.img} src={imgArray[1]} />
                <img className={styles.img} src={imgArray[2]} />
            </div>
            <div className={styles.icons}>
                <div className={styles.icon} onClick={prevSlide}>
                    <WestIcon />
                </div>
                <div className={styles.icon} onClick={nextSlide}>
                    <EastIcon />
                </div>
            </div>
        </div>
    )
}

export default Slider