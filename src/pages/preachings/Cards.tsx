import { type PreachType } from '../../types/types'
import Card from './Card'

interface Props {
  preachings: PreachType[]
}

const Cards = ({ preachings }: Props) => {
  return (
    <div className='flex flex-wrap w-full max-w-[1356px] justify-center gap-10'>
      {
        preachings.map((preach, index) => (
          <Card title={preach.title} key={index} content={preach.content} image={preach.image} id={preach.id} date={preach.date} pastor={preach.pastor} />
        ))
      }
    </div>
  )
}

export default Cards
