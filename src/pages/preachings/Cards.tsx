import { type Preach } from '../../types/types'
import Card from './Card'

interface Props {
  preachings: Preach[]
}

const Cards = ({ preachings }: Props) => {
  return (
    <div className='flex flex-wrap w-full justify-center sm:justify-between gap-8'>
      {
        preachings.map((preach, index) => (
          <Card title={preach.title} key={index} content={preach.content} image={preach.image} id={preach.id} date={preach.date} pastor={preach.pastor} />
        ))
      }
    </div>
  )
}

export default Cards
