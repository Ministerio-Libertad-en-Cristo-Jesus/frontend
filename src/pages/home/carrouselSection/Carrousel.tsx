import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules'
import { preachings } from '../../../utils/preachingInfo'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/scrollbar'
import Slide from './Slide'

const Carrousel = () => {
  const preachs = preachings.slice(0, 3)
  return (
    <Swiper
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={0}
      slidesPerView={1}
      navigation
      className='flex w-[100%] max-w-[1440px] header-carrousel'
      pagination={{ clickable: true }}>

      {preachs.map(preaching => (
        <SwiperSlide key={preaching.id}>
          <Slide title={preaching.title} content={preaching.content} image={preaching.image} pastor={preaching.pastor} date={preaching.date} id={preaching.id} />
        </SwiperSlide>
      ))}

    </Swiper>
  )
}

export default Carrousel
