import { type Preach } from '../../../types/types'

const Slide = ({ title, content, image }: Preach) => {
  return (
    <div className='flex w-full max-w-[1440px] relative z-[1] justify-center'>

      <div className='w-full h-[600px] absolute top-0 right-0 max-w-[1440px] bg-gradient-to-t from-black'></div>

      <div className='absolute left-10 bottom-8 lg:left-24 lg:bottom-16 '>
        <h2 className='font-noto font-black text-whiteI text-xl mr-10 lg:mr-0 lg:text-4xl'>{title}</h2>
        <p className='font-noto font-extralight line-clamp-4 text-whiteI text-xs lg:text-sm max-w-[850px] mt-1 mr-10 lg:mr-0 lg:mt-5'>{content}</p>
        <p className='font-noto font-bold text-whiteI text-sm lg:text-base mt-2 mb-10 lg:mt-5 underline w-max hover:text-blue-700 hover:cursor-pointer transition-all duration-300'>Leer más</p>
      </div>

      <img
      className='h-[600px] w-full max-w-[1440px] object-cover'
      src={image}
      alt={title} />

    </div>
  )
}

export default Slide
