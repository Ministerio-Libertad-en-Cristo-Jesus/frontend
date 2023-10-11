import { useEffect } from 'react'
import PreachSection from './PreachsSection/PreachSection'
import Carrousel from './carrouselSection/Carrousel'
import MapSection from './mapsSection/MapSection'
import OfferingSection from './offeringSection/OfferingSection'
import PagesSection from './pagesSection/PagesSection'
import SocialMediaSection from './socialMediaSection/SocialMediaSection'

const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <div className='flex flex-col items-center justify-center mt-20'>
      <Carrousel />
      <PreachSection />
      <OfferingSection />
      <PagesSection />
      <MapSection />
      <SocialMediaSection />
    </div>
  )
}

export default Home
