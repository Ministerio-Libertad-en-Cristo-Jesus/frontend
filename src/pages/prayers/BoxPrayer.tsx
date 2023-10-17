import FormPrayer from './form/FormPrayer'

const BoxPrayer = () => {
  return (
    <div className="w-full pb-10 lg:pb-24 pt-5 lg:pt-12 max-w-[1440px]">
      <div className="flex flex-col items-center w-full p-7 lg:p-16 border-2 border-blueI rounded-2xl">
        <h2 className='font-noto text-blueI font-black text-4xl mb-3'>Peticiones de oración</h2>
        <p className='font-noto text-blueI font-light mb-2 text-lg text-center'>Estamos interesados en ti y en tus necesidades, y creemos que Dios responderá toda petición que hagamos de común acuerdo. Envía tu petición y junto a un equipo de intercesión estaremos orando por ella.</p>
        <p className='font-noto text-blueI font-medium text-lg mb-12 text-center'>Para enviar tu petición, rellena el siguiente formulario:</p>
        <FormPrayer />
      </div>
    </div>
  )
}

export default BoxPrayer
