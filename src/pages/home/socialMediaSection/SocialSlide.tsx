import Button from '../../../components/Button'
import { type SocialMediaType } from '../../../types/types'

const SocialSlide = ({ logo, link, name, description, buttonText }: SocialMediaType) => {
  return (
    <div className='flex flex-col items-center'>
      <div className='flex flex-col xl:flex-row items-center'>

        <a href={link} target='_blank' rel='noreferrer' className='flex justify-center w-full xl:w-auto bg-blueI px-14 py-20 lg:px-20 lg:py-32 mr-0 xl:mr-12 rounded-xl'>
          {logo}
        </a>

        <div className='flex flex-col items-center mt-7 xl:mt-0'>
          <div>
            <h2 className='font-noto font-black text-blueI text-xl lg:text-5xl mb-6'>{name}</h2>
            <p className='font-noto line-clamp-4 text-blueI text-sm lg:text-base mb-8'>
              {description}
            </p>
          </div>
          <Button text={buttonText} dark={false} onClick={() => {}} />
        </div>
      </div>

      <div className=' h-24 w-full bg-whiteI'></div>

    </div>
  )
}

export default SocialSlide
