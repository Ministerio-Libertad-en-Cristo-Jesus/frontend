import { useNavigate } from 'react-router-dom'
import offeringImg from '../../../assets/image/ofrenda.png'
import Button from '../../../components/Button'

const OfferingSection = () => {
  const navigate = useNavigate()
  return (
    <section id='offeringSect' className="flex justify-center w-full mb-10 lg:mb-24 bg-blueI">
      <div className='flex flex-col-reverse lg:flex-row justify-between items-center px-10 lg:px-24 max-w-[1440px]'>
        <div className='flex flex-col items-center'>

          <div className='mt-6'>
            <h4 className='font-noto font-black text-whiteI text-xl lg:text-3xl'>DIOS AMA AL DADOR ALEGRE</h4>
            <p className='font-noto font-medium text-whiteI text-base lg:text-lg mt-2'>2 Corintios 9:7</p>
            <p className='font-noto font-light max-w-[600px] mr-0 lg:mr-4 text-whiteI text-sm lg:text-base mt-1'>Cada uno dé como propuso en su corazón: no con tristeza, ni por necesidad, porque Dios ama al dador alegre.</p>
          </div>

          <div className='mt-8 mb-12 lg:mt-6 lg:mb-6'>
            <Button text='Diezmos y Ofrendas' dark={true} onClick={() => { navigate('/offering') }} />
          </div>

        </div>

        <img className='lg:h-64' src={offeringImg} alt="Offering" />
      </div>
    </section>
  )
}

export default OfferingSection
