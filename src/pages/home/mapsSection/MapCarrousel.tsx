import { type MapCarrouselType } from '../../../types/types'
import { mapSlides } from '../../../utils/mapsInfo'
import MapSlide from './MapSlide'

const MapCarrousel = ({ whatSelected }: MapCarrouselType) => {
  return (
    <div className={`flex px-10 lg:px-24 w-full overflow-hidden ${whatSelected.orlando ? 'justify-start' : 'justify-end'} transition-all duration-300`}>
      {
        mapSlides.map((slide, index) => (
          <MapSlide
          key={index}
          {...slide}
          rigth={slide.name === 'orlando'}
          isSelected={whatSelected[slide.name]}
          />
        ))
      }
    </div>
  )
}

export default MapCarrousel
