import { Link } from 'react-router-dom'
import { type ButtonSidepanelProps } from '../../types/types'
import { useAppDispatch } from '../../store/store'
import { OpenCloseSidePanel } from '../../store/features/sidepanel'

const Button = ({ svg, rute, name }: ButtonSidepanelProps) => {
  const dispatch = useAppDispatch()

  return (
    <Link onClick={() => dispatch(OpenCloseSidePanel())} className='flex items-center py-4 pl-2 mx-5 rounded-md hover:bg-gray-300' to={rute}>
      {svg}
      <p className='font-noto text-lg text-blueI ml-3'>{name}</p>
    </Link>
  )
}

export default Button
