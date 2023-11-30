import ArrowLeft from '../../assets/componentSVG/ArrowLeft'
// import PayPalLogo from '../../assets/componentSVG/PayPalLogo'
import { changeCheck } from '../../store/features/checkout'
import { useAppDispatch, useAppSelector } from '../../store/store'
import PaypalButtonsCont from './paypal/PaypalButtons'
import { useEffect } from 'react'

const CheckOutPaypal = () => {
  const dispatch = useAppDispatch()
  const check = useAppSelector(state => state.checkOut)
  useEffect(() => {
    window.scrollTo(0, 0)
    return () => {
      dispatch(changeCheck({ descriptionCheck: '', amountCheck: '1', payType: '' }))
    }
  }, [])
  return (
    <div className="flex justify-between px-10 lg:px-24 w-full gap-12">

      <div className='flex flex-col items-center mt-52 mb-40 w-1/2 gap-8 border-2 border-blueI rounded-xl p-16'>
        <div className='flex w-full items-center gap-4'>
          <ArrowLeft />
          <p className='font-noto text-whiteI bg-blue-600 border border-blue-800 rounded px-2 py-1'>PayPal Checkout</p>
        </div>

        <div className='flex flex-col w-full'>
          <p className=' font-noto font-normal text-gray-500 text-normal'>Pago Total:</p>
          <p className=' font-noto text-blueI font-medium text-4xl'>${check.amountCheck}.00</p>
        </div>

        <div className='w-full bg-[#dadada] rounded-lg p-4'>
          <div className='flex flex-col w-full gap-3'>
            <div className='flex w-full justify-between'>
              <p className='font-noto text-blueI text-sm font-medium'>Donación</p>
              <p className='font-noto text-blueI text-sm font-medium'>${check.amountCheck}.00</p>
            </div>
            <div>
              <p className='font-noto font-normal text-gray-700 text-xs text-normal'><b>{check.payType}:</b> {check.descriptionCheck}</p>
            </div>
          </div>
        </div>

        <div className='flex flex-col w-full gap-6'>
          <div className='flex w-full justify-between'>
            <p className='font-noto text-blueI font-medium'>Subtotal:</p>
            <p className='font-noto text-blueI font-medium'>${check.amountCheck}.00</p>
          </div>

          <div className='w-full bg-gray-600 h-[1px]'></div>

          <div className='flex w-full justify-between'>
            <p className='font-noto text-blueI font-medium'>Total:</p>
            <p className='font-noto text-blueI font-medium'>${check.amountCheck}.00</p>
          </div>
        </div>
      </div>

      <div className="flex flex-col items-center p-16 border-2 mt-52 mb-40 w-1/2 border-blueI rounded-xl">
        <div className='flex w-full gap-2 items-center'>
          <div className='w-full bg-gray-600 h-[1px]'></div>
          <p className="font-noto text-sm my-6 text-center text-gray-600 font-medium whitespace-nowrap">Realizar Pago</p>
          <div className='w-full bg-gray-600 h-[1px]'></div>
        </div>
        <PaypalButtonsCont descrip={check.descriptionCheck} amountMoney={check.amountCheck} />
      </div>
    </div>
  )
}

export default CheckOutPaypal
