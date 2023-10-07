import PreachSection from './PreachsSection/PreachSection'
import Carrousel from './carrouselSection/Carrousel'
import OfferingSection from './offeringSection/OfferingSection'
import PagesSection from './pagesSection/PagesSection'

const Home = () => {
  return (
    <div className='flex flex-col items-center justify-center mt-20'>
      <Carrousel />
      <PreachSection />
      <OfferingSection />
      <PagesSection />
    </div>
  )
}

export default Home
