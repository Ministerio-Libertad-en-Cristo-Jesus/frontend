import { useEffect } from 'react'
import ArrowIcon from '../../assets/componentSVG/arrow'
import Header from './Header'
import BoxContact from './BoxContact'
import ButtonsPages from './ButtonsPages'

const Contact = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <div className='w-full flex flex-col items-center'>
      <Header />
      <ArrowIcon />
      <ButtonsPages />
      <BoxContact />
    </div>
  )
}

export default Contact
