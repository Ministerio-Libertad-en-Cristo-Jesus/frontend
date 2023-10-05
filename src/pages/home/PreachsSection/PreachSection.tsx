import { useState } from 'react'
import ArrowIcon from '../../../assets/componentSVG/arrow'
import PrincipalPreach from './PrincipalPreach'
import { preachings } from '../../../utils/preachingInfo'
import Cards from './Cards'

const PreachSection = () => {
  const INITIAL_STATE = window.screen.width >= 1415
  const firstPreach = preachings[0]
  const restPreachings = preachings.slice(1, 4)
  const [width] = useState(INITIAL_STATE)
  return (
    <div className="flex flex-col flex-wrap items-center max-w-[1440px]">
      <ArrowIcon />
      <h3 className='mt-12 font-noto font-black text-blueI text-4xl'>ENSEÑANZAS</h3>
      <p className='font-noto font-normal text-blueI text-lg mt-1'>Nuestras últimas enseñanzas</p>
      <PrincipalPreach {...firstPreach} />
      <Cards preaches={width ? restPreachings : restPreachings.slice(0, 2)} />
    </div>
  )
}

export default PreachSection
