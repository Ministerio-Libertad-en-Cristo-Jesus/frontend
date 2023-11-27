import HeaderSidePanel from './header'
import Buttons from './Buttons'
import { buttonsArray } from './buttonsInfo'
import { useAppSelector } from '../../store/store'

const Sidepanel = () => {
  const openClose = useAppSelector(state => state.sidePanel.open)

  return (
    <nav className={`flex flex-row-reverse fixed top-0 z-50 backdrop-blur-sm ${openClose ? 'opacity-100 visible' : 'opacity-0 invisible'} transition-all ease-in-out duration-300 bg-black/20 w-screen h-screen`}>
      <div className={`bg-whiteI h-screen w-full sm:w-2/6 overflow-auto ${openClose ? 'translate-x-0' : 'translate-x-[100%]'} transition-all ease-in-out duration-500 min-w-[360px]`}>

        <HeaderSidePanel />
        <Buttons buttons={buttonsArray} />

      </div>
    </nav>
  )
}

export default Sidepanel
