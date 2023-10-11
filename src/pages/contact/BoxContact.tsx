import Buttons from './Buttons'
import FormContact from './form/FormContact'

const BoxContact = () => {
  return (
    <div className="w-full p-10 lg:p-24">
      <div className="flex flex-col items-center w-full p-7 lg:p-16 border-2 border-blueI rounded-2xl">
        <h2 className='font-noto text-blueI text-center font-black text-2xl sm:text-4xl'>Vias de contacto</h2>
        <p className='font-noto text-blueI text-center font-light mb-7 lg:mb-16 text-lg sm:text-2xl'>¡a un solo click!</p>
        <Buttons />
        <h2 className='font-noto text-blueI text-center font-black mt-7 lg:mt-16 text-2xl sm:text-4xl'>Dejanos un mensaje</h2>
        <p className='font-noto text-blueI text-center font-light mb-7 lg:mb-16 text-lg sm:text-2xl'>¡Llena todos los campos!</p>
        <FormContact />

      </div>
    </div>
  )
}

export default BoxContact
