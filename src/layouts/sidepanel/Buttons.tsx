import { type ButtonsSidepanelProps } from '../../types/types'
import Button from './Button'

const Buttons = ({ buttons }: ButtonsSidepanelProps) => {
  return (
    <nav className='pb-16'>
      {buttons.map((button, index) => (
        <Button svg={button.svg} name={button.name} rute={button.rute} key={index} />
      ))}
    </nav>
  )
}

export default Buttons
