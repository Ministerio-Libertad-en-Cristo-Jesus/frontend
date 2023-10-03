import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules'
import { preachings } from '../../utils/preachingInfo'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/scrollbar'
import Slide from './Slide'

const Carrousel = () => {
  return (
    <Swiper
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={0}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}>

      {preachings.map(preaching => (
        <SwiperSlide key={preaching.id}>
          <Slide title={preaching.title} content={preaching.content} image={preaching.image} id={preaching.id} />
        </SwiperSlide>
      ))}

    </Swiper>
  )
}

export default Carrousel
