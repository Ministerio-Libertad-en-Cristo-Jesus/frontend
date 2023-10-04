import { type ButtonType } from '../types/types'

const Button = ({ text, dark, onClick }: ButtonType) => {
  return (
    <button
    onClick={onClick}
    className={`font-noto border-2 py-1 px-5 font-medium text-sm lg:text-base lg:py-2 lg:px-8 lg:font-semibold ${dark
    ? 'border-WhiteI bg-blueI text-whiteI hover:bg-whiteI hover:text-blueI'
    : 'border-blueI bg-whiteI text-blueI hover:bg-blueI hover:text-whiteI'}  transition-all duration-200`}>
      {text}
    </button>
  )
}

export default Button
