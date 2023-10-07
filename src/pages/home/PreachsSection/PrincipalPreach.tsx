import Button from '../../../components/Button'
import { type Preach } from '../../../types/types'
import { dateSeter } from '../../../utils/dateSeter'

const PrincipalPreach = ({ title, pastor, date, content, image }: Preach) => {
  return (
    <div className='flex flex-wrap w-full lg:flex-nowrap items-center p-10 lg:p-24 max-w-[1440px]'>

      <img
      className=' lg:w-[420px] h-[370px] lg:h-[420px] mr-12 object-cover rounded-xl'
      src={image}
      alt={title} />

      <div className='flex flex-col mt-8 lg:mt-0 items-center'>

        <div>
          <h2 className='font-noto font-black text-blueI text-2xl lg:text-4xl'>{title}</h2>
          <p className='font-noto font-bold mt-2 lg:mt-4 text-blueI text-lg lg:text-xl'>{`Pastor ${pastor}`}</p>
          <p className='font-noto font-medium mt-1 text-gray-800 text-xs lg:text-sm'>{dateSeter(date)}</p>
          <p className='font-noto font-normal mb-8 line-clamp-4 text-blueI text-xs lg:text-lg max-w-[850px] mt-3 mr-10 lg:mr-0 lg:mt-5'>{content}</p>
        </div>

        <Button text='Leer Prédica' dark={false} onClick={() => {}} />

      </div>

    </div>
  )
}

export default PrincipalPreach
