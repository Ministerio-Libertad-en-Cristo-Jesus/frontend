import { useState } from 'react'
import Input from '../../components/Input'
import Select from '../../components/Select'
import { useAppDispatch } from '../../store/store'
import { changeCheck } from '../../store/features/checkout'
import { useNavigate } from 'react-router-dom'

const BoxOffering = () => {
  const [offeringPaypal, setOfferingPaypal] = useState({
    description: '',
    amount: '20'
  })
  const dispatch = useAppDispatch()
  const navigate = useNavigate()
  const [description, setDescription] = useState(['', ''])
  const options = ['Donación', 'Diezmo', 'Ofrenda']
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    switch (name) {
      case 'typePay':
        setDescription([value, description[1]])
        setOfferingPaypal({
          ...offeringPaypal,
          description: [value, description[1]].join(': ')
        })
        break
      case 'description':
        setDescription([description[0], value])
        setOfferingPaypal({
          ...offeringPaypal,
          description: [description[0], value].join(': ')
        })
        break
      case 'amount':
        setOfferingPaypal({
          ...offeringPaypal,
          amount: value
        })
        break
      default:
        break
    }
  }
  const handleClick = () => {
    dispatch(changeCheck({ amountCheck: offeringPaypal.amount, descriptionCheck: offeringPaypal.description }))
    navigate('/offering/checkoutpaypal')
  }

  return (
    <div className="w-full pb-10 lg:pb-24 pt-5 lg:pt-12 max-w-[1440px]">
      <div className="flex flex-col items-center w-full p-7 lg:p-16 border-2 gap-8 border-blueI rounded-2xl">
        <div className='flex w-full gap-8'>
          <Select options={options} placeholder='Tipo de pago' name='typePay' value={description[0]} handleChange={handleChange} />
          <Input name='amount' placeholder='Cantidad $' value={offeringPaypal.amount} onChange={handleChange} error={false} errorMessage='' type='number' />
        </div>
        <Input name='description' placeholder='Descripción' value={description[1]} onChange={handleChange} error={false} errorMessage='' type='text' />
        <button
        onClick={handleClick}
        className='w-full py-3 px-4 font-noto text-sm lg:text-base font-medium text-blueI rounded-lg bg-whiteI border-2 border-blueI hover:bg-blueI hover:text-whiteI transition-all duration-200'>
          Pagar con Paypal
        </button>
      </div>
    </div>
  )
}

export default BoxOffering
