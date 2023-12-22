import Slider from '../../components/Slider/Slider'
import FeaturedProducts from '../../components/FeaturedProducts/FeaturedProducts'
export const Home = () => {
  return (
    <div>
      <Slider />
      <FeaturedProducts type='Featured' />
      <FeaturedProducts type='Trending' />
    </div>
  )
}
