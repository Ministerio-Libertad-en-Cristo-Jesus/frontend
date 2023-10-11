import ArrowIcon from '../../../assets/componentSVG/arrow'
import PrincipalPreach from './PrincipalPreach'
import { preachings } from '../../../utils/preachingInfo'
import Cards from './Cards'
import Button from '../../../components/Button'
import { useNavigate } from 'react-router-dom'

const PreachSection = () => {
  const navigate = useNavigate()
  const firstPreach = preachings[0]
  const restPreachings = preachings.slice(1, 4)
  return (
    <div className="flex flex-col flex-wrap mb-12 lg:mb-24 items-center max-w-[1440px]">
      <ArrowIcon />
      <h3 className='mt-12 font-noto font-black text-blueI text-4xl'>ENSEÑANZAS</h3>
      <p className='font-noto font-normal text-blueI text-lg mt-1'>Nuestras últimas enseñanzas</p>
      <PrincipalPreach {...firstPreach} />
      <Cards preaches={restPreachings} />
      <Button text='Ver más Prédicas' dark={false} onClick={() => { navigate('/preachings') }} />
    </div>
  )
}

export default PreachSection
