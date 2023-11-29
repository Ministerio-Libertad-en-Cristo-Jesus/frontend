import HeaderSidePanel from './header'
import Buttons from './Buttons'
import { buttonsArray } from './buttonsInfo'
import { useAppDispatch, useAppSelector } from '../../store/store'
import { OpenCloseSidePanel } from '../../store/features/sidepanel'

const Sidepanel = () => {
  const dispatch = useAppDispatch()
  const openClose = useAppSelector(state => state.sidePanel.open)

  return (
    <section onClick={() => dispatch(OpenCloseSidePanel())} className={`flex flex-row-reverse fixed top-0 z-50 backdrop-blur-sm ${openClose ? 'opacity-100 visible' : 'opacity-0 invisible'} transition-all ease-in-out duration-300 bg-black/20 w-screen h-screen`}>
      <aside onClick={(e) => { e.stopPropagation() }} className={`bg-whiteI h-screen w-full sm:w-2/6 overflow-auto ${openClose ? 'translate-x-0' : 'translate-x-[100%]'} transition-all ease-in-out duration-500 min-w-[360px]`}>

        <HeaderSidePanel />
        <Buttons buttons={buttonsArray} />

      </aside>
    </section>
  )
}

export default Sidepanel
