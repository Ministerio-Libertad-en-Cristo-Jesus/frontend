/* eslint-disable @typescript-eslint/promise-function-async */
// Importación de módulos y componentes necesarios desde React y otras librerías
import { Suspense, lazy } from 'react'
import { Outlet, Route, Routes } from 'react-router-dom'
import { PayPalScriptProvider } from '@paypal/react-paypal-js'

// Componente de carga para utilizar en Suspense
import Loading from './components/Loading'

// Importación de componentes diferidos (Lazy loading)
const Navbar = lazy(() => import('./layouts/navbar/Navbar'))
const Sidepanel = lazy(() => import('./layouts/sidepanel/Sidepanel'))
const Footer = lazy(() => import('./layouts/footer/Footer'))
const Home = lazy(() => import('./pages/home/Home'))
const AboutUs = lazy(() => import('./pages/aboutUs/AboutUs'))
const Prayers = lazy(() => import('./pages/prayers/Prayers'))
const Offering = lazy(() => import('./pages/offering/Offering'))
const Preachings = lazy(() => import('./pages/preachings/Preachings'))
const Contact = lazy(() => import('./pages/contact/Contact'))
const CreatePreach = lazy(() => import('./pages/CreatePreach'))
const Preach = lazy(() => import('./pages/preach/Preach'))
const CheckOutPaypal = lazy(() => import('./pages/offering/CheckOutPaypal'))

// Función principal del componente App
function App () {
  // Obtiene el clientId de PayPal desde las variables de entorno
  const paypalClientId = import.meta.env.VITE_REACT_APP_PAYPAL_CLIENT_ID
  return (
    // Envoltura para la integración de PayPal
    <PayPalScriptProvider options={{ clientId: paypalClientId, currency: 'USD' }}>
      <>
        {/* Definición de rutas */}
        <Routes>
          <Route path='/' element={<Layout />}>
            <Route path='/' element={<Home />}/>
            <Route path='/aboutus' element={<AboutUs />}/>
            <Route path='/prayers' element={<Prayers />}/>
            <Route path='/contact' element={<Contact />}/>
            <Route path='/offering' element={<Offering />}/>
            <Route path='/offering/checkoutpaypal' element={<CheckOutPaypal />}/>
            <Route path='/preach' element={<Preach />}>
              <Route path=':id' element={<Preach />}/>
            </Route>
            <Route path='/preachings' element={<Preachings />}>
              <Route path=':page' element={<Preachings />}/>
            </Route>
            <Route path='/create-preach' element={<CreatePreach />}/>
          </Route>
        </Routes>
      </>
    </PayPalScriptProvider>
  )
}

// Componente Layout: contiene elementos comunes a todas las páginas
function Layout () {
  return (
    <>
      <Suspense fallback={<Loading />}>
        <Sidepanel />
        <Navbar />
        <Outlet />
        <Footer />
      </Suspense>
    </>
  )
}

export default App
