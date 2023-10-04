import ArrowIcon from '../../../assets/componentSVG/arrow'
import PrincipalPreach from './PrincipalPreach'

const PreachSection = () => {
  return (
    <div className="flex flex-col flex-wrap items-center max-w-[1440px]">
      <ArrowIcon />
      <h3 className='mt-12 font-noto font-black text-blueI text-4xl'>ENSEÑANZAS</h3>
      <p className='font-noto font-normal text-blueI text-lg mt-1'>Nuestras últimas enseñanzas</p>
      <PrincipalPreach />
    </div>
  )
}

export default PreachSection
