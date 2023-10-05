import PreachSection from './PreachsSection/PreachSection'
import Carrousel from './carrouselSection/Carrousel'
import OfferingSection from './offeringSection/OfferingSection'

const Home = () => {
  return (
    <div className='flex flex-wrap justify-center mt-20'>
      <Carrousel />
      <PreachSection />
      <OfferingSection />
    </div>
  )
}

export default Home
