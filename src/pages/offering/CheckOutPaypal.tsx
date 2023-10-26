import PayPalLogo from '../../assets/componentSVG/PayPalLogo'
import { useAppSelector } from '../../store/store'
import PaypalButtonsCont from './paypal/PaypalButtons'
import { useEffect } from 'react'

const CheckOutPaypal = () => {
  const check = useAppSelector(state => state.checkOut)
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <div className="flex flex-col items-center justify-center px-10 lg:px-24 w-full">
      <div className="flex flex-col items-center p-16 border-2 mt-52 mb-40 max-w-[500px] border-blueI rounded-xl">
        <PayPalLogo />
        <h1 className="font-noto text-2xl sm:text-4xl mt-6 text-center text-blueI font-black">Checkout Paypal</h1>
        <p className="font-noto text-lg sm:text-xl text-blueI font-bold">Total: ${check.amountCheck}</p>
        <p className="font-noto text-sm sm:text-base mt-6 text-blueI mb-12">{check.descriptionCheck}</p>
        <PaypalButtonsCont descrip={check.descriptionCheck} amountMoney={check.amountCheck} />
      </div>
    </div>
  )
}

export default CheckOutPaypal
