// import PayPalLogo from '../../assets/componentSVG/PayPalLogo'
import { changeCheck } from '../../../store/features/checkout'
import { useAppDispatch, useAppSelector } from '../../../store/store'
import { useEffect } from 'react'
import InfoOrderBox from './InfoOrderBox'
import ProcedPayBox from './ProcedPayBox'

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
    <main>
      <section className="flex flex-col lg:flex-row items-center lg:items-start lg:justify-between px-10 lg:px-24 w-full gap-12">
        <InfoOrderBox descrip={check.descriptionCheck} amountMoney={check.amountCheck} payType={check.payType} />
        <ProcedPayBox descrip={check.descriptionCheck} amountMoney={check.amountCheck} />
      </section>
    </main>
  )
}

export default CheckOutPaypal
