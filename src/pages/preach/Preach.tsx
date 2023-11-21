import { useEffect } from 'react'
import { preachings } from '../../utils/preachingInfo'
import { useParams, useLocation } from 'react-router-dom'
import { type PreachType } from '../../types/types'
import HeaderPreach from './HeaderPreach'
import ArrowIcon from '../../assets/componentSVG/arrow'
import ContentPreach from './ContentPreach'
import ButtonsPages from '../../components/ButtonsPages'
import BottonInfo from './BottonInfo'
import PreachNoExist from './PreachNoExist'

const Preach = () => {
  const params = useParams()
  const location = useLocation()
  const preachId = params.id !== undefined ? parseInt(params.id) : 0
  const preachFind = preachings.find(preach => preach.id === preachId)
  let preachInfo1: PreachType
  // eslint-disable-next-line @typescript-eslint/no-unused-expressions
  preachFind !== undefined ? preachInfo1 = preachFind : preachInfo1 = preachings[0]
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [location.pathname])
  return (
    <div className="flex flex-col items-center w-full mt-20">
      {
        preachFind === undefined
          ? <PreachNoExist />
          : <div className='flex flex-col w-full items-center px-10 lg:px-52 max-w-[1440px]'>
              <HeaderPreach headerImg={preachInfo1.image} />
              <ArrowIcon />
              <ContentPreach preachInfo1={preachInfo1} />
              <ButtonsPages />
              <div className='h-[45px] sm:h-[96px]'></div>
              <BottonInfo />
            </div>
      }
    </div>
  )
}

export default Preach
