import { useAppSelector } from '../../store/store'
import PaypalButtonsCont from './paypal/PaypalButtons'
import { useEffect } from 'react'

const CheckOutPaypal = () => {
  const check = useAppSelector(state => state.checkOut)
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <div className="flex flex-col items-center justify-center w-full">
      <div className="flex flex-col items-center p-16 border-2 my-80 border-blueI rounded-xl">
        <h1 className="font-noto text-4xl text-blueI font-black">Checkout Paypal</h1>
        <p className="font-noto text-xl text-blueI font-bold">Total: ${check.amountCheck}</p>
        <p className="font-noto text-lg text-blueI mb-12">{check.descriptionCheck}</p>
        <PaypalButtonsCont descrip={check.descriptionCheck} amountMoney={check.amountCheck} />
      </div>
    </div>
  )
}

export default CheckOutPaypal
