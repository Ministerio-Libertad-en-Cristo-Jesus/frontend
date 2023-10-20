import { useNavigate } from 'react-router-dom'
import { type Preach } from '../../types/types'
import { dateSeter } from '../../utils/dateSeter'

const Card = ({ title, pastor, content, date, image, id }: Preach) => {
  const navigate = useNavigate()
  return (
    <div
    onClick={() => { navigate(`/preach/${id}`) }}
    className='w-[14rem] lg:w-[17rem] hover:bg-[#e1e1e1] rounded-t-xl rounded-b-xl hover:shadow-md lg:hover:shadow-xl hover:cursor-pointer transition-all duration-200'>
      <img
      className='w-[14rem] lg:w-[17rem] rounded-t-xl h-36 lg:h-44 object-cover'
      src={image}
      alt={title} />
      <div className='m-2 lg:m-5'>
        <h2 className='font-noto font-bold text-blueI text-base lg:text-lg'>{title}</h2>
        <p className='font noto text-blueI mt-1 font-medium text-sm lg:text-base'>{`Pastor ${pastor}`}</p>
        <p className='font-noto text-blueI mt-2 font-medium text-sm lg:text-base line-clamp-2'>{content[0]}</p>
        <p className='font-noto text-gray-600 mt-3 text-xs lg:text-sm'>{dateSeter(date)}</p>
      </div>

    </div>
  )
}

export default Card
