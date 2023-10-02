import HeaderSidePanel from './header'
import Buttons from './Buttons'
import { buttonsArray } from './buttonsInfo'
import { useAppSelector, useAppDispatch } from '../../store/store'
import { OpenCloseSidePanel } from '../../store/features/sidepanel'

const Sidepanel = () => {
  const openClose = useAppSelector(state => state.sidePanel.open)
  const dispatch = useAppDispatch()

  return (
    <div className={`flex flex-row-reverse fixed z-50 backdrop-blur-sm ${openClose ? 'opacity-100 visible' : 'opacity-0 invisible'} transition-all ease-in-out duration-300 bg-black/20 w-full h-screen`}>
      <div className={`bg-whiteI h-screen w-2/6 ${openClose ? 'translate-x-0' : 'translate-x-[100%]'} transition-all ease-in-out duration-500 min-w-[384px] max-w-sm`}>

        <HeaderSidePanel />
        <Buttons buttons={buttonsArray} />

      </div>
      <div onClick={() => dispatch(OpenCloseSidePanel())} className={`w-11/12 h-screen ${openClose ? 'opacity-100 visible' : 'opacity-0 invisible'} bg-transparent`}></div>
    </div>
  )
}

export default Sidepanel
