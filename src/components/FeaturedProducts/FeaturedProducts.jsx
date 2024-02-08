import styles from './FeaturedProducts.module.css'
import Card from '../Card/Card'
import data from '../../Data'

const FeaturedProducts = ({ type }) => {

    //Write const data with couple of featured products
    const featuredProducts = data.filter(item => item.id >= 1 && item.id <= 4);
    const trendingProducts = data.filter(item => item.id >= 5 && item.id <= 8);

    const selectedProducts = type === 'Featured' ? featuredProducts : trendingProducts


    return (
        <div className={styles.featuredProducts}>
            <div className={styles.top}>
                <h1 className={styles.h1}>{type} Products</h1>
                <p className={styles.p}>Explore Trendify's featured clothing collection, where contemporary trends meet timeless elegance.</p>
            </div>

            <div className={styles.wrapper}>
                <div className={styles.bottom}>
                    {selectedProducts?.map(item => (
                        <Card item={item} key={item.id} />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default FeaturedProducts
