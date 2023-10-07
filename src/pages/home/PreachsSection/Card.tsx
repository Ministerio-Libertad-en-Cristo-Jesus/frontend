import { type Preach } from '../../../types/types'
import { dateSeter } from '../../../utils/dateSeter'

const Card = ({ title, pastor, content, date, image }: Preach) => {
  return (
    <div className='w-60 min-w-[15rem] lg:min-w-[20rem] lg:w-80 hover:bg-[#e1e1e1] rounded-t-xl rounded-b-xl hover:shadow-md lg:hover:shadow-xl hover:cursor-pointer transition-all duration-200'>
      <img
      className=' w-60 min-w-[15rem] lg:min-w-[20rem] lg:w-80 rounded-t-xl h-36 lg:h-44 object-cover'
      src={image}
      alt={title} />
      <div className='m-2 lg:m-5'>
        <h2 className='font-noto font-bold text-blueI text-base lg:text-lg'>{title}</h2>
        <p className='font noto text-blueI mt-1 font-medium text-sm lg:text-base'>{`Pastor ${pastor}`}</p>
        <p className='font-noto text-blueI mt-2 font-medium text-sm lg:text-base line-clamp-4'>{content}</p>
        <p className='font-noto text-gray-600 mt-3 text-xs lg:text-sm'>{dateSeter(date)}</p>
      </div>

    </div>
  )
}

export default Card
