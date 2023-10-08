import PreachSection from './PreachsSection/PreachSection'
import Carrousel from './carrouselSection/Carrousel'
import MapSection from './mapsSection/MapSection'
import OfferingSection from './offeringSection/OfferingSection'
import PagesSection from './pagesSection/PagesSection'

const Home = () => {
  return (
    <div className='flex flex-col items-center justify-center mt-20'>
      <Carrousel />
      <PreachSection />
      <OfferingSection />
      <PagesSection />
      <MapSection />
    </div>
  )
}

export default Home
