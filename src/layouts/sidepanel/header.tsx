import CloseIcon from '../../assets/componentSVG/close'
import { useAppDispatch } from '../../store/store'
import { OpenCloseSidePanel } from '../../store/features/sidepanel'

const HeaderSidePanel = () => {
  const dispatch = useAppDispatch()

  return (
    <header className='flex justify-between my-5 mx-5 pb-4 border-b border-b-blueI'>
      <p className=' font-noto font-bold text-2xl text-blueI'>Menú</p>
      <div onClick={() => dispatch(OpenCloseSidePanel())}>
        <CloseIcon />
      </div>
    </header>
  )
}

export default HeaderSidePanel
