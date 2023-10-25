import ArrowIcon from '../../assets/componentSVG/arrow'
import RightInfo from '../../layouts/RightInfo'
import ButtonsPages from '../contact/ButtonsPages'
import BoxOffering from './BoxOffering'
import HeaderOffering from './HeaderOffering'
import { useEffect } from 'react'

const Offering = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <div className='w-full flex flex-col items-center mt-20'>
      <HeaderOffering />
      <ArrowIcon />
      <div className='w-full flex flex-col items-center px-10 lg:px-24 max-w-[1440px]'>
        <ButtonsPages />
        <div className='flex flex-col xl:flex-row w-full gap-0 xl:gap-12'>
          <BoxOffering />
          <RightInfo />
        </div>
      </div>
    </div>
  )
}

export default Offering
