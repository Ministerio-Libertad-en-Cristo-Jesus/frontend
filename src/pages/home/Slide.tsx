import { type Preach } from '../../types/types'

const Slide = ({ title, content, image }: Preach) => {
  return (
    <div className='flex w-full max-w-[1440px] relative z-[1] justify-center'>

      <div className='w-full h-[600px] absolute top-0 right-0 max-w-[1440px] bg-gradient-to-t from-black'></div>

      <div className='absolute left-24 bottom-16 '>
        <h2 className='font-noto font-black text-whiteI text-4xl'>{title}</h2>
        <p className='font-noto font-extralight text-whiteI text-sm max-w-[850px] mt-5'>{content}</p>
        <p className='font-noto font-bold text-whiteI mt-5 underline w-max hover:text-blue-700 hover:cursor-pointer transition-all duration-300'>Leer más</p>
      </div>

      <img
      className='h-[600px] w-full max-w-[1440px] object-cover'
      src={image}
      alt="que-es-la-oracion" />

    </div>
  )
}

export default Slide
