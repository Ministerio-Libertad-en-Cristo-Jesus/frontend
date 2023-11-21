/* eslint-disable @typescript-eslint/promise-function-async */
import { Suspense, lazy } from 'react'
import { Outlet, Route, Routes } from 'react-router-dom'
import { PayPalScriptProvider } from '@paypal/react-paypal-js'
// import Navbar from './layouts/navbar/Navbar'
// import Sidepanel from './layouts/sidepanel/Sidepanel'
// import Footer from './layouts/footer/Footer'
import Loading from './components/Loading'

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

function App () {
  const paypalClientId = import.meta.env.VITE_REACT_APP_PAYPAL_CLIENT_ID
  return (
    <PayPalScriptProvider options={{ clientId: paypalClientId, currency: 'USD' }}>
      <>
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
