import PreachSection from './PreachsSection/PreachSection'
import Carrousel from './carrouselSection/Carrousel'

const Home = () => {
  return (
    <div className='flex flex-wrap justify-center mt-20'>
      <Carrousel />
      <PreachSection />
    </div>
  )
}

export default Home
