import { PayPalButtons } from '@paypal/react-paypal-js'

interface Props {
  descrip: string
  amountMoney: string
}

const PaypalButtonsCont = (props: Props) => {
  return (
    <div className=' z-[1]'>
        <PayPalButtons
        createOrder={async (data, actions) => {
          return await actions.order.create({
            purchase_units: [
              {
                amount: {
                  value: props.amountMoney
                },
                description: props.descrip
              }
            ]
          })
        }}
        onApprove={async (data, actions) => {
          const order = await actions.order?.capture()
          console.log(order)
        }}
        />
    </div>
  )
}

export default PaypalButtonsCont
