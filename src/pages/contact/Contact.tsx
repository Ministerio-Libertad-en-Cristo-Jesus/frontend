import { useEffect } from 'react'
import ArrowIcon from '../../assets/componentSVG/arrow'
import Header from './Header'
import BoxContact from './BoxContact'
import ButtonsPages from '../../components/ButtonsPages'
import RightInfo from '../../layouts/RightInfo'

const Contact = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <div className='w-full flex flex-col items-center mt-20'>
      <Header />
      <ArrowIcon />
      <div className='w-full flex flex-col items-center px-10 lg:px-24 max-w-[1440px]'>
        <ButtonsPages />
        <div className='flex flex-col xl:flex-row w-full gap-0 xl:gap-12'>
          <BoxContact />
          <RightInfo />
        </div>
      </div>
    </div>
  )
}

export default Contact
