import MarkerIcon from '../../../assets/componentSVG/MarkerIcon'
import { type CheckMapType } from '../../../types/types'

const CheckMap = ({ isSelected, changeMap, title, direction, name, name2, whatSelected }: CheckMapType) => {
  const handleClick = () => {
    if (isSelected) {
      // eslint-disable-next-line no-useless-return
      return
    } else {
      changeMap({
        ...whatSelected,
        [name2]: false,
        [name]: true
      }
      )
    }
  }

  return (
    <div onClick={handleClick} className={`flex items-center max-w-[200px] flex-col border-2 ${isSelected ? 'border-whiteI' : 'border-blueI'} hover:cursor-pointer rounded-lg p-3 transition-all duration-300`}>
      <MarkerIcon />
      <h3 className='font-noto text-center font-bold text-lg text-whiteI'>{title}</h3>
      <p id='parrafoMap' className='font-noto text-center font-light text-whiteI'>{direction}</p>
    </div>
  )
}

export default CheckMap
