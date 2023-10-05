import Button from '../../../components/Button'
import { type Preaches } from '../../../types/types'
import Card from './Card'

const Cards = ({ preaches }: Preaches) => {
  return (
    <div className='flex flex-col items-center mb-10 lg:mb-24 border-2 rounded-3xl border-blueI mx-10 lg:mx-24 p-6 lg:p-12 max-w-[1440px]'>
      <div className='flex flex-wrap gap-12 justify-center lg:gap-20'>
        {preaches.map((preach) => (
          <Card {...preach} key={preach.id} />
        ))}
      </div>
      <div className='mt-12'>
        <Button text='Ver más Prédicas' dark={false} onClick={() => {}} />
      </div>
    </div>
  )
}

export default Cards
