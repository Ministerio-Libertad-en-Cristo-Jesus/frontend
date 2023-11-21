import { type PreachType } from '../../types/types'
import { dateSeter } from '../../utils/dateSeter'
import { lectureTimeCalculator } from '../../utils/lectureTime'
interface Props {
  preachInfo1: PreachType
}

const ContentPreach = ({ preachInfo1 }: Props) => {
  const lectureTime = lectureTimeCalculator(preachInfo1.content, 200)
  return (
    <div className='flex flex-col items-center pt-10 lg:pt-24 max-w-[1440px]'>
      <h1 className='font-noto font-black text-blueI text-3xl sm:text-4xl text-center'>{preachInfo1.title}</h1>
      <p className='font-noto text-blueI text-lg sm:text-xl mt-4'>{dateSeter(preachInfo1.date)}</p>
      <p className='font-noto text-gray-700 text-base sm:text-lg mt-4 m-10 text-center sm:mb-16'>{`Tiempo de lectura estimado: ${lectureTime} minutos`}</p>
      <div className='flex flex-col items-center w-full gap-8'>
        {
          preachInfo1.content.map((paragraph, index) => (
            <p key={index} className='font-noto font-normal text-blueI text-lg'>{paragraph}</p>
          ))
        }
      </div>
    </div>
  )
}

export default ContentPreach
