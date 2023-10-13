import CardSmall from '../components/CardSmall'
import { preachings } from '../utils/preachingInfo'

const RightInfo = () => {
  const first3 = preachings.slice(0, 3)
  return (
    <div className=' pb-10 lg:pb-24 pt-5 lg:pt-12'>
      <div className='flex flex-col items-center border-2 border-blueI p-7 lg:p-16 rounded-2xl'>
        <h2 className='font-noto text-blueI text-2xl lg:text-3xl text-center mb-6 lg:mb-8 font-black'>Podría Interesarle</h2>
        <div className='flex flex-row flex-wrap justify-around xl:flex-col items-center  gap-7'>
          {first3.map((preach) => (
            <CardSmall {...preach} key={preach.id} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default RightInfo
