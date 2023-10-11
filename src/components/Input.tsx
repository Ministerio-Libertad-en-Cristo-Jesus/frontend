import { type InputType } from '../types/types'

const Input = ({ value, onChange, placeholder, name, error, errorMessage, type }: InputType) => {
  return (
    <div className='flex flex-col w-full'>
      <label className='font-noto text-blueI text-sm'>{placeholder}</label>

      <input
      className={`outline-none rounded-lg border-2 ${error ? 'border-red-700' : 'border-blueI'} py-2 pl-2 font-noto text-blueI focus:text-whiteI bg-white focus:bg-blueI transition-all duration-200`}
      name={name}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      type={type} />

      <label className='font-noto text-red-700 text-sm mt-1'>{errorMessage}</label>
    </div>
  )
}

export default Input
