interface Props {
  options: string[]
  placeholder: string
  name: string
  value: string
  handleChange: (e: React.ChangeEvent<HTMLSelectElement>) => void
}

const SelectAreaCode = ({ options, name, value, handleChange, placeholder }: Props) => {
  return (
    <div className="flex flex-col">
      <label className='font-noto text-blueI text-sm'>{placeholder}</label>
      <select
      className="outline-none rounded-lg border-2 border-blueI py-2 pl-2 font-noto text-blueI focus:text-whiteI bg-white focus:bg-blueI transition-all duration-200"
      name={name}
      value={value}
      onChange={handleChange}>
        <option value="" hidden>{placeholder}</option>
        {
          options.map((option, index) =>
            <option key={index} value={option}>{option}</option>
          )
        }
      </select>
    </div>
  )
}

export default SelectAreaCode