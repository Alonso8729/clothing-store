import React from 'react'
import styles from './Contact.module.css'
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import GoogleIcon from '@mui/icons-material/Google';
import PinterestIcon from '@mui/icons-material/Pinterest';


const Contact = () => {
    return (
        <div className={styles.contact}>
            <div className={styles.wrapper}>
                <span>BE IN TOUCH WITH US: </span>
                <div className={styles.mail}>
                    <input className={styles.input} type="text" placeholder='Enter your email' />
                    <button className={styles.btn}>JOIN US</button>
                </div>
                <div className={styles.icons}>
                    <FacebookIcon />
                    <InstagramIcon />
                    <TwitterIcon />
                    <GoogleIcon />
                    <PinterestIcon />
                </div>
            </div>
        </div>
    )
}

export default Contact