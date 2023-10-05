import offeringImg from '../../../assets/image/ofrenda.png'
import Button from '../../../components/Button'

const OfferingSection = () => {
  return (
    <div className="flex justify-center w-full h-64 mb-14 bg-blueI">
      <div className='flex justify-between items-center px-10 lg:px-24 max-w-[1440px]'>
        <div className='flex flex-col items-center'>

          <div>
            <h4 className='font-noto font-black text-whiteI text-3xl'>DIOS AMA AL DADOR ALEGRE</h4>
            <p className='font-noto font-medium text-whiteI text-lg mt-2'>2 Corintios 9:7</p>
            <p className='font-noto font-light max-w-[600px] text-whiteI mt-1'>Cada uno dé como propuso en su corazón: no con tristeza, ni por necesidad, porque Dios ama al dador alegre.</p>
          </div>

          <div className='mt-6'>
            <Button text='Diezmos y Ofrendas' dark={true} onClick={() => {}} />
          </div>

        </div>

        <img className='h-64' src={offeringImg} alt="Offering" />
      </div>
    </div>
  )
}

export default OfferingSection
