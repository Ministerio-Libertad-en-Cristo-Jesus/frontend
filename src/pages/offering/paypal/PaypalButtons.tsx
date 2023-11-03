import { PayPalButtons } from '@paypal/react-paypal-js'
import { useNavigate } from 'react-router-dom'
import Swal from 'sweetalert2'
import { useAppDispatch } from '../../../store/store'
import { changeCheck } from '../../../store/features/checkout'
import { useEffect } from 'react'

interface Props {
  descrip: string
  amountMoney: string
}

const PaypalButtonsCont = (props: Props) => {
  const dispatch = useAppDispatch()
  const navigate = useNavigate()
  useEffect(() => {
    if (props.descrip === '') {
      navigate('/offering')
    }
  }, [])
  return (
    <div className=' z-[1]'>
        <PayPalButtons
        style={{ color: 'blue', label: 'donate' }}
        createOrder={async (data, actions) => {
          return await actions.order.create({
            purchase_units: [
              {
                amount: {
                  value: props.amountMoney,
                  breakdown: {
                    item_total: {
                      value: props.amountMoney,
                      currency_code: 'USD'
                    }
                  }
                },
                description: props.descrip,
                items: [
                  {
                    name: 'Donacion',
                    quantity: '1',
                    category: 'DONATION',
                    unit_amount: {
                      currency_code: 'USD',
                      value: props.amountMoney
                    }
                  }
                ]
              }
            ]
          })
        }}
        onApprove={async (data, actions) => {
          const order = await actions.order?.capture()
          const namePayer = order?.payer.name?.given_name === undefined ? 'Hermano' : order.payer.name.given_name
          const idCheck = order?.purchase_units[0].payments?.captures !== undefined ? order?.purchase_units[0].payments?.captures[0].id : 'ref'
          Swal.fire({
            title: '<p class="font-noto text-blueI font-black text-4xl" >Tu pago fue procesado correctamente</p>',
            icon: 'success',
            // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
            html: `Gracias <b>${namePayer}</b>, Tu Número de transacción es: <b>${idCheck}</b><br/>Reporta tu pago a través de nuestro correo libertadencristojesus@gmail.com`,
            confirmButtonText: 'Cerrar',
            confirmButtonColor: '#14213d'
          }).then((result) => {
            if (result.isConfirmed) {
              navigate('/offering')
            }
          }).catch((error) => {
            console.log(error)
          })
        }}
        onError={(err) => {
          Swal.fire({
            title: '<p class="font-noto text-blueI font-black text-4xl" >Ops.. Parece que hubo un erro</p>',
            icon: 'error',
            // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
            html: `Ocurrio un error intenta de nuevo ${JSON.stringify(err)}`,
            confirmButtonText: 'Volver a intentar',
            confirmButtonColor: '#14213d'
          }).then((result) => {
            if (result.isConfirmed) {
              dispatch(changeCheck({ descriptionCheck: '', amountCheck: '1' }))
              navigate('/offering')
            }
          }).catch((error) => {
            console.log(error)
          })
        }}
        />
    </div>
  )
}

export default PaypalButtonsCont
